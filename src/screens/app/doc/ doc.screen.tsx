import { Dropdown, Menu } from "antd";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";

export function DocScreen() {
  return (
    <div
      style={{
        width: "100%",
        padding: 24,
        background: "white",
        minHeight: "100vh",
      }}
    >
      <ICol>
        <HeaderComponent />
        <br />

        <Content />
        <Footer />
      </ICol>
    </div>
  );
}

function Content() {
  return (
    <IRow>
      <ICol span={16}>
        <h1>👋 Welcome to DinoSwap</h1>
        <br />
        <span className="gray">
          DinoSwap is an automated market-making (AMM) decentralized exchange
          (DEX) currently on the Ethereum blockchain. We are soon expanding our
          offerings with the XXX lending platform.
        </span>
        <br />
        <br />
        <span className="gray">
          We are a community-run project, governed by the community vote for all
          major changes to the protocol. Day-to-day operations, rebalancing of
          pools and ratios, business strategy, and overall development is
          ultimately decided on by our teamleader.
        </span>
        <br />
        <br />
        <span className="bold">
          There are a few core products of DinoSwap's ecosystem:
        </span>
        <br />
        <br />
        <div>
          <span className="bold gray small">
            <img
              src={Icons.DOT_SECONDARY}
              style={{ width: 8, marginRight: 12 }}
            />
            DinoSwap Exchange
          </span>
          <br />
          <span
            className="secondary pointer small"
            style={{ marginLeft: 20 }}
            onClick={() => {
              //window.open(" https://app.dino.com/swap");
            }}
          >
            https://app.dino.com/swap
          </span>
          <br />
          <span className="secondary pointer small" style={{ marginLeft: 20 }}>
            https://lite.dino.com/#/swap
          </span>
        </div>
        <br />
        <br />

        <div>
          <span className="bold gray small">
            <img
              src={Icons.DOT_SECONDARY}
              style={{ width: 8, marginRight: 12 }}
            />
            DinoSwap Liquidity Pools
          </span>
          <br />
          <span
            className="secondary pointer small"
            style={{ marginLeft: 20 }}
            onClick={() => {
              //window.open(" https://app.dino.com/swap");
            }}
          >
            https://app.dino.com/swap
          </span>
          <br />
          <span className="secondary pointer small" style={{ marginLeft: 20 }}>
            https://lite.dino.com/#/swap
          </span>
        </div>
        <br />
        <br />
        <div>
          <span className="bold gray small">
            <img
              src={Icons.DOT_SECONDARY}
              style={{ width: 8, marginRight: 12 }}
            />
            DinoSwap Staking
          </span>
          <br />
          <span
            className="secondary pointer small"
            style={{ marginLeft: 20 }}
            onClick={() => {
              //window.open(" https://app.dino.com/swap");
            }}
          >
            https://app.dino.com/swap
          </span>
          <br />
          <span className="secondary pointer small" style={{ marginLeft: 20 }}>
            https://lite.dino.com/#/swap
          </span>
        </div>

        <br />

        <span className="bold gray">
          Each of these serves a different purpose within the ecosystem.
        </span>
        <br />
        <br />
        <IRow gutter={[24, 24]}>
          <ICol flex="auto">
            <div className="box-white-outer pointer">
              <IRow justify="space-between" align="middle">
                <img src={Icons.BACK} style={{ width: 24 }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    className="secondary small"
                    style={{ textAlign: "end" }}
                  >
                    Previous
                  </span>
                  <span className="">💡 New 2: Lorem ipsum</span>
                </div>
              </IRow>
            </div>
          </ICol>
          <ICol flex="auto">
            <div className="box-white-outer pointer">
              <IRow justify="space-between" align="middle">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    className="secondary small"
                    style={{ textAlign: "end" }}
                  >
                    Next
                  </span>
                  <span className="">💡 New 3: Lorem ipsum</span>
                </div>
                <img src={Icons.NEXT_BROWN} style={{ width: 24 }} />
              </IRow>
            </div>
          </ICol>
        </IRow>
        <br />
        <IRow justify="space-between">
          <ICol>
            <ISpace size={12}>
              <span className="gray">By</span>
              <span>
                <img src={Images.AVATAR} style={{ width: 16 }} />
                <img src={Images.AVATAR} style={{ width: 16 }} />
              </span>
              <span className="gray">Last updated 1 month ago</span>
            </ISpace>
          </ICol>
          <ICol>
            <span className="bold secondary">WAS THIS PAGE HELPFUL?</span>
            <IRow justify="center">
              <img
                className="pointer"
                src={Icons.RATE_1}
                style={{ width: 32 }}
              />
              <img
                className="pointer"
                src={Icons.RATE_2}
                style={{ width: 32 }}
              />
              <img
                className="pointer"
                src={Icons.RATE_3}
                style={{ width: 32 }}
              />
            </IRow>
          </ICol>
        </IRow>
      </ICol>
    </IRow>
  );
}

function Footer() {
  return (
    <div>
      <FooterComponent />
    </div>
  );
}
