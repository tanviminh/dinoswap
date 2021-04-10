import { Colors, Icons, Images } from "assets";
import { useHistory } from "react-router-dom";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";
import { ConnectWalletScreen } from "screens/wallet/connect.wallet.screen";
import Modal from "antd/lib/modal/Modal";

export function Header(props: any) {
  let history = useHistory();
  let pathname = props.pathname;
  console.log(pathname);
  const [showWallet, setShowWallet] = useState(false);
  return (
    <div>
      <IRow id="swap-header">
        <ICol>
          <IRow align="middle" style={{ height: "100%" }} gutter={[32, 0]}>
            <ICol>
              <img id="logo" src={Images.LOGO_WHITE} />
            </ICol>
            <ICol>
              <ISpace size={24} align="end" className="container-menu">
                <h5
                  className="item-menu"
                  onClick={() => {
                    history.push("/swap");
                  }}
                  style={{
                    color: pathname.includes("swap")
                      ? Colors.SECONDARY
                      : "white",
                  }}
                >
                  Swap
                </h5>
                <h5
                  className="item-menu"
                  style={{
                    color: pathname.includes("pool")
                      ? Colors.SECONDARY
                      : "white",
                  }}
                  onClick={() => {
                    history.push("/pool");
                  }}
                >
                  Pool
                </h5>
                <h5 className="item-menu">Limit</h5>
                <h5 className="item-menu">Stack</h5>
                <h5 className="item-menu">Analytics</h5>
              </ISpace>
            </ICol>
          </IRow>
        </ICol>
        <ICol flex="auto"></ICol>
        <ICol>
          <ISpace size={24} align="end" className="container-menu">
            <div
              className="button"
              onClick={() => {
                setShowWallet(true);
              }}
            >
              <img src={Icons.WALLET} style={{ width: 20, marginRight: 12 }} />
              Wallet
            </div>
            <img id="avatar" src={Images.AVATAR} />
          </ISpace>
        </ICol>
      </IRow>

      <Modal
        visible={showWallet}
        title={null}
        footer={null}
        closable={false}
        onCancel={() => {
          setShowWallet(false);
        }}
        width={"25%"}
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
