"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Send } from "lucide-react";
import { useTranslation } from "@/components/i18n/LanguageProvider";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const { t } = useTranslation();

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
            setFormState("error");
            return;
        }

        setFormState("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Defensive JSON parsing
            let result: any = null;
            try {
                result = await response.json();
            } catch (parseError) {
                console.error("Failed to parse response JSON:", parseError);
            }

            // Debug logging in development
            if (process.env.NODE_ENV === "development") {
                console.log("Contact API status:", response.status);
                console.log("Contact API response:", result);
            }

            // Treat as success if status is 2xx, even if JSON is missing or success field is true
            if (response.ok && (result?.success === true || result === null)) {
                setFormState("success");
                setLastSubmitTime(now);
                e.currentTarget.reset();
                return;
            }

            // Handle error
            const message = result?.error || "An unexpected error occurred. Please try again later.";
            setErrorMessage(message);
            setFormState("error");
        } catch (error) {
            // Network error or fetch failure
            console.error("Contact form submission error:", error);
            setFormState("error");
            setErrorMessage("An unexpected error occurred. Please try again later.");
        }
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
                    ) : formState === "error" ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                            <p className="text-gray-400 mb-4">{errorMessage}</p>
                            <button
                                onClick={() => {
                                    setFormState("idle");
                                    setErrorMessage("");
                                }}
                                className="text-primary hover:underline text-sm"
                            >
                                Try again
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

                            <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={formState === "submitting"}>
                                {formState === "submitting" ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        {t("contact.formSending") || "Sending..."}
                                    </>
                                ) : (
                                    t("contact.formSend") || "Send Message"
                                )}
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
