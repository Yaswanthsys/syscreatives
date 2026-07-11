"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string; // e.g. rgba(212,175,55,0.15) for gold glow
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className,
  glowColor = "rgba(212, 175, 55, 0.12)",
  hoverEffect = true,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1D1D1D]/75 backdrop-blur-md transition-all duration-500",
        hoverEffect && "hover:border-gold/30 hover:shadow-[0_12px_35px_-12px_rgba(212,175,55,0.15)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Spotlight border glow overlay */}
      {hoverEffect && isFocused && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
