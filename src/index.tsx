import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { localStorageDetector } from "typesafe-i18n/detectors";

import Header from "./header";
import TypesafeI18n from "./i18n/i18n-react";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { detectLocale } from "./i18n/i18n-util";
import { Block } from "./block";
import { extensions } from "./extensions/extensions";
import { CoreText } from "./components/core_text";
const traxLogo = require("./assets/logo.png");
extensions();

const detectedLocale = detectLocale(localStorageDetector);
const downIcon = require("./assets/down.png");
function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <TypesafeI18n locale={detectedLocale}>
      <bottomArrowButton style={{ position: "absolute", top: window.innerHeight - 100, width: "100%" }}>
        <img
          width={Number(50).fw()}
          alt="down"
          src={downIcon}
          onClick={() => {
            window.scroll({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        />
      </bottomArrowButton>
      <Header />
      <Block
        child={
          <>
            <CoreText text="tools, dao, aitrax" />
            <img alt="logo" src={traxLogo} style={{ width: Number(200).fh() }} />
          </>
        }
      />
      <Block
        child={
          <>
            <CoreText text="tools, dao, aitrax" />
            <img alt="logo" src={traxLogo} style={{ width: Number(200).fh() }} />
          </>
        }
      />
    </TypesafeI18n>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <App />
  </>
);
