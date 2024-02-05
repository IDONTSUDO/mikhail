import * as React from "react";

export enum CoreTextSize {
  size18 = "18px",
  size22 = "22px",
  size55 = "55px",
  size60 = "60px",
}
export enum CoreTextColor {
  white = "white",
  black = "black",
}
interface ICoreTextProps {
  size: CoreTextSize;
  color: CoreTextColor;
}
export const CoreText: React.FunctionComponent<ICoreTextProps> = (props) => {
  return <div style={{ fontFamily: "Kanit", fontSize: props.size, color: props.color }}>1312</div>;
};
