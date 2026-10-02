"use client";

import { useEffect } from "react";

// Updates CSS custom properties --mx and --my on :root
// The actual gradient is rendered by html::after in globals.css
// This approach works over ALL sections regardless of background color.
export function MouseGlow() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null; // Visual handled entirely by CSS (html::after in globals.css)
}
