declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare namespace JSX {
  interface IntrinsicElements {
    hoverText: any;
    bottomArrowButton: any;
  }
}
