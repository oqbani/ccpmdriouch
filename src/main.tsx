import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
// TRANSLATION
import global_fr from "../src/Translate/FR/global.json";
import global_ar from "../src/Translate/AR/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false }, 
  lng: "fr",
  resources: {
    fr: {
      global: global_fr,
    },
    ar: {
      global: global_ar,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
