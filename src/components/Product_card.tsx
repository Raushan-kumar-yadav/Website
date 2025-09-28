import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import * as motionVarient from "@/components/motionVariants";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


interface ProductCardProps {
  icon: string;
  iconBoxColor?: string;
  title: string;
  isPaid: boolean;
  desc: string;
  imgSrc?: string;
  productID: string
}

const ProductCard = ({
  title,
  desc,
  imgSrc,
  icon,
  productID,
  isPaid
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [, setIsHovering] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  let PrincingButton = "Pricing";
  if (!isPaid){
    PrincingButton = "Free"
  }
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleEnter = () => {
      setIsHovering(true);
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Delay the glow effect by 300ms
      timeoutRef.current = setTimeout(() => {
        setShowGlow(true);
      }, 100);
    };

    const handleLeave = () => {
      setIsHovering(false);
      setShowGlow(false);
      // Clear the timeout to prevent glow from appearing after mouse leaves
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
      // Cleanup timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      variants={motionVarient.staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      ref={cardRef}
      className="relative group rounded-2xl p-6 bg-card text-card-foreground overflow-hidden shadow-lg transition-all duration-100 border border-transparent"
      style={{
        background: showGlow
          ? `bg-card radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.1), transparent 70%)`
          : undefined,
      }}
      whileHover={{ scale: 1.03 }}
    >
      {/* ✨ Localized border glow effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-400 ease-out"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(32, 107, 247, 0.8), transparent 100%)`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: 'xor',
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: 'xor',
          padding: '2px',
          opacity: showGlow ? 1 : 0,
        }}
      />

      {/* ✨ Localized inner glow */}
      <div
        className="pointer-events-none absolute z-10 h-60 w-60 rounded-full bg-blue-400 blur-2xl transition-all duration-200 ease-out"
        style={{
          top: mousePos.y - 100,
          left: mousePos.x - 100,
          opacity: showGlow ? 0.2 : 0,
          transform: showGlow ? 'scale(1)' : 'scale(0.8)',
        }}
      />

      {/* 👇 Card Content */}
      <motion.div variants={motionVarient.fadeInUp} className="relative z-20">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            className="mt-4 rounded-xl w-full h-auto object-cover"
          />
        )}

        {/* Header with icon and title */}
        <div className="flex items-center gap-3 mb-4 mt-5">
          {icon ? (
            <img
              src={icon}
              alt={title}
              className="w-10 h-10 rounded-xl object-cover border-1 border-cyan-400/30"
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
              {title.charAt(0).toUpperCase()}
            </div>
          )}
          <motion.h3 className="text-xl font-semibold">{title}</motion.h3>
        </div>

        {/* Description */}
        <motion.p className="text-muted-foreground mb-5">{desc}</motion.p>

        {/* Download button */}
        <div className="flex justify-center gap-5">
          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-300 transition-colors duration-200 cursor-pointer"
            onClick={() => navigate(`/products/${productID}`)}
          >
            View
          </Button>

          <Button
            variant="secondary"
            className="bg-gray-500 hover:bg-gray-400  px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
            onClick={() => {
              if (!isPaid)return;
              navigate(`/products/${productID}/Price`)
            }}
          >
            {PrincingButton}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;