import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const direction = scrollY > lastScrollY ? "down" : "up";
      // Add a threshold of 5px to avoid jitter
      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 5
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return { scrollDirection, isScrolled };
}
