import PriceCard from "./priceCard";
import { motion } from "framer-motion";
import * as motionVarient from "@/components/motionVariants";
const PriceCards = () => {
  return (
    <motion.div variants={motionVarient.staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }} className="grid grid-cols-1 mt-20 md:grid-cols-1 xl:grid-cols-3 gap-2 md:gap-6 w-full max-w-6xl mx-auto px-3 sm:px-4  gap-6 mb-40">
      <PriceCard 
        title="Basic" 
        desc="best for facebook automation " 
        productID="geniflowcore" 
        isMostPopular=""
        price="$10/month"
        offer_price="$20/Month"
        billed_props="Billed Monthly"
      />
      <PriceCard 
        title="Pro" 
        desc="best for facebook automation " 
        productID="geniflowcore" 
        isMostPopular=" "
        price="$15/Month"
        offer_price="$30/Month"
        
        billed_props="Billed Monthly"
      />
      <PriceCard 
        title="Max" 
        desc="Include everything we have" 
        productID="geniflowcore"
        isMostPopular=""
        price="$20/Month"
        offer_price="$40/Month"
        billed_props="Billed Monthly"
      />
    </motion.div>
  )
}

export default PriceCards;