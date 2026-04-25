import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
} & Omit<HTMLMotionProps<"div">, "children" | "ref">;

export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
  ...rest
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as];

  if (prefersReducedMotion) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
