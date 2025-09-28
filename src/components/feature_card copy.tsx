import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import * as motionVarient from "@/components/motionVariants";

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBoxColor?: string;
  title: string;
  desc: string;
  imgSrc?: string;
}

export const FeatureCard = ({
  title,
  desc,
  imgSrc,
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <motion.div
      variants={motionVarient.staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      ref={cardRef}
      className="relative group rounded-2xl p-6 bg-card text-card-foreground overflow-hidden shadow-lg transition-all duration-500 border border-transparent"
      style={{
        background: isHovering
          ? `bg-card radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.1), transparent 70%)`
          : undefined,
      }}
      whileHover={{ scale: 1.03 }}
    >
      {/* ✨ Localized border glow effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(32, 107, 247, 0.8), transparent 100%)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'xor',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            padding: '2px',
          }}
        />
      )}

      {/* ✨ Localized inner glow */}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-10 h-60 w-60 rounded-full bg-blue-400 opacity-0 blur-2xl transition-opacity duration-1000 ease-out"
          style={{
            top: mousePos.y - 100,
            left: mousePos.x - 100,
            opacity: isHovering ? 0.2 : 0,
            transitionDelay: '1000ms', // Add delay before animation starts
          }}
        />
      )}

      {/* 👇 Card Content */}
      <motion.div variants={motionVarient.fadeInUp} className="relative z-20">
        <motion.h3 className="mt-4 text-xl font-semibold">{title}</motion.h3>
        <motion.p className="mt-2 text-muted-foreground">{desc}</motion.p>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            className="mt-4 rounded-xl w-full h-auto object-cover"
          />
        )}
      </motion.div>
    </motion.div>
  );
};