import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageContainerProps {
    imageSource: string;
    description: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageSource, description }) => {
    return (
        <div className="image-container flex-shrink-0">
            <img className="h-auto w-300 min-w-0 flex-shrink-0" src={imageSource} alt="alt text goes here" />
            <p className="date text-center mt-2 text-sm text-gray-600">{description}</p>
        </div>
    );
};

const HorizontalScroll: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
  
    const x = useTransform(scrollYProgress, [0, 1], [0, -2000]);

    const dummyImages = [
        {
            imageSource: "https://picsum.photos/800/600?random=1",
            description: "Beautiful landscape view - March 2024"
        },
        {
            imageSource: "https://picsum.photos/800/600?random=2", 
            description: "City skyline at sunset - February 2024"
        },
        {
            imageSource: "https://picsum.photos/800/600?random=3",
            description: "Mountain hiking adventure - January 2024"
        },
        {
            imageSource: "https://picsum.photos/800/600?random=4",
            description: "Beach vacation memories - December 2023"
        },
        {
            imageSource: "https://picsum.photos/800/600?random=5",
            description: "Forest trail exploration - November 2023"
        }
    ];

    return (
        <div className="relative">
            {/* Spacer to create scroll distance */}
            <div className="h-[200vh]" ref={containerRef}>
                {/* Sticky container */}
                <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                    <motion.div 
                        className="flex gap-6 p-4"
                        style={{ x }}
                    >
                        {dummyImages.map((image, index) => (
                            <ImageContainer 
                                key={index}
                                imageSource={image.imageSource}
                                description={image.description}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
export { ImageContainer };