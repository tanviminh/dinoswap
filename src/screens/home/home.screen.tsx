import { Colors, Images } from "assets";
import { ICol, IRow, ISpace, ITitle } from "components";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { FooterComponent } from "screens/components/footer/footer.component";

import "./home.style.less";

interface Props {}

export function HomeScreen(props: any) {
  return (
    <div id="container">
      <ICol>
        <Header />
        <Intro />
        <Content />
        <FooterComponent />
      </ICol>
    </div>
  );
}

function Header(props: Props) {
  let history = useHistory();
  return (
    <IRow id="header" gutter={[24, 24]} align="middle">
      <ICol span={12}>
        <img id="logo" src={Images.LOGO} />
      </ICol>
      <ICol span={12}>
        <IRow justify="end" align="middle">
          <ISpace size={24} align="baseline">
            <h4>Trade</h4>
            <h4>Docs</h4>
            <h4>Forum</h4>
            <div
              className="button"
              onClick={() => {
                history.push("/pool");
              }}
            >
              Enter app
            </div>
          </ISpace>
        </IRow>
      </ICol>
    </IRow>
  );
}

function Intro(props: Props) {
  let history = useHistory();

  return (
    <div id="intro-background">
      <img
        src={Images.INTRO_BOTTOM}
        style={{ position: "absolute", bottom: 0, width: "80%", right: 0 }}
      />
      <IRow gutter={[24, 24]} className="fit-height">
        <ICol span={12} className="center">
          <div style={{ width: "70%" }}>
            <span id="intro-title">Becoming a dinorsaur with DINOEX</span>
            <br />
            <br />
            <br />
            <span id="intro-description">
              The Dino Exchange protocol realigns incentives for network
              participants by introducing revenue sharing and forum-driven
              network efforts to the popular AMM model.
            </span>
            <br />
            <br />
            <br />
            <ISpace size={24}>
              <div
                className="button"
                onClick={() => {
                  history.push("/pool");
                }}
              >
                Enter app
              </div>
              <div className="button-outer">Learn more</div>
            </ISpace>
          </div>
        </ICol>
        <ICol span={12} className="center">
          <img id="intro-image" src={Images.INTRO} />
        </ICol>
      </IRow>
    </div>
  );
}

function Content(props: Props) {
  return (
    <div id="content">
      <IRow align="middle" justify="center">
        <ICol span={18}>
          <span id="title">Growth with{"\n"}Dino Exchange!</span>
          <br />
          <br />
          <br />
          <IRow gutter={[24, 24]}>
            <ICol span={10}>
              <div className="background-primary dino-container">
                <span id="dino"> 1 DinoEX =</span>
                <br />
                <span id="dino-dollar">130$</span>
              </div>
            </ICol>
            <ICol span={14}>
              <IRow gutter={[16, 18]}>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="item-key">Liquidity</span>
                    <span className="item-value">4.48b</span>
                  </div>
                </ICol>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="item-key">Total Volume</span>
                    <span className="item-value">45.58b</span>
                  </div>
                </ICol>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="item-key">Total Fees</span>
                    <span className="item-value">136.727.670</span>
                  </div>
                </ICol>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="item-key">Pairs</span>
                    <span className="item-value">919</span>
                  </div>
                </ICol>
              </IRow>
            </ICol>
          </IRow>
        </ICol>
      </IRow>
    </div>
  );
}
