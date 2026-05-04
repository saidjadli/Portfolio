"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Great_Vibes } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { SectionContainer } from "@/components/layout/SectionContainer";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"]
});

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-white/5 bg-black/20 py-12 mt-20">
            <SectionContainer className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className={cn(greatVibes.className, "text-2xl md:text-3xl text-white drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]")}>
                            Said Jadli
                        </span>
                    </Link>
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {t("footer.rights")}
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/saidjadli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/said-jadli-843135254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:jadli.said00@gmail.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </SectionContainer>
        </footer>
    );
}
