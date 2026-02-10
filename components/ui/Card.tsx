"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ className, children, hoverEffect = false }: CardProps) {
    const content = (
        <div
            className={cn(
                "rounded-2xl border border-white/5 bg-secondary/30 backdrop-blur-sm p-6 overflow-hidden",
                "transition-all duration-300",
                hoverEffect && "hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]",
                className
            )}
        >
            {children}
        </div>
    );

    if (hoverEffect) {
        return (
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
            >
                {content}
            </motion.div>
        );
    }

    return <div className="h-full">{content}</div>;
}
