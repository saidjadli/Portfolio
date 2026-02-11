"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { languages } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingLanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const currentLanguage = languages.find((l) => l.code === language);

    return (
        <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full right-0 mb-2 min-w-[160px] bg-[#0B0F0E]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between gap-3",
                                    language === lang.code
                                        ? "bg-primary/20 text-primary font-semibold"
                                        : "text-gray-300 hover:bg-white/5 hover:text-primary"
                                )}
                            >
                                <span>{lang.nativeName}</span>
                                <span className="text-xs opacity-60">{lang.code.toUpperCase()}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "group relative w-14 h-14 rounded-full bg-[#0B0F0E]/80 backdrop-blur-md border border-white/10",
                    "hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
                    "flex items-center justify-center shadow-lg",
                    isOpen && "border-primary/50 bg-primary/10"
                )}
                aria-label="Language switcher"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                <div className="flex flex-col items-center gap-0.5">
                    <Globe className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-semibold text-gray-400 group-hover:text-primary transition-colors uppercase">
                        {currentLanguage?.code}
                    </span>
                </div>
            </button>
        </div>
    );
}
