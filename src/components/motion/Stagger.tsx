import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
  as?: "div" | "ul" | "ol" | "section";
};

export function Stagger({
  children,
  className,
  delay = 0,
  step = 0.06,
  as = "div",
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as];

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: step,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article" | "section";
};

export function StaggerItem({
  children,
  className,
  y = 16,
  as = "div",
}: ItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as];

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </Tag>
  );
}
