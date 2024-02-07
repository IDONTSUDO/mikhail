import * as React from "react";
import { CoreText, CoreTextSize } from "./components/core_text";
import { CoreButton, CoreButtonType } from "./components/core_button";

const up = require("./assets/up.jpg");

const traxLogo = require("./assets/logo.png");

const Header: React.FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "fixed",
        height: "100px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img alt="logo" src={traxLogo} style={{ width: "40px" }} />
        <div style={{ width: "10px" }} />
        <CoreText
          text="Trax"
          size={CoreTextSize.size18}
          style={{
            alignSelf: "center",
            font: "inherit",
            verticalAlign: "baseline",
            lineHeight: "9px",
            fontWeight: "700",
            fontSize: "90.9090909091%",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CoreButton type={CoreButtonType.flooded} text="Get white paper" />
        <div style={{ width: "20px" }} />
        <img alt="up" src={up} style={{ width: "14px" }} />

        <CoreText style={{ fontWeight: 300 }} size={CoreTextSize.size14} text="1$OPEN = 0.1446 TON" />
        <div style={{ width: "20px" }} />
        <CoreButton type={CoreButtonType.underlining} text="@OpenTraxCommunity" />
      </div>
    </div>
  );
};

export default Header;
