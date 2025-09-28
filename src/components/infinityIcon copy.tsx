import { motion } from "framer-motion";
import { 
  Smartphone, 
  Laptop, 
  Camera, 
  Headphones, 
  Watch,
  Tablet,
  Monitor,
  Speaker,
  Keyboard,
  Mouse,
  Printer,
  Wifi,
  Bluetooth,
  Battery,
  Cpu,
  HardDrive,
  MemoryStick,
  Usb,
  Webcam,
  Router,
  Globe,
  Zap
} from "lucide-react";

const IconsSection = () => {
  // Define different sets of icons for each row
  const iconSets = [
    [Smartphone, Laptop, Camera, Headphones, Watch],
    [Tablet, Monitor, Speaker, Keyboard, Mouse, Printer],
    [Wifi, Bluetooth, Battery, Cpu, HardDrive, MemoryStick],
    [Usb, Webcam, Router, Globe, Zap],
    [Smartphone, Camera, Watch, Monitor, Headphones, Battery]
  ];

  // Main central icon
  const MainIcon = Globe;

  // Create multiple copies for infinite scroll
  const createInfiniteIcons = (iconSet) => {
    return [...iconSet, ...iconSet, ...iconSet, ...iconSet];
  };

  const fadeInUp = {
    start: {
      opacity: 0,
      y: 30
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };


  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative">
      
      {/* Icons Container */}
      <div className="relative mt-16 h-[380px] overflow-hidden">
        {/* Central Main Icon */}
        <div className="absolute inset-0 flex items-center justify-center bottom-1/6 z-20">
          <motion.div
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl  backdrop-blur-lg"
          >
            <MainIcon size={28} className="text-white" />
          </motion.div>
        </div>

        {/* 4 Rows of Infinite Scrolling Icons */}
        {iconSets.map((iconSet, rowIndex) => {
          const infiniteIcons = createInfiniteIcons(iconSet);
          const isEvenRow = rowIndex % 2 === 0;
          
          return (
            <div 
              key={rowIndex}
              className="absolute w-full overflow-hidden"
              style={{
                top: `${rowIndex * 55 + 15}px`,
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              <motion.div
                className="flex gap-1 py-2"
                animate={{
                  x: isEvenRow 
                    ? [0, -(52 + 16) * iconSet.length] // Reduced spacing calculation
                    : [-(52 + 16) * iconSet.length, 0] // Reduced spacing calculation
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: iconSet.length * 4,
                    ease: "linear",
                  },
                }}
                variants={fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
              >
                {infiniteIcons.map((IconComponent, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center
                             bg-gradient-to-br from-white/10 to-white/5
                             backdrop-blur-md border border-white/20 rounded-lg
                             shadow-lg hover:shadow-xl transition-all duration-300
                             hover:scale-110 hover:bg-white/15"
                  >
                    <IconComponent 
                      size={20} 
                      className="text-white/80 hover:text-white transition-colors duration-300" 
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}

        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default IconsSection;