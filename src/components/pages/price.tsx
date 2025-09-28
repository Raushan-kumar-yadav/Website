import { useParams } from "react-router-dom";
import { geniflowcore } from '@/constants';
import * as motionVarient from "@/components/motionVariants";
import { motion } from "framer-motion";
import { Grid } from "@/assets";
import PriceCards from "../priceCards";

const Price = () => {
  const param = useParams();
  console.log(param);

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center relative mt-20">
        <motion.h1
          variants={motionVarient.fadeInUp}
          initial='start'
          animate='end'
          transition={{ 
            delay: 0.2,
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          className="text-4xl font-bold uppercase px-4 py-2 
            bg-gradient-to-br from-blue/20 to-white/5
            backdrop-blur-lg backdrop-saturate-200
            border border-white/30
            rounded-full 
            shadow-2xl shadow-black/20
            relative overflow-hidden
            before:absolute before:inset-0 
            before:bg-gradient-to-br before:from-white/20 before:to-transparent
            before:backdrop-blur-sm
            mb-4"
        >
          {geniflowcore.title}
        </motion.h1>

        <motion.p
          variants={motionVarient.fadeInUp}
          initial='start'
          animate='end'
          transition={{ 
            delay: 0.4,
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg relative z-10"
        >
          {geniflowcore.desc}
        </motion.p>

        {/* Glow effect positioned behind the content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" 
          style={{ backgroundImage: `url(${Grid})` }}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ 
            delay: 0.4,
            duration: 1,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] -z-10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5,
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
      >
        <PriceCards />
      </motion.div>
    </div>
  );
};

export default Price;