"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);

  const springX = useSpring(x, { stiffness: 60, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 60, damping: 25, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary warm glow — follows cursor */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(189,37,37,0.07) 0%, rgba(189,37,37,0.02) 40%, transparent 70%)",
        }}
      />
      {/* Secondary ambient ink glow — offset slightly */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          left: springX,
          top: springY,
          translateX: "-30%",
          translateY: "-60%",
          background:
            "radial-gradient(circle, rgba(27,32,39,0.04) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
