import { motion } from "framer-motion";
import { featureData } from "@/constants";
import { FeatureCard } from "@/components/feature_card";
import * as motionVarient from "@/components/motionVariants";
import { Grid } from '@/assets';

const Feature = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <motion.p variants={motionVarient.fadeInUp} initial='start' whileInView='end'
          viewport={{ once: true }}
          className="inline-block text-sm uppercase px-4 py-2 
       bg-gradient-to-br from-blue/20 to-white/5
       backdrop-blur-lg backdrop-saturate-200
       border border-white/30
       rounded-full 
       shadow-2xl shadow-black/20
       relative overflow-hidden
       before:absolute before:inset-0 
       before:bg-gradient-to-br before:from-white/20 before:to-transparent
       before:backdrop-blur-sm"
        >
          {featureData.sectionSubtitle}
        </motion.p>

        <motion.h2
          variants={motionVarient.fadeInUp} initial='start' whileInView='end'
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold my-4 relative z-10"
        >
          {featureData.sectionTitle}
        </motion.h2>

        <motion.p
          variants={motionVarient.fadeInUp} initial='start' whileInView='end'
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg relative z-10"
        >
          {featureData.sectionText}
        </motion.p>

        {/* Glow effect positioned behind the title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90   opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{backgroundImage:`url(${Grid})`}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
      </div>

      <motion.div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2" variants={motionVarient.fadeInUp} initial='start' whileInView='end'
        viewport={{ once: true }}>
        {featureData.features.map(({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
          <FeatureCard
            key={index}
            icon={icon}
            iconBoxColor={iconBoxColor}
            title={title}
            desc={desc}
            imgSrc={imgSrc}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Feature;
