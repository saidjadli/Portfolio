import en from "@/content/i18n/en.json";
import fr from "@/content/i18n/fr.json";

export type Language = "en" | "fr";

export const translations = {
    en,
    fr,
};

export const languages = [
    { code: "en" as Language, name: "English", nativeName: "English" },
    { code: "fr" as Language, name: "French", nativeName: "Français" },
];

export function getTranslation(lang: Language, key: string): string {
    const keys = key.split(".");
    let value: any = translations[lang];

    for (const k of keys) {
        if (value && typeof value === "object") {
            value = value[k];
        } else {
            return key; // Return key if not found
        }
    }

    return typeof value === "string" ? value : key;
}
