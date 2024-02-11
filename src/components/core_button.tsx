import * as React from "react";
import { CoreText, CoreTextSize } from "./core_text";
import { themeStore } from "..";

export enum CoreButtonType {
  floodedPrimary,
  floodedSecondary,
  underlining,
}
export interface ICoreButtonProps {
  text: string;
  type: CoreButtonType;
  children?: React.ReactNode;
  color?: string;
}

export function CoreButton(props: ICoreButtonProps) {
  return (
    <>
      {props.type === CoreButtonType.underlining ? (
        <>
          <hoverText style={{ color: themeStore.colors.textPrimary }}>
            {props.text} {props.children}
          </hoverText>
        </>
      ) : null}
      {props.type === CoreButtonType.floodedSecondary ? (
        <>
          <div
            style={{
              borderRadius: "19px",
              border: "1px solid #16BFFD",
              padding: "10px",
              backgroundColor: "#16BFFD",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {props.children}
              <CoreText
                style={{
                  fontWeight: 300,
                  fontSize: "90.3333333333%",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                text={props.text}
                size={CoreTextSize.size18}
              />
            </div>
          </div>
        </>
      ) : null}
      {props.type === CoreButtonType.floodedPrimary ? (
        <>
          <div
            style={{
              borderRadius: "19px",
              border: "1px solid #D6EB4A",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {props.children}
              <CoreText
                style={{
                  fontWeight: 300,
                  fontSize: "90.3333333333%",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                color="#D6EB4A"
                text={props.text}
                size={CoreTextSize.size18}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
