"use client";

import React from "react";
import { cn } from "@/lib/utils";

const orbitKeyframes = `
@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(var(--angle, 0deg))
      translateY(var(--radius, 50px))
      rotate(calc(var(--angle, 0deg) * -1));
  }
  100% {
    transform: translate(-50%, -50%)
      rotate(calc(var(--angle, 0deg) + 360deg))
      translateY(var(--radius, 50px))
      rotate(calc(var(--angle, 0deg) * -1 - 360deg));
  }
}
`;

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  pathClassName?: string;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  pathClassName,
  iconSize = 40,
  speed = 1,
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const count = React.Children.count(children);

  return (
    <>
      <style>{orbitKeyframes}</style>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
          aria-hidden="true"
        >
          <circle
            className={cn(
              "stroke-[1.5] opacity-70",
              "stroke-primary/35",
              "dark:stroke-primary/25",
              pathClassName,
            )}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = count > 0 ? (360 / count) * index : 0;

        return (
          <div
            style={{
              "--angle": `${angle}deg`,
              "--radius": `${radius}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              animation: `orbit ${calculatedDuration}s linear ${
                delay ? `-${delay}s` : "0s"
              } infinite ${reverse ? "reverse" : "normal"}`,
            } as React.CSSProperties}
            className={cn(
              "absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full will-change-transform",
              className,
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

