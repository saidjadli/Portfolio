"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Download, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="py-20 relative overflow-hidden" id="about">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeading
                            title="About"
                            className="mb-6"
                        />

                        <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed mb-8">
                            <p>
                            I am Jadli Said, an engineering student specializing in Big Data, Data Science, and Artificial Intelligence.
                            Passionate about the world of data and AI, I am currently pursuing my engineering studies to develop strong expertise in massive data processing, Machine Learning, Deep Learning, and advanced analytics technologies.
                            I am deeply engaged in exploring the latest innovations in Big Data and Artificial Intelligence, with the ambition of delivering intelligent solutions to today’s complex challenges. My goal is to harness the power of data and algorithms to transform information into real added value, whether for businesses or society as a whole.
                            Convinced that the future belongs to those who master data, I am committed to building systems that are more efficient, more intelligent, and more responsible.
                            Curious, rigorous, and passionate, I am constantly seeking new opportunities to innovate, learn, and contribute to high-impact projects.
                            Open to collaborations, professional exchanges, and ambitious project opportunities, I am ready to take on new challenges.                            </p>
                        </div>

                    </motion.div>

                    {/* Right Column: Focus Areas List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-2xl blur-xl -z-10" />

                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full" />
                                Focus Areas
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Machine Learning & Deep Learning (experimentation, evaluation, model development)",
                                    "Big Data & Data Engineering (Spark, SQL, scalable pipelines)",
                                    "Practical AI Applications (dashboards, APIs, LLM tools like RAG/NL2SQL)"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
