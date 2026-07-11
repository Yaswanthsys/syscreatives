"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "style"> {
  variant?: "gold" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "gold",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold/30 cursor-pointer";

  const variants = {
    gold: "bg-gold text-black hover:bg-[#b89528] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] border border-transparent font-semibold",
    outline:
      "border border-white/20 bg-transparent text-white hover:border-gold hover:text-gold hover:bg-gold/5",
    glass:
      "bg-white/[0.02] backdrop-blur-md border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
    ghost: "bg-transparent text-white hover:text-gold hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Light sheen animation overlay */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </motion.button>
  );
}
