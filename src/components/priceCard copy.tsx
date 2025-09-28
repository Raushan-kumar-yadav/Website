import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

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

interface ProductCardProps {
  title: string;
  desc: string;
  imgSrc?: string;
  productID: string;
  isMostPopular: string;
}

const PriceCard = ({
  title,
  desc,
  productID,
  isMostPopular
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [, setIsHovering] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleEnter = () => {
      setIsHovering(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowGlow(true);
      }, 100);
    };

    const handleLeave = () => {
      setIsHovering(false);
      setShowGlow(false);
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div variants={heroVariant} className="flex items-center justify-center">
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
        
        .shine-animation {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shine 2s infinite;
        }
        
        .shine-animation::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          animation: shine 2s infinite;
        }
      `}</style>

      <motion.div
        ref={cardRef}
        variants={heroChildVariant}
        className={`relative group rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl ${isMostPopular
          ? 'min-h-[500px] min-w-[400px] max-w-md'
          : 'min-h-[400px] min-w-[320px] max-w-sm'
          }`}
        style={{
          background: showGlow
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.1), rgba(255, 255, 255, 0.05))`
            : 'rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Border glow effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-400 ease-out"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(36, 93, 198, 0.8), transparent 100%)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'xor',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            padding: '2px',
            opacity: showGlow ? 1 : 0,
          }}
        />

        {/* Inner glow */}
        <div
          className="pointer-events-none absolute z-10 h-60 w-60 rounded-full bg-blue-400 blur-2xl transition-all duration-200 ease-out"
          style={{
            top: mousePos.y - 100,
            left: mousePos.x - 100,
            opacity: showGlow ? 0.2 : 0,
            transform: showGlow ? 'scale(1)' : 'scale(0.8)',
          }}
        />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-black-500/20 rounded-3xl" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] rounded-3xl" />
        </div>

        {/* Card Content */}
        <div className="relative z-20 text-white">
          {/* Header Section */}
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <h3 className={`font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex-shrink-0 ${isMostPopular ? 'text-3xl' : 'text-2xl'
                }`}>
                {title}
              </h3>
              {
                isMostPopular && (<Badge
                  variant="destructive"
                  className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 border-0 shine-animation whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #ec4899, #f97316)',
                    backgroundSize: '200% 100%',
                    animation: 'shine 2s infinite'
                  }}
                >
                  <span className="relative z-10">Most Popular</span>
                </Badge>)}

            </div>
          </div>

          {/* Description */}
          <p className={`text-gray-300 mb-8 leading-relaxed break-words ${isMostPopular ? 'text-base' : 'text-sm'
            }`}>
            {desc}
          </p>

          {/* Dotted Divider */}
          <div className="mb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50 relative">
              <div className="absolute inset-0 bg-dotted-line"></div>
            </div>
            <style jsx>{`
              .bg-dotted-line {
                background-image: radial-gradient(circle, rgba(156, 163, 175, 0.8) 1px, transparent 1px);
                background-size: 8px 8px;
                background-position: 0 0;
              }
            `}</style>
          </div>

          {/* Price Section */}
          <div className="mb-8">
            {/* Current Price */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className={`font-bold text-white ${isMostPopular ? 'text-5xl' : 'text-4xl'
                }`}>$29/Month</span>
            </div>
            <p className={`text-gray-400 mb-1 ${isMostPopular ? 'text-sm' : 'text-xs'
              }`}>Billed monthly</p>

            {/* Offer Badge and Original Price in same line */}
            <div className="flex items-center justify-left gap-2 mb-2 flex-wrap">
              <div className="flex items-center">
                <span className={`text-gray-400 line-through ${isMostPopular ? 'text-xl' : 'text-lg'
                  }`}>$49</span>
                <span className={`text-gray-500 ml-1 ${isMostPopular ? 'text-2xl' : 'text-xl'
                  }`}>/month</span>
              </div>

              <Badge variant="secondary" className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-3 py-1 font-semibold shadow-lg ${isMostPopular ? 'text-xs' : 'text-[10px]'
                }`}>
                Limited Time Offer
              </Badge>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg cursor-pointer hover:shadow-xl transition-all duration-200 transform hover:scale-105  active:scale-95 ${isMostPopular ? 'py-3 px-8 text-lg' : 'py-2 px-8'
                }`}
              onClick={() => console.log(`Navigate to /products/${productID}`)}
            >
              Get Started
            </Button>
          </div>

          {/*  */}
          <div className="mb-5 space-y-2 mt-5">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4  flex-shrink-0" />
              <span className={`text-gray-300 ${isMostPopular ? 'text-base' : 'text-sm'
                }`}>Full access to all features</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 flex-shrink-0" />
              <span className={`text-gray-300 ${isMostPopular ? 'text-base' : 'text-sm'
                }`}>24/7 premium support</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4  flex-shrink-0" />
              <span className={`text-gray-300 ${isMostPopular ? 'text-base' : 'text-sm'
                }`}>Advanced analytics</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-4 mt-6 text-gray-400 flex-wrap">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0" />
              <span className={isMostPopular ? 'text-sm' : 'text-xs'}>Secure</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-1">
              <span className={isMostPopular ? 'text-sm' : 'text-xs'}>Cancel anytime</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-1">
              <span className={isMostPopular ? 'text-sm' : 'text-xs'}>14-day trial</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PriceCard;