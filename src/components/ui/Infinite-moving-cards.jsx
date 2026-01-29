"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  renderItem,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // clone once
    const children = Array.from(scrollerRef.current.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    // direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // speed
    const duration =
      speed === "fast" ? "18s" : speed === "slow" ? "60s" : "35s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  // ✅ JS pause (guaranteed)
  useEffect(() => {
    if (!pauseOnHover) return;
    if (!containerRef.current || !scrollerRef.current) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;

    const handleEnter = () => {
      scroller.style.animationPlayState = "paused";
    };

    const handleLeave = () => {
      scroller.style.animationPlayState = "running";
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 gap-8 py-4",
          start && "animate-scroll"
        )}
      >
        {items.map((item, idx) => (
          <div key={idx} className="shrink-0">
            {renderItem?.(item, idx)}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 35s)
            linear
            infinite
            var(--animation-direction, forwards);
        }

        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
export default InfiniteMovingCards;