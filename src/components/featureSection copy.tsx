import { motion } from "framer-motion";
import * as motionVarient from "@/components/motionVariants";
import { Grid } from '@/assets';
import GridCard from "@/components/GridCard";

type FeatureCardProp = {
    img: string,
    title: string,
    desc: string,
    link: string,
    moreDetails: {
        title?: string,
        desc?: string
    }
}

type FeatureCardsProp = {
    featureCards: FeatureCardProp[]
}

type featureDetailsProps = {
    title: string,
    desc: string,
    featureCards: FeatureCardsProp[]
}


const FeatureSection = ({featureTitle,featureDesc,featureCards} ) => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">

                <motion.h2
                    variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold my-4 relative "
                >
                    {featureTitle}
                </motion.h2>

                <motion.p
                    variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                    viewport={{ once: true }}
                    className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg relative  "
                >
                    {featureDesc}
                </motion.p>

                {/* Glow effect positioned behind the title */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90   opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
            </div>

            <motion.div className="" variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                viewport={{ once: true }}>
                    <GridCard featureCards={featureCards} />
            </motion.div>
        </section>
    );
};

export default FeatureSection;