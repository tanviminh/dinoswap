import { Dropdown, Menu } from "antd";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";

export function DinoPoolScreen() {
  return (
    <div
      style={{
        width: "100%",
        padding: 24,
        background: Colors.PURPLE,
        minHeight: "100vh",
      }}
    >
      <ICol>
        <HeaderComponent />
        <IRow>
          <ICol span={8}>
            <h1 style={{ color: Colors.PINK }}>Dino Pool</h1>
            <span className="white">
              Stake DINO to earn new tokens. You can unstake at any time.
              Rewards are calculated per block.
            </span>
          </ICol>
        </IRow>
        <br />
        <br />
        <Content />

        <Footer />
      </ICol>
    </div>
  );
}

function Content() {
  return (
    <ICol>
      <IRow gutter={[24, 24]}>
        <ICol>
          <ISpace size={24}>
            <img src={Icons.LIVE_FINISH} style={{ height: 24 }} />
            <ISpace size={12}>
              <img src={Icons.TOOGLE_ON} style={{ height: 24 }} />
              <span className="pink">Stack only</span>
            </ISpace>
          </ISpace>
        </ICol>
      </IRow>
      <br />
      <br />

      <IRow gutter={[24, 24]}>
        {[{}, {}, {}, {}, {}, {}, {}].map((item, index) => {
          return (
            <ICol span={8} key={index}>
              <Item />
            </ICol>
          );
        })}
      </IRow>
    </ICol>
  );
}

function Item() {
  let history = useHistory();
  const [showDetail, setShowDetail] = useState(false);
  return (
    <ICol className="fit box-white-outer" style={{ padding: 20 }}>
      <IRow>
        <h4>Dino Pool</h4>
      </IRow>
      <IRow>
        <div style={{ position: "relative" }}>
          <img src={Icons.DINO} style={{ width: 40 }} />
          <img
            src={Icons.DINO}
            style={{
              width: 16,
              position: "absolute",
              right: 0,
              bottom: 0,
              borderRadius: 100,
              border: `1px solid white`,
            }}
          />
        </div>
      </IRow>
      <br />

      <h4>0.00000</h4>
      <span className="brown bold">Dino Earned</span>
      <br />
      <br />
      <IRow>
        <div className="button fit">Unlock wallet</div>
      </IRow>
      <br />
      <IRow>
        <ICol span={12}>
          <span className=" gray">APR</span>
        </ICol>
        <ICol span={12}>
          <IRow justify="space-between">
            <span className=" gray bold">101.02%</span>
            <img src={Icons.SWAP_GRAY} style={{ width: 16, fill: "#000" }} />
          </IRow>
        </ICol>
      </IRow>
      <IRow style={{ marginTop: 10 }}>
        <ICol span={12}>
          <span className=" gray">Your stake</span>
        </ICol>
        <ICol span={12}>
          <IRow justify="space-between">
            <span className=" gray bold">0.0000</span>
            <img src={Icons.QUESTION} style={{ width: 16 }} />
          </IRow>
        </ICol>
      </IRow>
      <br />
      <div style={{ height: 2, background: Colors.LINE }} />
      <br />

      <IRow justify="space-between" align="middle">
        <img src={Icons.CORE} style={{ height: 24 }} />

        <ICol>
          <div
            onClick={() => {
              setShowDetail(!showDetail);
            }}
          >
            <ISpace size={12} className="pointer">
              <h5 className="secondary">Detail</h5>
              <img
                src={Icons.DOWN_SECONDARY}
                style={{
                  height: 24,
                  transform: showDetail ? "rotateX(180deg)" : "none",
                }}
              />
            </ISpace>
          </div>
        </ICol>
      </IRow>

      {showDetail ? (
        <div>
          <br />
          <IRow align="middle" justify="space-between">
            <span className="brown">Total</span>
            <span className="bold brown">104,385,766.593</span>
          </IRow>
          <IRow className="pointer" style={{ marginTop: 10 }}>
            <ISpace size={10}>
              <span className="bold secondary">Add Dino to Metamask</span>
              <img src={Icons.METAMASK} style={{ width: 16 }} />
            </ISpace>
          </IRow>
          <IRow className="pointer">
            <ISpace size={10}>
              <span className="bold secondary">View project site</span>
              <img src={Icons.LINK} style={{ width: 16 }} />
            </ISpace>
          </IRow>
        </div>
      ) : null}
    </ICol>
  );
}

function Footer() {
  return (
    <div>
      <FooterComponent />
    </div>
  );
}
