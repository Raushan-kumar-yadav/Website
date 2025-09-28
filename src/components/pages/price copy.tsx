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
          whileInView='end'
          viewport={{ once: true }}
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
          whileInView='end'
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg relative z-10"
        >
          {geniflowcore.desc}
        </motion.p>

        {/* Glow effect positioned behind the content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90 opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
      </div>

    <PriceCards  />
    </div>


  );
};

export default Price;