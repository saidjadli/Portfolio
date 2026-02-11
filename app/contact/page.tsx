"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Send } from "lucide-react";
import { useTranslation } from "@/components/i18n/LanguageProvider";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const { t } = useTranslation();

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
            <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6">{t("contact.heading")}</h3>
                    <p className="text-gray-400 mb-8 text-lg">
                        {t("contact.description")}
                    </p>

                    <div className="flex items-center gap-4 text-gray-300 mb-10 group cursor-pointer">
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                            <Mail className="group-hover:text-primary transition-colors" />
                        </div>
                        <a href="mailto:jadli.said00@gmail.com" className="text-lg hover:text-primary transition-colors">jadli.said00@gmail.com</a>
                    </div>

                    <Card className="bg-primary/5 border-primary/20 p-6">
                        <h4 className="font-bold text-primary mb-2">{t("contact.noteTitle")}</h4>
                        <p className="text-sm text-gray-400">
                            {t("contact.noteBody")}
                        </p>
                    </Card>
                </div>

                <Card className="p-8 bg-white/5 border-white/10">
                    {formState === "success" ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t("contact.successTitle")}</h3>
                            <p className="text-gray-400">{t("contact.successBody")}</p>
                            <button
                                onClick={() => setFormState("idle")}
                                className="mt-6 text-primary hover:underline text-sm"
                            >
                                {t("contact.successAnother")}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    {t("contact.formName")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder={t("contact.formPlaceholderName")}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    {t("contact.formEmail")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder={t("contact.formPlaceholderEmail")}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    {t("contact.formMessage")}
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder={t("contact.formPlaceholderMessage")}
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={formState === "submitting"}>
                                {formState === "submitting" ? t("contact.formSending") : t("contact.formSend")}
                            </Button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                {t("contact.formDemo")}
                            </p>
                        </form>
                    )}
                </Card>
            </div>
        </div>
    );
}
