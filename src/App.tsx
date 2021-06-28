import React from "react";
import "./App.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Header from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/rsvp";
import { Footer } from "./components/footer";

import data from "./data.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React and react-i18next",
        },
      },
      ro: {
        translation: {
          welcome: "Bun venit!",
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
  const [resume, setResume] = React.useState(data);
  React.useEffect(() => {
    setResume(data);
  }, []);
  return (
    <div className="App">
      <Header />
      <About data={resume.main} />
      <Contact data={resume.main} />
      <Footer data={resume.main} />
    </div>
  );
}

export default App;
