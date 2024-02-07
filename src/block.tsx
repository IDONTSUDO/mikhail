import * as React from "react";

export interface IAppProps {
  child: React.ReactNode;
}

export function Block(props: IAppProps) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "relative",
          top: "200px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {props.child}
      </div>
    </div>
  );
}
