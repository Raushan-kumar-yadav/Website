// config/multer.config.ts
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure upload directory exists
const uploadDir = path.join(process.cwd(), 'frontend', 'public');

// Create directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`📁 Created upload directory: ${uploadDir}`);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Use the absolute path
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const suffix = Date.now();
    const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${suffix}-${sanitizedName}`);
  }
});

// Add file filter for security
const fileFilter = (req, file, cb) => {
  // Accept only image files
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, GIF, WebP and SVG images are allowed.'), false);
  }
};

// Add file size limit (e.g., 5MB)
export const uploadedImage = multer({ 
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

export async function SaveImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
        error: "No file was uploaded"
      });
    }
    
    // Validate file was actually uploaded
    if (req.file.size === 0) {
      // Delete the empty file
      fs.unlinkSync(req.file.path);
      return res.status(400).json({
        success: false,
        message: 'Empty file uploaded',
        error: 'Please select a valid image file'
      });
    }

    // Verify file actually exists on disk
    const fullPath = path.join(uploadDir, req.file.filename);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found at path: ${fullPath}`);
      return res.status(500).json({
        success: false,
        message: 'File upload failed',
        error: 'File was not saved to disk'
      });
    }

    // Create relative path for frontend access
    const relativePath = `frontend/public${req.file.filename}`;
    
    const uploadData = {
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
      path: fullPath,           // Absolute path for server operations
      relativePath: relativePath, // Relative path for frontend access
      uploadDate: new Date()
    };

    console.log(`✅ Image uploaded successfully:`);
    console.log(`   - Filename: ${req.file.filename}`);
    console.log(`   - Path: ${fullPath}`);
    console.log(`   - Size: ${(req.file.size / 1024).toFixed(2)} KB`);
    
    return res.status(200).json({
      success: true,
      message: 'Image uploaded successfully!',
      data: uploadData
    });
  }
  catch (error) {
    console.error('❌ Upload error:', error);
    
    // Clean up file if it exists
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
      console.log('🧹 Cleaned up failed upload file');
    }
    
    return res.status(500).json({
      success: false,
      message: "Something went wrong during upload",
      error: error.message || 'Unknown error occurred'
    });
  }
}

// Optional: Middleware to handle Multer errors
export function handleMulterError(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large',
        error: 'Maximum file size is 5MB'
      });
    }
    return res.status(400).json({
      success: false,
      message: 'Upload error',
      error: err.message
    });
  } else if (err) {
    return res.status(400).json({
      success: false,
      message: 'Upload failed',
      error: err.message
    });
  }
  next();
}