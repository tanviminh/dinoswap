import { Colors, Images } from "assets";
import { ICol, IRow, ISpace, ITitle } from "components";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { FooterComponent } from "screens/components/footer/footer.component";
import { isMobileOnly } from "react-device-detect";
import "./home.style.less";

interface Props {}

export function HomeScreen(props: any) {
  return (
    <div style={{ width: "100%", padding: 20 }}>
      <ICol>
        <Header />
        <br />
        <IRow>
          <Intro />
        </IRow>
        <Content />
        <FooterComponent />
      </ICol>
    </div>
  );
}

function Header(props: Props) {
  let history = useHistory();
  if (isMobileOnly) {
    return (
      <div>
        <ICol>
          <IRow justify="space-between" align="middle">
            <img src={Images.LOGO} style={{ height: 24 }} />
            <div
              className="button"
              onClick={() => {
                history.push("/app");
              }}
            >
              Enter app
            </div>
          </IRow>
          <br />
          <ISpace size={24}>
            <h4>Trade</h4>
            <h4>Docs</h4>
            <h4>Forum</h4>
          </ISpace>
        </ICol>
      </div>
    );
  }
  return (
    <IRow
      // gutter={[40, 40]}
      align="middle"
      style={{}}
      justify="space-between"
    >
      <ICol md={24} lg={12}>
        <img id="logo" src={Images.LOGO} />
      </ICol>
      <ICol md={24} lg={12}>
        <IRow justify="end" align="middle">
          <ISpace size={24}>
            <h5>Trade</h5>
            <h5>Docs</h5>
            <h5>Forum</h5>
            <div
              className="button"
              onClick={() => {
                history.push("/app");
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
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
      }}
    >
      <img
        src={Images.BACKGROUND_1}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <IRow
        gutter={[24, 24]}
        align="middle"
        style={{ height: "100%", padding: "15vh 5vw" }}
      >
        <ICol md={12} sm={24}>
          <div>
            <h1 className="pink">Becoming a dinorsaur with DINOEX</h1>
            <br />
            <br />
            <br />
            <h5 className="white bold">
              The Dino Exchange protocol realigns incentives for network
              participants by introducing revenue sharing and forum-driven
              network efforts to the popular AMM model.
            </h5>
            <br />
            <br />
            <br />
            <ISpace>
              <div
                className="button"
                onClick={() => {
                  history.push("/app");
                }}
              >
                Enter app
              </div>
              <div className="button-outer">Learn more</div>
            </ISpace>
          </div>
        </ICol>
        <ICol md={12} sm={24}>
          <IRow align="middle" justify="center">
            <img id="intro-image" src={Images.INTRO} />
          </IRow>
        </ICol>
      </IRow>
    </div>
  );
}

function Content(props: Props) {
  return (
    <div>
      <br />
      <br />
      <IRow align="middle" justify="center">
        <ICol lg={18} md={24} sm={24}>
          <h1 className="warp bold">Growth with{"\n"}Dino Exchange!</h1>
          <br />
          <br />
          <br />
          <IRow gutter={[24, 24]}>
            <ICol lg={10} xs={24}>
              <div className="background-primary dino-container">
                <h2 className="pink"> 1 DinoEX =</h2>
                <h1
                  style={{ fontSize: "calc(60px + 5vmin)" }}
                  className="white "
                >
                  130$
                </h1>
              </div>
            </ICol>
            <ICol lg={14} md={24} sm={24}>
              <IRow gutter={[16, 18]}>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="secondary">Liquidity</span>
                    <h2>4.48b</h2>
                  </div>
                </ICol>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="secondary">Total Volume</span>
                    <h2>45.58b</h2>
                  </div>
                </ICol>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="secondary">Total Fees</span>
                    <h2>136.727.670</h2>
                  </div>
                </ICol>
                <ICol span={12}>
                  <div className="item-container">
                    <span className="secondary">Pairs</span>
                    <h2>919</h2>
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
