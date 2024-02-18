import * as React from "react";
import { CoreText, CoreTextSize } from "./components/core_text";
import { CoreButton, CoreButtonType } from "./components/core_button";
import ContainerOutlined from "@ant-design/icons/lib/icons/ContainerOutlined";
import WalletOutlined from "@ant-design/icons/lib/icons/WalletOutlined";
import { ArrowUpOutlined } from "@ant-design/icons";
// import { CoreColor } from "./color";

interface TextAdaptiveProps {
  size: CoreTextSize;
}
const ConnectWalletButton = () => {
  return (
    <CoreButton
      text="Connect wallet"
      type={CoreButtonType.floodedSecondary}
      children={<WalletOutlined style={{ color: "black", marginRight: "5px" }} />}
    />
  );
};
const GetWhitePaperButton = () => {
  return (
    <CoreButton
      text="Get white paper"
      type={CoreButtonType.floodedPrimary}
      children={<ContainerOutlined style={{ color: "#D6EB4A", marginRight: "5px" }} />}
    />
  );
};
const TraxAnalyzeText = (props: TextAdaptiveProps) => {
  const isMobile = Number(500).shLessEq();

  return (
    <CoreText
      text="Trax - Analyze. Trade. Manage."
      size={props.size}
      color="white"
      style={
        isMobile
          ? {}
          : {
              alignSelf: "center",
              font: "inherit",
              verticalAlign: "baseline",
              lineHeight: "9px",
              fontWeight: "700",
            }
      }
    />
  );
};

const IntroText = (props: TextAdaptiveProps) => {
  const isMobile = Number(500).shLessEq();

  return (
    <CoreText
      text="Intro: @TraxCommunuty"
      size={props.size}
      color="#D6EB4A"
      style={
        isMobile
          ? {}
          : {
              alignSelf: "center",
              font: "inherit",
              verticalAlign: "baseline",
              lineHeight: "9px",
              fontWeight: "700",
              fontSize: "90.9090909091%",
            }
      }
    />
  );
};
const Open1Text = () => {
  return <CoreText text="1$OPEN = 1.1446 TON" color="white" />;
};
const up = require("./assets/up.jpg");

const traxLogo = require("./assets/logo.png");

const Header: React.FunctionComponent = () => {
  const textSize = Number(1025).shLessEq() ? CoreTextSize.size16 : CoreTextSize.size24;
  const isMobile = Number(500).shLessEq();

  return !isMobile ? (
    <>
      <div
        style={{
          position: "absolute",
          height: Number(200).fh(),
          display: "flex",
          alignItems: "center",
          width: Number((window.outerWidth / 100) * 90).fw(),
          justifyContent: "space-around",
          padding: "10px",
          zIndex: "1",
        }}
      >
        <img alt="logo" src={traxLogo} style={{ height: Number(200).fh() }} />
        <div style={{ height: Number(200).fh() }}>
          <div style={{ height: Number(20).fh() }} />
          {Number(1149).shLessEq() ? (
            <></>
          ) : (
            <>
              <CoreText
                text="Trax - Analyze. Trade. Manage."
                size={CoreTextSize.size28}
                color="white"
                style={{
                  alignSelf: "center",
                  font: "inherit",
                  verticalAlign: "baseline",
                  lineHeight: "9px",
                  fontWeight: "700",
                  fontSize: "90.9090909091%",
                }}
              />
            </>
          )}

          <div style={{ height: Number(20).fh() }} />
          {Number(1149).shLessEq() ? (
            <></>
          ) : (
            <CoreText
              text="Intro: @TraxCommunuty"
              size={CoreTextSize.size18}
              color="white"
              style={{
                alignSelf: "center",
                font: "inherit",
                verticalAlign: "baseline",
                lineHeight: "9px",
                fontWeight: "700",
                fontSize: "90.9090909091%",
              }}
            />
          )}
        </div>
        <div></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CoreButton
            text="Get white paper"
            type={CoreButtonType.floodedPrimary}
            children={<ContainerOutlined style={{ color: "#D6EB4A", marginRight: "5px" }} />}
          />
          <div style={{ width: "20px" }} />
          <CoreText text="1$OPEN = 1.1446 TON" color="white" />
          <ArrowUpOutlined style={{ color: "#DEF249", marginLeft: "5px" }} />
          <div style={{ width: "20px" }} />
          <CoreButton
            text="Connect wallet"
            type={CoreButtonType.floodedSecondary}
            children={<WalletOutlined style={{ color: "black", marginRight: "5px" }} />}
          />
        </div>
      </div>
    </>
  ) : (
    <div
      style={{
        position: "absolute",
        height: Number(200).fh(),
        display: "flex",
        alignItems: "center",
        width: isMobile ? " " : Number((window.outerWidth / 100) * 90).fw(),
        justifyContent: isMobile ? "" : "space-around",
        padding: isMobile ? "0px" : "10px",
        zIndex: "1",
        flexDirection: isMobile ? "column" : undefined,
      }}
    >
      <div style={{ display: isMobile ? "flex" : undefined }}>
        <img alt="logo" src={traxLogo} style={{ height: Number(isMobile ? 120 : 200).fh() }} />
        {isMobile ? (
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TraxAnalyzeText size={CoreTextSize.size16} />
            <IntroText size={CoreTextSize.size18} />
          </div>
        ) : (
          <>
            <div style={{ height: Number(200).fh() }}>
              <div style={{ height: Number(20).fh() }} />

              <>
                <TraxAnalyzeText size={CoreTextSize.size28} />
              </>

              <div style={{ height: Number(20).fh() }} />
              <IntroText size={CoreTextSize.size18} />
            </div>
            <div></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CoreButton
                text="Get white paper"
                type={CoreButtonType.floodedPrimary}
                children={<ContainerOutlined style={{ color: "#D6EB4A", marginRight: "5px" }} />}
              />
              <div style={{ width: "20px" }} />
              <Open1Text />
              <ArrowUpOutlined style={{ color: "#DEF249", marginLeft: "5px" }} />
              <div style={{ width: "20px" }} />
              <ConnectWalletButton />
            </div>
          </>
        )}
      </div>
      {isMobile ? (
        <div>
          <div style={{ textAlign: "end", paddingRight: "39px", height: "40px" }}>
            <Open1Text />
          </div>
          <div style={{ display: "flex", width: "100vw", placeContent: "center" }}>
            <div>
              <GetWhitePaperButton />
            </div>
            <div style={{ width: "10px" }} /> <ConnectWalletButton />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
