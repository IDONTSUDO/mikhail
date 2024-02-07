import * as React from "react";

export enum CoreTextSize {
  size14 = "14px",
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
  size?: CoreTextSize;
  color?: CoreTextColor;
  text: string;
  style?: React.CSSProperties;
}

export const CoreText: React.FunctionComponent<ICoreTextProps> = (props) => {
  return (
    <div
      style={Object.assign(props.style ?? {}, {
        fontFamily: "Kanit,sans-serif",
        fontSize: props.size,
        color: props.color,
      })}
    >
      {props.text}
    </div>
  );
};
