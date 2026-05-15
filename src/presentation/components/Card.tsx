"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/presentation/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight" | "bordered";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-background-secondary",
      highlight: "bg-background-secondary border-2 border-accent",
      bordered: "bg-background-secondary border border-border",
    };

    const hoverStyles = hover
      ? "hover:border-accent hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all duration-300"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-8",
          variants[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";