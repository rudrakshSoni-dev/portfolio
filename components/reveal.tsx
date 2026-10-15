"use client";

import { m, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }
      }
    >
      {children}
    </m.div>
  );
}
