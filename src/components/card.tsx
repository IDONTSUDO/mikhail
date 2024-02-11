import * as React from "react";
import { CoreText, CoreTextSize } from "./core_text";
import { SmallScreen } from "../screen";

export interface ICardProps {
  header: string;
  body: string;
}

export const Card: React.FunctionComponent<ICardProps> = (props) => {
  const cardWidth = Number(SmallScreen).shLessEq() ? Number(200).fw(200) : "200px";
  return (
    <>
      <div
        className="scale"
        style={{
          backgroundColor: "#05305A",
          borderRadius: "20px",
          cursor: "pointer",
          width: cardWidth,
          margin: "5px",
          padding: "10px",
        }}
      >
        <CoreText size={CoreTextSize.size28} style={{ fontSize: "70%" }} text={props.header} color="#DEF249" />
        <div style={{ height: "5px" }} />
        <CoreText text={props.body} color="white" />
        <div style={{ flexGrow: "1", display: "flex" }}></div>
      </div>
    </>
  );
};
