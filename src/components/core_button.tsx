import * as React from "react";
import { CoreText, CoreTextSize } from "./core_text";

export enum CoreButtonType {
  flooded,
  underlining,
}
export interface ICoreButtonProps {
  text: string;
  type: CoreButtonType;
}

export function CoreButton(props: ICoreButtonProps) {
  return (
    <>
      {props.type === CoreButtonType.underlining ? (
        <>
          <hoverText>{props.text}</hoverText>
        </>
      ) : (
        <>
          <div style={{ borderRadius: "19px", color: "white", backgroundColor: "black", padding: "10px" }}>
            <CoreText
              style={{ fontWeight: 300, fontSize: "90.3333333333%", textDecoration: "none", cursor: "pointer" }}
              text={props.text}
              size={CoreTextSize.size18}
            />
          </div>
        </>
      )}
    </>
  );
}
