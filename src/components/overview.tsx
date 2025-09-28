import { motion } from "framer-motion";
import { overviewData } from "@/constants";
import * as motionVarient from "@/components/motionVariants";
import { Grid } from '@/assets';

import { overviewBanner } from "@/assets";
import { useState, useEffect, useRef } from "react";

const Overview = () => {
    const [Downloads_counts, setDownloadCounts] = useState<number>(0);
    const [active_user_counts, set_active_user] = useState<number>(0);
    const [total_reviews, set_total_reviews] = useState<number>(0);
    const [isInView, setIsInView] = useState<boolean>(false);
    const statsRef = useRef<HTMLDivElement>(null);

    // Function to animate counter
    const animateCounter = (
        targetValue: number,
        setter: React.Dispatch<React.SetStateAction<number>>,
        duration: number = 2000
    ) => {
        const startValue = 0;
        const increment = targetValue / (duration / 16); // 60fps
        let currentValue = startValue;

        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                setter(targetValue);
                clearInterval(timer);
            } else {
                setter(Math.floor(currentValue));
            }
        }, 16);

        return timer;
    };

    // Intersection Observer to detect when stats come into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isInView]);

    // Start counting when component comes into view
    useEffect(() => {
        if (isInView && overviewData.list.length >= 3) {
            const timer1 = animateCounter(
                Number(overviewData.list[0]?.title) || 0, 
                setDownloadCounts
            );
            const timer2 = animateCounter(
                Number(overviewData.list[1]?.title) || 0, 
                set_active_user
            );
            const timer3 = animateCounter(
                Number(overviewData.list[2]?.title) || 0, 
                set_total_reviews
            );

            return () => {
                clearInterval(timer1);
                clearInterval(timer2);
                clearInterval(timer3);
            };
        }
    }, [isInView]);

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
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
                    {overviewData.sectionSubtitle}
                </motion.p>

                <div className="relative">
                    <motion.h2
                        variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold my-4 relative z-10"
                    >
                        {overviewData.sectionTitle}
                    </motion.h2>
                    <motion.p
                        variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg relative z-10"
                    >
                        {overviewData.sectionText}
                    </motion.p>
                    <div className="absolute top-1/15 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90   opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
                    <div className="absolute top-1/15 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>

                    <motion.div variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                        viewport={{ once: true }} className="realative mt-10 max-w-4xl mx-auto shadow-xl">
                        <figure>
                            <img src={overviewBanner} alt="" width={900} height={601} />
                        </figure>
                    </motion.div>
                    
                    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-20 xl:grid-cols[3fr,2.5fr] xl:items-center relative">
                        <motion.p variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                            viewport={{ once: true }} className="section-title text-center lg:max-w-[50ch] lg:max-auto xl:text-center">
                            {overviewData.listTitle}
                        </motion.p>
                        
                        <motion.div
                            ref={statsRef}
                            variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8 relative z-10"
                        >
                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold">{Downloads_counts.toLocaleString()}+</h3>
                                <p className="text-muted-foreground">{overviewData.list[0].text}</p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold">{active_user_counts.toLocaleString()}</h3>
                                <p className="text-muted-foreground">{overviewData.list[1].text}</p>
                            </div>
                            
                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold">{total_reviews.toLocaleString()}+</h3>
                                <p className="text-muted-foreground">{overviewData.list[2].text}</p>
                            </div>
                        </motion.div>
                        
                        {/* glow and grid effect - moved outside motion.div */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90 opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
                        

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview;