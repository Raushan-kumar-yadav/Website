import { Button } from "./ui/button";
import { Grid } from '@/assets';
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import * as motionVarient from "@/components/motionVariants";

export const Cta = () => {
    return (
        <section className="relative py-16">
            {/* Decorative elements */}
            <div className="absolute  from-blue-50 to-purple-50 rounded-3xl "></div>
            <div className="absolute top-0 left-1/10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

            <motion.div variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                viewport={{ once: true }}
                className="relative group bg-card rounded-3xl p-8 overflow-hidden py-20 px-6 max-w-7xl mx-auto "

            >
                {/* Content goes here */}
                <div className="relative z-20">
                    <motion.h2 variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                        viewport={{ once: true }} className="text-3xl font-bold text-white mb-4 leading-tight">
                        Ready to Transform Your Workflow?
                    </motion.h2>
                    <motion.p variants={motionVarient.fadeInUp} initial='start' whileInView='end'
                        viewport={{ once: true }} className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl">
                        Join thousands of professionals who are already streamlining their processes
                        and achieving better results with our platform.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="default" className="bg-blue-500 hover:bg-blue-400">
                            Get Started Free <ArrowRightIcon />
                        </Button>
                        {/* Bottom positioned grid */}
                        <div className="absolute w-210 h-90 opacity-30  bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
                        <div className="absolute  w-96 h-32 bg-blue-500 blur-[150px] opacity-50 "></div>

                        {/* Top-right positioned grid */}
                        <div className="absolute top-0 right-0 w-210 h-90 opacity-30  bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{ backgroundImage: `url(${Grid})` }}></div>
                        <div className="absolute top-0 right-0 w-96 h-32 bg-blue-500 blur-[150px] opacity-50"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Cta;