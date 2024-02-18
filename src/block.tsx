import * as React from "react";
import { DownOutlined } from "@ant-design/icons";

export interface IAppProps {
  child: React.ReactNode;
  item: number;
  needBottomButton?: boolean;
}

export function Block(props: IAppProps) {
  return (
    <div className="background" style={{ height: "100vh" }}>
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
      {/* {props.needBottomButton ?? (
        <bottomArrowButton style={{ position: "absolute", top: window.innerHeight * props.item - 100, width: "100%" }}>
          <DownOutlined
            onClick={() => {
              window.scroll({
                top: window.innerHeight * props.item,
                behavior: "smooth",
              });
            }}
            style={{ fontSize: "25px", color: "rgba(222, 242, 73, 1)" }}
          />
        </bottomArrowButton>
      )} */}
    </div>
  );
}
