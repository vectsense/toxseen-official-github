// Copyright (c) 2024 21st.dev
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useMemo } from "react";

interface DynamicBackgroundProps {
  startingGap?: number;
  gradientColors?: string[];
  gradientStops?: number[];
}

const MIN_STARTING_GAP = 70;
const MAX_STARTING_GAP = 150;
const ANIMATION_SPEED = 0.005;

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  startingGap: initialStartingGap = MIN_STARTING_GAP,
  gradientColors: externalGradientColors = [
    "#2979FF",
    "#DB5692",
    "#5BECF1",
    "#F2CB05",
    "#5BECF1",
    "#7BE5B2",
    "#DB5692",
  ],
  gradientStops: externalGradientStops = [35, 55, 60, 70, 85, 100, 110],
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Memoize gradientColors and gradientStops
  const gradientColors = useMemo(
    () => externalGradientColors,
    [externalGradientColors]
  );
  const gradientStops = useMemo(
    () => externalGradientStops,
    [externalGradientStops]
  );

  useEffect(() => {
    let animationFrame: number;
    let width = initialStartingGap;
    let directionWidth = 1;

    const animateStartingGap = () => {
      if (width >= MAX_STARTING_GAP) directionWidth = -1;
      if (width <= MIN_STARTING_GAP) directionWidth = 1;
      width += directionWidth * ANIMATION_SPEED;

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

    return () => cancelAnimationFrame(animationFrame);
  }, [gradientColors, gradientStops, initialStartingGap]);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {/* Add fade-in animation */}
      <motion.div
        key="dynamic-background"
        initial={{ opacity: 0 }} // Start with 0 opacity
        animate={{
          opacity: 2, // Fade in to full opacity
          transition: { duration: 9, ease: [0.25, 0.1, 0.25, 1] }, // Smooth transition
        }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          ref={containerRef}
          className="absolute inset-0 transition-transform [mask-image:radial-gradient(ellipse_at_top,transparent_80%,black_84%),radial-gradient(ellipse_at_bottom,transparent_70%,black_96%)]"
        />
        <div className="h-full w-full z-[1] [background-image:repeating-linear-gradient(180deg,#00ace4_0%,#11e59c_4px,transparent_1px,transparent_0.13%)] opacity-10" />
      </motion.div>
    </div>
  );
};

export default DynamicBackground;
