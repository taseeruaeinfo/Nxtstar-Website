import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import hi from './locales/hi.json';
import fr from './locales/fr.json';
import pl from './locales/pl.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      hi: { translation: hi },
      fr: { translation: fr },
      pl: { translation: pl },
      ru: { translation: ru },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    detection: {
      order: ['path', 'localStorage', 'navigator'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
