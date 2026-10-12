import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-signal text-cream hover:bg-signal-deep rounded-sm",
        navy: "bg-navy text-cream hover:bg-navy-deep rounded-sm",
        light: "bg-cream text-navy hover:bg-paper rounded-sm",
        outline:
          "border border-cream/70 text-cream hover:bg-cream hover:text-navy rounded-sm",
        ghost: "text-navy hover:bg-paper-2 rounded-sm",
      },
      size: {
        default: "h-12 px-6 text-base",
        sm: "h-11 px-4 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
