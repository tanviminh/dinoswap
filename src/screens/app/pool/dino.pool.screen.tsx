import { PropertySafetyFilled } from "@ant-design/icons";
import { Dropdown, Menu, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState, useEffect } from "react";
import { isMobileOnly } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";

export function DinoPoolScreen() {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        padding: 20,
        background: Colors.PURPLE,
        minHeight: "100vh",
      }}
    >
      <ICol>
        <HeaderComponent />
        <br />

        <IRow>
          <ICol xs={20} md={16} lg={8}>
            <h1 style={{ color: Colors.PINK }}>Dino Pool</h1>
            <span className="white">
              Stake DINO to earn new tokens. You can unstake at any time.
              Rewards are calculated per block.
            </span>
          </ICol>
        </IRow>
        <br />
        <br />
        <Content showWallet={showWallet} setShowWallet={setShowWallet} />

        <Footer />
      </ICol>
      <Modal
        visible={showWallet}
        title={null}
        footer={null}
        closable={false}
        onCancel={() => {
          setShowWallet(false);
        }}
        width={isMobileOnly ? "100%" : "25%"}
      >
        <ConnectWalletScreen
          close={() => {
            setShowWallet(false);
          }}
        />
      </Modal>
    </div>
  );
}

function Content(props: any) {
  return (
    <ICol>
      <IRow gutter={[20, 20]}>
        <ICol>
          <ISpace size={20}>
            <img
              src={Icons.LIVE_FINISH}
              style={{ height: 36 }}
              className="pointer"
            />
            <ISpace size={12} className="pointer">
              <img src={Icons.TOOGLE_ON} style={{ height: 36 }} />
              <span className="pink">Stack only</span>
            </ISpace>
          </ISpace>
        </ICol>
      </IRow>
      <br />
      <br />

      <IRow gutter={[20, 20]}>
        {[{}, {}, {}, {}, {}, {}, {}].map((item, index) => {
          return (
            <ICol xs={24} md={12} lg={8} key={index}>
              <Item {...props} />
            </ICol>
          );
        })}
      </IRow>
    </ICol>
  );
}

function Item(props: any) {
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
        <div
          className="button fit"
          onClick={() => {
            props.setShowWallet(true);
          }}
        >
          Unlock wallet
        </div>
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
            <Tooltip
              className="pointer"
              title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
            >
              <img src={Icons.QUESTION} style={{ width: 16 }} />
            </Tooltip>
          </IRow>
        </ICol>
      </IRow>
      <br />
      <div style={{ height: 2, background: Colors.LINE }} />
      <br />

      <IRow justify="space-between" align="middle">
        <img src={Icons.CORE} style={{ height: 20 }} />

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
                  height: 20,
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
