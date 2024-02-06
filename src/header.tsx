import * as React from "react";
import { CoreText, CoreTextSize } from "./components/core_text";
import { CoreButton, CoreButtonType } from "./components/core_button";

interface IHeaderProps {}
const logo = require("./assets/logo.jpg");

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
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
        <img alt="logo" style={{ width: 100 }} src={String(logo)} />
        <div style={{ width: "20px" }} />
        <CoreText text="Trex" size={CoreTextSize.size60} style={{ alignSelf: "center" }} />
      </div>
      <div>
        <CoreButton type={CoreButtonType.underlining} text="Get white paper" />
      </div>
    </div>
  );
};

export default Header;
