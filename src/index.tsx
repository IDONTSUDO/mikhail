import React from "react";
import ReactDOM from "react-dom/client";
import { CoreTextSize, CoreText, CoreTextColor } from "./components/core_text";
import { CoreButton } from "./components/core_button";
import i18next from "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CoreText size={CoreTextSize.size60} color={CoreTextColor.black} />
    <CoreText size={CoreTextSize.size55} color={CoreTextColor.black} />
    <CoreButton />
    <div>{i18next.t("inter")}</div>
  </React.StrictMode>
);
