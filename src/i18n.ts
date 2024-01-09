import english from "@/assets/languages/en.json";
import vietnamese from "@/assets/languages/vi.json";
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"
import backend from "i18next-http-backend"
const resources = {
    en: {
        translation: english,
    },
    vi: {
        translation: vietnamese,
    }
}
i18n.use(LanguageDetector).use(backend).use(initReactI18next).init({
    resources,
    fallbackLng: "vi",
    interpolation: {
        escapeValue: false,
    },
    saveMissing: true
})
i18n.languages = ['en', 'vi'];
export default i18n;