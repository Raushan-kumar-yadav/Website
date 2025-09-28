import { motion } from "framer-motion";
import { featureData } from "@/constants";
import { FeatureCard } from "@/components/feature_card";

const Feature = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.p
          className="text-sm text-blue-500 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {featureData.sectionSubtitle}
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-bold my-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {featureData.sectionTitle}
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featureData.sectionText}
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};

export default Feature;
