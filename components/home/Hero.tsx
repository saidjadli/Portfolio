"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <SectionContainer className="flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Available for hire
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Building <span className="text-primary">Intelligence</span> <br />
                    from Data.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 text-balance"
                >
                    Hi, I'm <span className="text-white font-semibold">Jadli Said</span>.
                    A Data Scientist & ML Engineer turning complex problems into scalable solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                    <Link href="/projects">
                        <Button size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <a href="/resume/said_jadli_CV.pdf" target="_blank" download>
                        <Button variant="outline" size="lg">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6"
                >
                    <a href="https://github.com/saidjadli" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/said-jadli-843135254/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="mailto:jadli.said00@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="h-6 w-6" />
                    </a>
                </motion.div>
            </SectionContainer>
        </section>
    );
}
