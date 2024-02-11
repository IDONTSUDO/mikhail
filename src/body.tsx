import { ChangeEventHandler } from "react";
import { observer } from "mobx-react-lite";

import { useI18nContext } from "./i18n/i18n-react";
import type { Locales } from "./i18n/i18n-types";
import { locales } from "./i18n/i18n-util";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { AnimationTextTyping } from "./components/animation_text_typing";
import Header from "./header";
import { CoreText, CoreTextSize } from "./components/core_text";
import { Block } from "./block";
import { Card } from "./components/card";
import { CardPrimary } from "./components/card_primary";
import { DownOutlined } from "@ant-design/icons";
import { SmallScreen } from "./screen";
const traxLogo = require("./assets/logo.png");
const downIcon = require("./assets/down.png");
const minter = require("./assets/minter.png");
const deDust = require("./assets/de_dust_swap.png");
const tonView = require("./assets/ton_view.png");
const telegram = require("./assets/telegram.png");
const dior = require("./assets/dyor.jpeg");

export const Body = observer(() => {
  const { locale, LL, setLocale } = useI18nContext();

  const onLocaleSelected: ChangeEventHandler<HTMLSelectElement> = async ({ target }) => {
    const locale = target.value as Locales;
    localStorage.setItem("lang", locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  };
  const textSize = Number(1025).shLessEq() ? CoreTextSize.size16 : CoreTextSize.size24;

  const cardWrapperStyle: React.CSSProperties = Number(844).shLessEq()
    ? { display: "flex", flexDirection: "column" }
    : { display: "flex" };
  return (
    <>
      <Header />

      <bottomArrowButton style={{ position: "absolute", top: (window.innerHeight / 100) * 90, width: "100%" }}>
        <DownOutlined
          onClick={() => {
            window.scroll({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          style={{ fontSize: "25px", color: "rgba(222, 242, 73, 1)" }}
        />
      </bottomArrowButton>

      <Block
        child={
          <>
            <CoreText size={CoreTextSize.size60} style={{ fontWeight: "600" }} color="white" text="Utils" />
            <div style={{ display: "flex" }}>
              <CardPrimary img={minter} bodyText={"Minter"} />
              <CardPrimary img={tonView} bodyText={"Tonviewer"} />
              <CardPrimary img={telegram} bodyText={"Telegram"} />
            </div>
            <div style={{ display: "flex" }}>
              <CardPrimary img={deDust} bodyText={"DeDust swap"} />
              <CardPrimary img={dior} bodyText={"dyor.io"} />
            </div>
          </>
        }
        item={2}
      />

      <Block
        child={
          <>
            <CoreText size={CoreTextSize.size60} style={{ fontWeight: "600" }} text="Road map" color="white" />
            <div style={cardWrapperStyle}>
              <Card
                header={"TraX Tools"}
                body="совокупность аналитических и прикладных инструментов для комфортной и безопасной торговли в TON."
              />
              <Card
                header={"TraX DAO"}
                body=" - полноценное ДАО по управлению жизни токена (на основе смарт-контрактов)"
              />
              <Card
                body="платформа поддержки проектов по созданию утилитарных/прикладных продуктов на основе ИИ в TON"
                header={"AI TraX"}
              />
            </div>
          </>
        }
        item={3}
        needBottomButton={false}
      />
      <Block
        child={
          <>
            <div style={{ height: "100px" }}>
              <AnimationTextTyping texts={["Analyze. Trade. Manage."]} />
            </div>
            <img alt="logo" src={traxLogo} style={{ width: Number(200).fh() }} />

            <div
              style={{
                height: "377px",
                background: "#032340",
                width: "100%",
                position: "relative",
                zIndex: "1",
              }}
            >
              <div style={{ display: "flex", padding: Number(50).fw() }}>
                <div>
                  <CoreText
                    style={{ padding: "10px", fontWeight: "400" }}
                    size={textSize}
                    text="Trax - Analyze. Trade. Manage."
                    color="white"
                  ></CoreText>
                  <img style={{ width: Number(200).fw(), height: Number(200).fh() }} src={traxLogo} />
                </div>
                <div style={{ width: Number(50).fw() }} />
                <div style={{ display: "flex" }}>
                  <div>
                    <CoreText style={{ fontWeight: "700" }} size={CoreTextSize.size24} color="#DEF249" text="Legal" />
                    <div style={{ height: Number(10).fh() }} />
                    <CoreText
                      text="Terms of use"
                      size={CoreTextSize.size16}
                      color="#DEF249"
                      style={{ fontWeight: "400" }}
                    />
                    <div style={{ height: Number(5).fh() }} />
                    <CoreText text="Privicy" size={CoreTextSize.size16} color="#DEF249" style={{ fontWeight: "400" }} />
                  </div>
                  <div style={{ width: Number(20).fw() }}></div>
                  <div>
                    <CoreText style={{ fontWeight: "700" }} size={CoreTextSize.size24} color="#DEF249" text="Links" />
                    <div style={{ height: "10px" }} />
                    <CoreText text="Twitter" size={CoreTextSize.size16} color="#DEF249" style={{ fontWeight: "400" }} />
                    <div style={{ height: "5px" }} />
                    <CoreText text="TG" size={CoreTextSize.size16} color="#DEF249" style={{ fontWeight: "400" }} />
                    <div style={{ height: "5px" }} />

                    <CoreText
                      text="Partners"
                      size={CoreTextSize.size16}
                      color="#DEF249"
                      style={{ fontWeight: "400" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <CoreText
                  text="2023 All rights reserved"
                  color="white"
                  size={CoreTextSize.size16}
                  style={{ fontWeight: "400" }}
                />
              </div>
            </div>
          </>
        }
        item={4}
        needBottomButton={false}
      />
    </>
  );
});
