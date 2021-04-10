import Icon from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import React, { useState } from "react";
import { ConnectWalletScreen } from "screens/wallet/connect.wallet.screen";
import { SettingSwapScreen } from "./setting.swap.screen";

export function SwapScreen(props: any) {
  return (
    <div>
      <div>
        <br />
        <br />
        <IRow style={{ width: "100%" }}>
          <ICol span={9}></ICol>
          <ICol span={6} id="swap-popup">
            <SwapComponent />
          </ICol>

          <ICol span={9}></ICol>
        </IRow>
      </div>
    </div>
  );
}

export function SwapComponent() {
  const RATE = 100.54543;
  const [value, setValue] = useState("");
  const [showWallet, setShowWallet] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  return (
    <div>
      <IRow
        justify="end"
        onClick={() => {
          setShowSetting(true);
        }}
      >
        <img src={Icons.SET} id="swap-set" />
      </IRow>
      <IRow>
        <h1>Swap</h1>
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
                      <img src={Icons.ARROW_DOWN} className="swap-icon-coin" />
                    </ISpace>
                  </div>
                </ICol>
              </IRow>
              <IRow>
                <input
                  className="swap-input"
                  placeholder="0.0"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  value={value}
                  type="number"
                />
              </IRow>
            </ICol>
          </div>
          <IRow justify="center">
            <img src={Icons.ARROW_DOWN} className="swap-icon-coin" />
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
                      <img src={Icons.ARROW_DOWN} className="swap-icon-coin" />
                    </ISpace>
                  </div>
                </ICol>
              </IRow>
              <IRow>
                <input
                  className="swap-input"
                  placeholder="0.0"
                  readOnly
                  value={value ? Number.parseFloat(value) * RATE : ""}
                />
              </IRow>
            </ICol>
          </div>
          <br />
          <IRow gutter={[8, 8]}>
            <ICol span={12}>
              <span className="swap-text-gray">Max Sold</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">28.188 ETH per WBTC</span>
                <ICol flex="auto" />
                <img src={Icons.QUESTION} style={{ width: 16 }} />
              </IRow>
            </ICol>

            <ICol span={12}>
              <span className="swap-text-gray">Min Received</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">0.03529 WBTC</span>
                <ICol flex="auto" />
                <img src={Icons.QUESTION} style={{ width: 16 }} />
              </IRow>
            </ICol>

            <ICol span={12}>
              <span className="swap-text-gray">Price Impact</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">{"<0.01%"}</span>
                <ICol flex="auto" />
                <img src={Icons.QUESTION} style={{ width: 16 }} />
              </IRow>
            </ICol>

            <ICol span={12}>
              <span className="swap-text-gray">Fee</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">0.003 ETH</span>
                <ICol flex="auto" />
                <img src={Icons.QUESTION} style={{ width: 16 }} />
              </IRow>
            </ICol>
          </IRow>

          <br />
          <div
            className="button"
            onClick={() => {
              setShowWallet(true);
            }}
          >
            Connect wallet
          </div>
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
        width={"20%"}
      >
        <ConnectWalletScreen
          close={() => {
            setShowWallet(false);
          }}
        />
      </Modal>

      <Modal
        visible={showSetting}
        title={null}
        footer={null}
        closable={false}
        onCancel={() => {
          setShowWallet(false);
        }}
        width={"25%"}
      >
        <SettingSwapScreen
          close={() => {
            setShowSetting(false);
          }}
        />
      </Modal>
    </div>
  );
}
