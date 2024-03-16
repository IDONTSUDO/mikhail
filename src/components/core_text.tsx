import * as React from "react";

export enum CoreTextSize {
  size14 = "14px",
  size16 = "16px",
  size18 = "18px",
  size22 = "22px",
  size24 = "24px",
  size28 = "28px",
  size55 = "55px",
  size60 = "60px",
}

interface ICoreTextProps {
  size?: string;
  color?: string;
  text: string;
  style?: React.CSSProperties;
}

export const CoreText: React.FunctionComponent<ICoreTextProps> = (props) => {
  return (
    <div
      style={Object.assign(props.style ?? {}, {
        fontFamily: "Candal,sans-serif",
        fontSize: props.size,
        color: props.color,
      })}
    >
      {props.text}
    </div>
  );
};
