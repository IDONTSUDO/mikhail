import * as React from "react";

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
      <hoverText>{props.text}</hoverText>
    </>
  );
}
