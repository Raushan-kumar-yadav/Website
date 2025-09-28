import { motion } from "framer-motion";
import { reviewData } from "@/constants";
import { ReviewCard } from "@/components/review_card"
import * as motionVarient from "@/components/motionVariants";
import { Grid } from '@/assets';

const Review = () => {
  // Create multiple copies of the review data for infinite scroll
  const infiniteReviews = [...reviewData.reviewCard, ...reviewData.reviewCard, ...reviewData.reviewCard];

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
          {reviewData.sectionSubtitle}
        </motion.p>

        <div className="relative">
          <motion.h2
            variants={motionVarient.fadeInUp} initial='start' whileInView='end'
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold my-4 relative z-10"
          >
            {reviewData.sectionTitle}
          </motion.h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-210 h-90   opacity-20 -z-10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" style={{backgroundImage:`url(${Grid})`}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500 blur-[150px] opacity-40 -z-10"></div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-10 py-4 hover:[animation-play-state:paused]"
          animate={{
            x: [0, -(384 + 40) * reviewData.reviewCard.length] // 384px (w-96) + 40px (gap-10)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop", 
              duration: reviewData.reviewCard.length * 3, // Scale duration with card count
              ease: "linear",
            },
          }}
          variants={motionVarient.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
        >
          {infiniteReviews.map((review, index) => (
            <div key={`${review.title}-${index}`} className="flex-shrink-0 w-96 px-2">
              <ReviewCard
                title={review.title}
                reviewText={review.text}
                userName={review.reviewAuthor}
                userAvatar={review.avatar}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;