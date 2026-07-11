"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch || window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Soft elastic springs to prevent choppy rendering
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Center the 400px glow circle on the pointer (offset by 200px)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[120px] z-30 mix-blend-screen"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
