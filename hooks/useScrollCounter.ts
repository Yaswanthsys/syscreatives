import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollCounter(target: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = target;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      const currentValue = Math.floor(startValue + easeProgress * (endValue - startValue));
      
      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return { count, ref };
}
