"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Send } from "lucide-react";
import { useTranslation } from "@/components/i18n/LanguageProvider";

export default function ContactPage() {
    type Status = "idle" | "loading" | "success" | "error";
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const { t } = useTranslation();

    console.log("DEBUG: ContactPage Rendering. Status:", status);

    const validateForm = (data: { name: string; email: string; message: string }) => {
        const errors: { [key: string]: string } = {};
        if (!data.name.trim()) errors.name = t("contact.validationNameRequired") || "Name is required";
        if (!data.email.trim()) {
            errors.email = t("contact.validationEmailRequired") || "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = t("contact.validationEmailInvalid") || "Invalid email format";
        }
        if (!data.message.trim()) errors.message = t("contact.validationMessageRequired") || "Message is required";
        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");
        setFieldErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            name: (formData.get("name") as string) || "",
            email: (formData.get("email") as string) || "",
            message: (formData.get("message") as string) || "",
            website: formData.get("website") as string, // honeypot field
        };

        // Client-side validation
        const errors = validateForm(data);
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        // Client-side rate limiting (minimum 3 seconds between submissions)
        const now = Date.now();
        if (now - lastSubmitTime < 3000) {
            setErrorMessage("Please wait a moment before submitting again.");
            setStatus("error");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Robust JSON parsing
            let result: any = null;
            try {
                result = await response.json();
            } catch (parseError) {
                // If JSON fails, result remains null
            }

            // Treat as success if status is 2xx
            if (response.ok) {
                setStatus("success");
                setLastSubmitTime(now);
                setErrorMessage("");
                // Form reset is handled by unmounting/remounting or explicit reset if needed,
                // but since we switch views, just clearing state is fine. 
                // However, let's clear the native form just in case we go back without unmounting (unlikely with this UI flow)
                e.currentTarget.reset();
                return;
            }

            // Handle error
            const message = result?.error || "An unexpected error occurred. Please try again later.";
            setErrorMessage(message);
            setStatus("error");

        } catch (error) {
            // Network error
            console.error("Contact form submission error:", error);
            setStatus("error");
            setErrorMessage("An unexpected error occurred. Please try again later.");
        }
    };

    const handleRetry = () => {
        setStatus("idle");
        setErrorMessage("");
    };

    const handleReset = () => {
        setStatus("idle");
        setErrorMessage("");
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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                {t("contact.formName")}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className={`w-full bg-black/20 border ${fieldErrors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                                placeholder={t("contact.formPlaceholderName")}
                            />
                            {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                {t("contact.formEmail")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className={`w-full bg-black/20 border ${fieldErrors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                                placeholder={t("contact.formPlaceholderEmail")}
                            />
                            {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                {t("contact.formMessage")}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className={`w-full bg-black/20 border ${fieldErrors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none`}
                                placeholder={t("contact.formPlaceholderMessage")}
                            />
                            {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
                        </div>

                        {/* Honeypot field - hidden from users, catches bots */}
                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            style={{
                                position: "absolute",
                                left: "-9999px",
                                width: "1px",
                                height: "1px",
                                opacity: 0,
                            }}
                        />

                        <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={status === "loading"}>
                            {status === "loading" ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    {t("contact.formSending") || "Sending..."}
                                </>
                            ) : (
                                t("contact.formSend") || "Send Message"
                            )}
                        </Button>

                        {/* <p className="text-xs text-gray-500 text-center mt-4">
                                {t("contact.formDemo")}
                            </p> */}
                    </form>
                </Card>
            </div>
        </div>
    );
}
