import english from "@/assets/locales/en/app.json";
import vietnamese from "@/assets/locales/vi/app.json";
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"
const resources = {
    en: {
        translation: english,
    },
    vi: {
        translation: vietnamese,
    }
}
i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: "vi",
    interpolation: {
        escapeValue: false,
    },
    saveMissing: true
})
i18n.languages = ['en', 'vi'];
export default i18n;