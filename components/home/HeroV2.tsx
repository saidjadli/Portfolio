"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Play, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/i18n/LanguageProvider";

export function HeroV2() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 lg:py-0">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-primary font-medium tracking-wider mb-4 uppercase"
                        >
                            {t("hero.greeting")}
                        </motion.span>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                            {t("hero.title1")} <span className="text-white">{t("hero.title2")} </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                                {t("hero.title3")}
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed"
                        >
                            {t("hero.subtitle")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
                        >
                            <a href="/resume/said_jadli_CV.pdf" target="_blank" download className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        {t("hero.btnDownload")}
                                        <Download className="ml-2 h-4 w-4" />
                                    </span>
                                </Button>
                            </a>

                            <Link href="/projects" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base group">
                                    {t("hero.btnProjects")}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            <Link href="/contact" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-4 group">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                    <Send className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-sm">{t("hero.btnContact")}</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Hexagon Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[300px] h-[340px] md:w-[400px] md:h-[450px]">
                            {/* Neon Glow Behind */}
                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-90 animate-pulse" />

                            {/* Hexagon Border Container */}
                            <div className="absolute inset-0 z-10"
                                style={{
                                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                    padding: "3px",
                                    background: "linear-gradient(45deg, #22c55e, #10b981, #0ea5e9)",
                                }}>
                                {/* Inner Hexagon (Image Container) */}
                                <div className="w-full h-full bg-black relative overflow-hidden"
                                    style={{
                                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                                    }}>
                                    <Image
                                        src="/images/photo_profil.jpg"
                                        alt="Said Jadli - Data Scientist"
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Overlay Gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Decorative Elements around Hexagon */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-12 h-12 border-2 border-primary/30 rounded-full"
                            />
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
