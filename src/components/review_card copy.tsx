import { useState, useRef, useEffect } from "react";

interface ReviewCardProps {
  title: string;
  reviewText: string;
  userName: string;
  userAvatar?: string;
}

export const ReviewCard = ({
  title,
  reviewText,
  userName,
  userAvatar
}: ReviewCardProps) => {
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
    <div
      ref={cardRef}
      className="relative bg-card group rounded-2xl p-6 overflow-hidden shadow-lg transition-all duration-500 border border-transparent backdrop-blur-md hover:scale-105 cursor-pointer bg-card"
      style={{
        background: isHovering 
          ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px` 
          :"",
      }}
    >
      {/* Border glow effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(32, 107, 247, 0.8), transparent 100%)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'xor',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            padding: '2px',
          }}
        />
      )}

      {/* Inner glow */}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-10 h-60 w-60 rounded-full bg-blue-400 opacity-20 blur-2xl transition-opacity duration-500"
          style={{
            top: mousePos.y - 100,
            left: mousePos.x - 100,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-20 h-full flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Review Text */}
        <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
          "{reviewText}"
        </p>

        {/* User Profile - Bottom Left */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="relative">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/30"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                {userName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <p className="text-white font-medium text-sm">{userName}</p>
            <p className="text-gray-400 text-xs">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};