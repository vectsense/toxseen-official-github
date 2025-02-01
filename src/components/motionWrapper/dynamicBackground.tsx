"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface DynamicBackgroundProps {
  startingGap?: number;
  gradientColors?: string[];
  gradientStops?: number[];
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  startingGap: initialStartingGap = 100,

  gradientColors = [
    "#2979FF",
    "#FF80AB",
    "#11e59c",
    "#FFD600",
    "#00E676",
    "#3D5AFE",
    "#111669",
  ],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],

}) => {
  // Validation: Ensure gradientStops and gradientColors lengths match
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `GradientColors and GradientStops must have the same length.
      Received gradientColors length: ${gradientColors.length},
      gradientStops length: ${gradientStops.length}`
    );
  }

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentStartingGap, setCurrentStartingGap] = useState(initialStartingGap);

  useEffect(() => {
    let animationFrame: number;
    let width = currentStartingGap;
    let directionWidth = 1;

    const animateStartingGap = () => {
      if (width >= 150) directionWidth = -1; // Reverse direction at max value
      if (width <= 90) directionWidth = 1; // Reverse direction at min value
      width += directionWidth * 0.1; // Adjust speed of startingGap animation

      setCurrentStartingGap(width);

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(", ");
      const gradient = `radial-gradient(${width}% ${width}% at 50% 50%, ${gradientStopsString})`;

      if (containerRef.current) {
        containerRef.current.style.background = gradient;
      }

      animationFrame = requestAnimationFrame(animateStartingGap);
    };

    animateStartingGap();

    return () => cancelAnimationFrame(animationFrame); // Cleanup animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to prevent infinite re-renders

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        key="dynamic-background"
        initial={{
          opacity: 0,
          scale: 1.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 2,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier easing
          },
        }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Apply the mask image here */}
        <div
          ref={containerRef}
          className="absolute inset-0 transition-transform [mask-image:radial-gradient(ellipse_at_top,transparent_80%,black_81%),radial-gradient(ellipse_at_bottom,transparent_70%,black_95%)]"
        />
        <div className="h-full w-full z-[1] [background-image:repeating-linear-gradient(180deg,#00ace4_0%,#11e59c_4px,transparent_1px,transparent_0.13%)] opacity-10" />
      </motion.div>
    </div>
  );
};

export default DynamicBackground;