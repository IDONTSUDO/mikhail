import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { localStorageDetector } from "typesafe-i18n/detectors";

import TypesafeI18n from "./i18n/i18n-react";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { detectLocale } from "./i18n/i18n-util";

import { extensions } from "./extensions/extensions";
import { Body } from "./body";
import { CoreColor } from "./color";
import { ThemeStore } from "./theme_store";
extensions();

const detectedLocale = detectLocale(localStorageDetector);

export const themeStore = new ThemeStore();

function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <TypesafeI18n locale={detectedLocale}>
      <Body />
    </TypesafeI18n>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div>
    <App />
  </div>
);
