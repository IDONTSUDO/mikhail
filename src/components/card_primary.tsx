import * as React from "react";
import { CoreText } from "./core_text";

export interface ICardPrimaryProps {
  bodyText: string;
  img: any;
}

export function CardPrimary(props: ICardPrimaryProps) {
  return (
    <div
      style={{
        borderRadius: "15px",
        cursor: "pointer",
        display: "flex",
        width: Number(120).fw(30),
        height: Number(120).fw(30),
        margin: "10px 5px",
        background: "#16BFFD",
        flexDirection: "column",
        alignContent: "flex-start",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: Number(44).fw(), height: Number(44).fw(), margin: "20px auto 0" }} src={props.img} />
      <div style={{ marginTop: Number(20).fh(), marginBottom: Number(20).fh() }}>
        <CoreText text={props.bodyText} color="#032340" style={{ fontSize: "90%" }} />
      </div>
    </div>
  );
}
