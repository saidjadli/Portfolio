"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    asMotion?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asMotion = false, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-primary text-background hover:bg-primary/90",
            secondary: "bg-secondary text-text hover:bg-secondary/80",
            ghost: "hover:bg-secondary/50 text-text",
            outline: "border border-primary/20 bg-transparent hover:bg-primary/10 text-primary",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

        if (asMotion) {
            // @ts-ignore - Framer motion types are tricky with forwardRef sometimes
            return (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={combinedClassName}
                    {...(props as any)}
                />
            );
        }

        return (
            <button
                className={combinedClassName}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
