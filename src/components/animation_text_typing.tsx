import * as React from "react";
import { CoreText, CoreTextSize } from "./core_text";

export interface IAnimationTextTyping {
  texts: string[];
}

export function AnimationTextTyping(props: IAnimationTextTyping) {
  const [symbolTextPointer, setSymbolTextPointer] = React.useState(0);
  const [activeTextPointer, setActiveTextPointer] = React.useState(0);
  const textSize = Number(500).shLessEq() ? CoreTextSize.size28 : CoreTextSize.size60;

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (symbolTextPointer >= props.texts[activeTextPointer].length) {
        if (activeTextPointer === props.texts.length - 1) {
          setActiveTextPointer(0);
        } else {
          setActiveTextPointer(activeTextPointer + 1);
        }
        setSymbolTextPointer(0);
      } else {
        setSymbolTextPointer(symbolTextPointer + 1);
      }
    }, 200);

    return () => clearInterval(timer);
  });

  return <CoreText size={textSize} text={props.texts[activeTextPointer].slice(0, symbolTextPointer)} color="white" />;
}
