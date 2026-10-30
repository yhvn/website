"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";

type Stage = {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scroll: MotionValue<number>;
  still: boolean;
};

const StageContext = createContext<Stage | null>(null);

function useStage() {
  const stage = useContext(StageContext);
  if (!stage) throw new Error("Parallax and Float must sit inside HeroStage");
  return stage;
}

/** Tracks the pointer (-1..1 on each axis) and the hero's scroll progress. */
export function HeroStage({
  className,
  children,
  ...rest
}: { className?: string; children: ReactNode } & React.ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion() ?? false;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
  const pointerY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (still || e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - box.left) / box.width) * 2 - 1);
    rawY.set(((e.clientY - box.top) / box.height) * 2 - 1);
  }

  function onPointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <StageContext.Provider
      value={{ pointerX, pointerY, scroll: scrollYProgress, still }}
    >
      <section
        ref={ref}
        className={className}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        {...rest}
      >
        {children}
      </section>
    </StageContext.Provider>
  );
}

/**
 * Moves its children against the pointer and the scroll.
 * `depth` is in pixels at the edge of the hero; nearer layers use more.
 */
export function Parallax({
  depth,
  scrollDepth = 0,
  className,
  children,
}: {
  depth: number;
  scrollDepth?: number;
  className?: string;
  children: ReactNode;
}) {
  const { pointerX, pointerY, scroll, still } = useStage();
  const x = useTransform(pointerX, (v) => (still ? 0 : -v * depth));
  const pointerOffset = useTransform(pointerY, (v) => (still ? 0 : -v * depth * 0.6));
  const scrollOffset = useTransform(scroll, (v) => (still ? 0 : v * scrollDepth));
  const y = useTransform(() => pointerOffset.get() + scrollOffset.get());

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

/** A slow, endless hover. Each layer gets its own period so they never sync. */
export function Float({
  amplitude = 10,
  duration = 7,
  delay = 0,
  className,
  children,
}: {
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const { still } = useStage();
  return (
    <motion.div
      className={className}
      animate={still ? undefined : { y: [0, -amplitude, 0], rotate: [0, 0.6, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
