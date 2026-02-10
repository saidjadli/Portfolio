"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate network request
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <div className="container px-4 md:px-6 py-20 max-w-4xl mx-auto">
            <SectionHeading title="Contact" subtitle="Get in touch for opportunities or collaborations." />

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                    <p className="text-gray-400 mb-8 text-lg">
                        I'm currently looking for new opportunities as a Data Scientist or Machine Learning Engineer.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex items-center gap-4 text-gray-300 mb-10 group cursor-pointer">
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                            <Mail className="group-hover:text-primary transition-colors" />
                        </div>
                        <a href="mailto:jadli.said00@gmail.com" className="text-lg hover:text-primary transition-colors">jadli.said00@gmail.com</a>
                    </div>

                    <Card className="bg-primary/5 border-primary/20 p-6">
                        <h4 className="font-bold text-primary mb-2">Note to Recruters</h4>
                        <p className="text-sm text-gray-400">
                            I am available for internships and full-time positions starting Summer 2024.
                            Please include the job description in your message.
                        </p>
                    </Card>
                </div>

                <Card className="p-8 bg-white/5 border-white/10">
                    {formState === "success" ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => setFormState("idle")}
                                className="mt-6 text-primary hover:underline text-sm"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Hello, I'd like to discuss..."
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={formState === "submitting"}>
                                {formState === "submitting" ? "Sending..." : "Send Message"}
                            </Button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                This form is a demo. Use the email above to contact me.
                            </p>
                        </form>
                    )}
                </Card>
            </div>
        </div>
    );
}
