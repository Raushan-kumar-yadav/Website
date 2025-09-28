
import { motion } from "motion/react";
import { brands } from "@/assets";

import * as variants from "@/components/motionVariants"
const Brand = () => {

    return (
        <section className="Section">
            <div className="container max-w-screen-lg">
                <div className="flex justify-center mb-4 md:mb-6">
                    <motion.p
                        variants={variants.fadeInUp}
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
               inline-block"
                    >
                        Our Software Supported Platforms
                    </motion.p>
                </div>
                <motion.div
                    variants={variants.staggerContainer}
                    initial='start'
                    whileInView='end'
                    viewport={{ once: true }}
                    className="flex justify-center flex-wrap gap-5 md:gap-10">
                    {brands.map((Brand, index) => (
                        <motion.figure variants={variants.fadeInUp}

                            key={index} className="">{
                                <img src={Brand} alt="" />
                            }</motion.figure>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Brand;