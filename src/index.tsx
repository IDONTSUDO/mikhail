import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { localStorageDetector } from "typesafe-i18n/detectors";
import TypesafeI18n from "./i18n/i18n-react";
import { detectLocale } from "./i18n/i18n-util";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import Header from "./header";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      hoverText: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

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
