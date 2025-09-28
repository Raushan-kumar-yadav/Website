import  { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroBanner } from '@/assets';
import type { MotionValue } from "framer-motion";
// Sample data with placeholder images
const projects = [
  {
    title: "Creative Studio",
    description: "A modern creative studio showcasing innovative design solutions for digital experiences.",
    src: heroBanner,
    url: "https://example.com",
    color: "#8B5CF6"
  },
  {
    title: "Tech Innovation",
    description: "Cutting-edge technology solutions that push the boundaries of what's possible.",
    src: heroBanner, 
    url: "https://example.com",
    color: "#06B6D4"
  },
  {
    title: "Brand Identity",
    description: "Comprehensive brand identity design that tells your story through visual language.",
    src: heroBanner,
    url: "https://example.com", 
    color: "#F59E0B"
  },
  {
    title: "Digital Art",
    description: "Exploring the intersection of art and technology through immersive digital experiences.",
    src: heroBanner,
    url: "https://example.com",
    color: "#EF4444"
  }
];

type CardProps = {
  i: number;
  src: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isMobile: boolean;
};

const Card = ({ i, src, progress, range, targetScale, isMobile }:CardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  if (isMobile) {
    // Mobile version - simple card without sticky positioning
    return (
      <div className="mb-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-[60vh] rounded-2xl overflow-hidden bg-gray-200"
        >
          <img
            src={src}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    );
  }

  // Desktop version - sticky stacking effect
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-4 sm:top-6 md:top-8 lg:top-10">
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${i * 15}px)`,
          zIndex: projects.length - i
        }}
        className="relative w-[100vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] xl:w-[80vw] max-w-8xl 
                   h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[90vh] 
                   rounded-2xl sm:rounded-3xl overflow-hidden origin-top bg-transparent"
      >
        <img
          src={src}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const CardStackScroll = () => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth scrolling effect
  useEffect(() => {
    let ticking = false;
    
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll);
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  if (isMobile) {
    // Mobile layout - simple scrolling cards
    return (
      <div className="min-h-screen py-8">
        <div className="space-y-0">
          {projects.map((project, i) => (
            <Card
              key={`mobile_${i}`}
              i={i}
              src={project.src}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={1}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout - sticky stacking effect
  return (
    <div className="min-h-screen">
      <main ref={container} className="relative pt-0">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={`desktop_${i}`}
              i={i}
              src={project.src}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              isMobile={false}
            />
          );
        })}
      </main>
      
      {/* Extra space for scrolling effect */}
      <div className=""></div>
    </div>
  );
};

export default CardStackScroll;