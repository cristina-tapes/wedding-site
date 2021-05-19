import React from "react";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
      ro: {
        translation: {
          "Welcome to React": "Bun venit la react",
        },
      },
    },
    lng: "ro",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <p>{t("Welcome to React")}</p>
        {"Cristina & Alex"}
      </header>
    </div>
  );
}

export default App;
