import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "key": "Hello World"
    }
  },
  hi: {
    translation: {
      "key": "नमस्ते दुनिया"
    }
  },
  es: {
    translation: {
      "key": "Hola Mundo"
    }
  },
  fr: {
    translation: {
      "key": "Bonjour le monde"
    }
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

