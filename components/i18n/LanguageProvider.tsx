"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/lib/i18n";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    // Initialize from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
        // Fallback: if saved language is "ar" or not valid, use "en"
        if (saved && ["en", "fr"].includes(saved)) {
            setLanguageState(saved);
            updateDocumentAttributes(saved);
        } else {
            // Migration: any invalid value (including "ar") falls back to "en"
            setLanguageState("en");
            updateDocumentAttributes("en");
            localStorage.setItem(STORAGE_KEY, "en");
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
        updateDocumentAttributes(lang);
    };

    const updateDocumentAttributes = (lang: Language) => {
        if (typeof document !== "undefined") {
            const html = document.documentElement;
            html.setAttribute("lang", lang);
            // Always use LTR since we removed Arabic
            html.setAttribute("dir", "ltr");
        }
    };

    // Don't render children until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}

export function useTranslation() {
    const { language } = useLanguage();

    const t = (key: string): string => {
        const { getTranslation } = require("@/lib/i18n");
        return getTranslation(language, key);
    };

    return { t, language };
}
