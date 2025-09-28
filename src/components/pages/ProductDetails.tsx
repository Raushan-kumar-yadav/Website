import { useParams } from "react-router-dom";
import FeatureSection from "../featureSection";
import { geniflowcore } from '@/constants';
import IconsSection from "../infinityIcon";
import * as motionVarient from "@/components/motionVariants";
import { motion } from "framer-motion";
import { Grid } from "@/assets";
import { ArrowDownWideNarrow } from "lucide-react";
import ImageCarousel from "../ImageCarousel";
import TutorialLinksCard from "../TutorialLinksCard";
import  DownloadCard  from "../downloadCard";


const ProductDetails = () => {
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

      <div className="">
        <IconsSection logo={geniflowcore.logo} />
      </div>

      <div className="flex flex-col items-center justify-center text-center relative mt-5 ">
        <motion.h1
          variants={motionVarient.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className="text-sm uppercase px-4 py-2 
     bg-gradient-to-br from-blue/20 to-white/5
     backdrop-blur-lg backdrop-saturate-200
     border border-white/30
     rounded-full 
     shadow-2xl shadow-black/20
     relative overflow-hidden
     before:absolute before:inset-0 
     before:bg-gradient-to-br before:from-white/20 before:to-transparent
     before:backdrop-blur-sm
     mb-4
     flex items-center justify-center gap-2"
        >
          {geniflowcore.title} Features <ArrowDownWideNarrow />
        </motion.h1>

      </div>

      {geniflowcore.featureDetails.map(({ featureTitle, featureDesc, featureCards }, index) => (
        <FeatureSection
          key={index}
          featureTitle={featureTitle}
          featureDesc={featureDesc}
          featureCards={featureCards}
        />
      ))}
      <div className="flex flex-col items-center justify-center text-center relative mt-20">
        <motion.h1
          variants={motionVarient.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className="text-sm uppercase px-4 py-2 
     bg-gradient-to-br from-blue/20 to-white/5
     backdrop-blur-lg backdrop-saturate-200
     border border-white/30
     rounded-full 
     shadow-2xl shadow-black/20
     relative overflow-hidden
     before:absolute before:inset-0 
     before:bg-gradient-to-br before:from-white/20 before:to-transparent
     before:backdrop-blur-sm
     mb-4
     flex items-center justify-center gap-2"
        >
          {geniflowcore.title} Brief Features Overviews <ArrowDownWideNarrow />
        </motion.h1>


        {/* Glow effect positioned behind the content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90 opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
      </div>
      <div className="mt-10">
        <ImageCarousel images={geniflowcore.images} />
      </div>
            <div className="flex flex-col items-center justify-center text-center relative mt-30">
        <motion.h1
          variants={motionVarient.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className="text-sm uppercase px-4 py-2 
     bg-gradient-to-br from-blue/20 to-white/5
     backdrop-blur-lg backdrop-saturate-200
     border border-white/30
     rounded-full 
     shadow-2xl shadow-black/20
     relative overflow-hidden
     before:absolute before:inset-0 
     before:bg-gradient-to-br before:from-white/20 before:to-transparent
     before:backdrop-blur-sm
     mb-2
     flex items-center justify-center gap-2"
        >
          {geniflowcore.title} Brief Video and Audio Tutrials <ArrowDownWideNarrow />
        </motion.h1>


        {/* Glow effect positioned behind the content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90 opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
      </div>
      <div className="flex justify-center "><TutorialLinksCard tutorialLinks={geniflowcore.tutorialLinks}/></div>


      <div className="flex flex-col items-center justify-center text-center relative mt-30">
        <motion.h1
          variants={motionVarient.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className="text-sm uppercase px-4 py-2 
     bg-gradient-to-br from-blue/20 to-white/5
     backdrop-blur-lg backdrop-saturate-200
     border border-white/30
     rounded-full 
     shadow-2xl shadow-black/20
     relative overflow-hidden
     before:absolute before:inset-0 
     before:bg-gradient-to-br before:from-white/20 before:to-transparent
     before:backdrop-blur-sm
     mb-4
     flex items-center justify-center gap-2"
        >
          Download {geniflowcore.title} now  <ArrowDownWideNarrow />
        </motion.h1>


        {/* Glow effect positioned behind the content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90 opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
      </div>

      <div className=""><DownloadCard downloadcard={geniflowcore.downloadcard}/></div>
    </div>

  );
};

export default ProductDetails;