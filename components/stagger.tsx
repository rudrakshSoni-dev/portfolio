"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

type StaggerListProps = {
  as?: "ul" | "ol";
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

export function StaggerList({
  as = "ul",
  className,
  delay = 0.04,
  children,
}: StaggerListProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "ol" ? m.ol : m.ul;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ staggerChildren: reduceMotion ? 0 : delay }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <m.li
      className={className}
      variants={itemVariants}
      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
    >
      {children}
    </m.li>
  );
}
