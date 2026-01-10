import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "Welcome": "Welcome"
        }
      },
      ar: {
        translation: {
          "Welcome": "مرحبا"
        }
      }

    },
    lng: "en", 
    fallbackLng: "en",

  });

  export default i18n