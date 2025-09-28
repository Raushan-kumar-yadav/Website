
import { heroData } from "@/constants";
import { Button } from "@/components/ui/button";
import HorizontalScrollCarousel from "@/components/CardStackScroll"

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { CirclePlay } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import ReactPlayer from 'react-player'




/* motions varient */

import { motion } from "motion/react";
import { useRef } from "react";
import { useScroll,useSpring,useTransform } from "motion/react";


const heroVariant = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.4,
        }
    }
}

const heroChildVariant = {
    start: {
        y: 30,
        opacity: 0,
        filter: 'blur(5px)'
    },
    end: {
        y: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            duration: 0.7,
            ease: 'easeOut'
        },
    },
} as const;

const Hero = () => {
    const heroBannerRef = useRef<HTMLElement>(null);

    const{scrollYProgress} = useScroll({
        target:heroBannerRef,
        offset:['start 1080px','50% start'],

    })

    const scrollYTransform =  useTransform(scrollYProgress,[0,1],[0.85,1.15]);

    const scale = useSpring(scrollYTransform,{
        stiffness:300,
        damping:60,
        
    })
    return (
        <section className="py-10 md:py-16">
            <motion.div variants={heroVariant} initial='start' animate='end' className="container text-center">
                <div className="max-w-screen-md mx-auto">
                    <motion.p variants={heroChildVariant} className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10">
                        {heroData.sectionSubtitle}
                    </ motion.p>
                    <motion.h2 variants={heroChildVariant} className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl">
                        {heroData.sectionTitle}
                        <span className="relative isolate ms-4">
                            {heroData.decoTitle}
                            <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2"></span>
                        </span>
                    </motion.h2>

                    <motion.p variants={heroChildVariant} className="text-muted-foreground md:text-xl">{heroData.sectionText}</motion.p>

                    <motion.div variants={heroChildVariant} className="flex justify-center gap-2 mt-6 md:mt-10">
                        <Button >
                            Explore Tools
                        </Button>

                        <Dialog>
                            <DialogTrigger>
                                <Button variant="ghost"> <CirclePlay /> Watch Demo</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AspectRatio ratio={16 / 9}>
                                    <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' style={{
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        
                                    }} />
                                </AspectRatio>
                            </DialogContent>
                        </Dialog>


                    </motion.div>
                </div>

                <motion.div initial={{
                    y: 120,
                    opacity: 0,
                    filter: 'blur(5px)'
                }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0)'
                    }}
                    
                    transition={{ duration: 1.5, delay: 0.5, ease: "backIn" }} className="relative mt-12 max-w-screen-xxl mx-auto isolate rounded-xl md:mt-16" 
                    >
                    <HorizontalScrollCarousel></HorizontalScrollCarousel>
                    {/* glow effect */}
                    <motion.div
                        initial={{
                            scale: 0.8,
                            opacity: 0.0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{ duration: 2, delay:0.9, ease: "backInOut" }}

                        className="absolute bg-blue-500 inset-5 blur-[200px] -z-10">
                    </motion.div>

                </motion.div>

            </motion.div>
        </section>
    )
}

export default Hero;