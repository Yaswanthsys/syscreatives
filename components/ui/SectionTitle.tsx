"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("flex flex-col mb-12 sm:mb-16 md:mb-20 max-w-3xl", alignmentClasses[alignment], className)}
    >
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-[2px] bg-gradient-to-r from-gold via-gold/50 to-transparent mt-5 rounded-full" 
      />
    </motion.div>
  );
}
