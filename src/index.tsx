import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { localStorageDetector } from "typesafe-i18n/detectors";

import Header from "./header";
import TypesafeI18n from "./i18n/i18n-react";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { detectLocale } from "./i18n/i18n-util";

const detectedLocale = detectLocale(localStorageDetector);

function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <TypesafeI18n locale={detectedLocale}>
      <div>
        <Header />
      </div>
    </TypesafeI18n>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <App />
  </>
);
