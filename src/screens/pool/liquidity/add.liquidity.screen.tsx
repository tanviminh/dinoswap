import Icon from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ConnectWalletScreen } from "screens/wallet/connect.wallet.screen";
import { ModifierFlags } from "typescript";

export function AddLiquidityScreen(props: any) {
  return (
    <div>
      <Content />
    </div>
  );
}

function Content() {
  const [showWallet, setShowWallet] = useState(false);

  const RATE = 100.54543;
  let history = useHistory();
  return (
    <div>
      <br />
      <br />
      <IRow style={{ width: "100%" }}>
        <ICol span={9}></ICol>
        <ICol span={6} id="swap-popup">
          <IRow>
            <ICol
              onClick={() => {
                history.goBack();
              }}
            >
              <img src={Icons.BACK} id="swap-set" />
            </ICol>
            <ICol flex="auto"></ICol>
            <ICol>
              <img src={Icons.SET} id="swap-set" />
            </ICol>
          </IRow>
          <IRow>
            <h1>Add Liquidity</h1>
          </IRow>
          <br />
          <IRow>
            <ICol style={{ width: "100%" }}>
              <div className="swap-item-caculator">
                <ICol>
                  <IRow>
                    <ICol>
                      <span style={{ color: Colors.BROWN }}>From</span>
                    </ICol>
                    <ICol flex="auto"></ICol>
                    <ICol>
                      <div className="swap-container-coin">
                        <ISpace size={8}>
                          <img src={Icons.ETH} className="swap-icon-coin" />
                          <span style={{ color: Colors.BROWN }}>ETH</span>
                          <img
                            src={Icons.ARROW_DOWN}
                            className="swap-icon-coin"
                          />
                        </ISpace>
                      </div>
                    </ICol>
                  </IRow>
                  <IRow>
                    <input
                      className="swap-input"
                      placeholder="0.0"
                      // onChange={(e) => {
                      //   setValue(e.target.value);
                      // }}
                      // value={value}
                      type="number"
                    />
                  </IRow>
                </ICol>
              </div>
              <IRow justify="center">
                <img
                  src={Icons.PLUS}
                  style={{ height: 12, margin: "12px 0px" }}
                />
              </IRow>

              <div className="swap-item-caculator">
                <ICol>
                  <IRow>
                    <ICol>
                      <span style={{ color: Colors.BROWN }}>From</span>
                    </ICol>
                    <ICol flex="auto"></ICol>
                    <ICol>
                      <div className="swap-container-coin">
                        <ISpace size={8}>
                          <img src={Icons.BNB} className="swap-icon-coin" />
                          <span style={{ color: Colors.BROWN }}>BNB</span>
                          <img
                            src={Icons.ARROW_DOWN}
                            className="swap-icon-coin"
                          />
                        </ISpace>
                      </div>
                    </ICol>
                  </IRow>
                  <IRow>
                    <input
                      className="swap-input"
                      placeholder="0.0"
                      // readOnly
                      // value={value ? Number.parseFloat(value) * RATE : ""}
                    />
                  </IRow>
                </ICol>
              </div>
              <br />

              <div
                className="button"
                onClick={() => {
                  setShowWallet(true);
                }}
              >
                Connect wallet
              </div>
              <br />
              <h4>Tip:</h4>
              <span className="swap-text-gray">
                When you add liquidity, you will receive pool tokens
                representing your position. These tokens automatically earn fees
                proportional to your share of the pool, and can be redeemed at
                any time
              </span>
            </ICol>
          </IRow>
        </ICol>
        <ICol span={9}></ICol>
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
