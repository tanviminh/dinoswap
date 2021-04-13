import Icon from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import React, { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { SettingUtilsComponent } from "screens/components/utils/setting.utils.component";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";
import { Tooltip } from "antd";

export function SwapScreen(props: any) {
  return (
    <div>
      <IRow
        style={{ width: "100%", minHeight: "80vh" }}
        justify="center"
        align="middle"
      >
        <ICol
          xs={24}
          md={12}
          lg={10}
          xl={8}
          xxl={6}
          className="box-white-outer"
        >
          <SwapComponent />
        </ICol>
      </IRow>
    </div>
  );
}

export function SwapComponent() {
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const RATE = 1.2;

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
                  className="utils-input"
                  placeholder="0.0"
                  onChange={(e) => {
                    setValueFrom(Number.parseFloat(e.target.value) + "");
                    setValueTo(Number.parseFloat(e.target.value) * RATE + "");
                  }}
                  value={valueFrom}
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
                  className="utils-input"
                  placeholder="0.0"
                  onChange={(e) => {
                    setValueTo(Number.parseFloat(e.target.value) + "");
                    setValueFrom(Number.parseFloat(e.target.value) / RATE + "");
                  }}
                  value={valueTo}
                  type="number"
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
                <Tooltip
                  className="pointer"
                  title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                >
                  <img src={Icons.QUESTION} style={{ width: 16 }} />
                </Tooltip>
              </IRow>
            </ICol>

            <ICol span={12}>
              <span className="swap-text-gray">Min Received</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">0.03529 WBTC</span>
                <ICol flex="auto" />
                <Tooltip
                  className="pointer"
                  title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                >
                  <img src={Icons.QUESTION} style={{ width: 16 }} />
                </Tooltip>
              </IRow>
            </ICol>

            <ICol span={12}>
              <span className="swap-text-gray">Price Impact</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">{"<0.01%"}</span>
                <ICol flex="auto" />
                <Tooltip
                  className="pointer"
                  title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                >
                  <img src={Icons.QUESTION} style={{ width: 16 }} />
                </Tooltip>
              </IRow>
            </ICol>

            <ICol span={12}>
              <span className="swap-text-gray">Fee</span>
            </ICol>
            <ICol span={12}>
              <IRow>
                <span className="swap-text-gray">0.003 ETH</span>
                <ICol flex="auto" />
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
        width={isMobileOnly ? "100%" : "25%"}
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
          setShowSetting(false);
        }}
        width={isMobileOnly ? "100%" : "25%"}
      >
        <SettingUtilsComponent
          close={() => {
            setShowSetting(false);
          }}
        />
      </Modal>
    </div>
  );
}
