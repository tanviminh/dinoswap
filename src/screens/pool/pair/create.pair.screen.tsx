import Icon from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import React, { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";

// import "./add.liquidity.style.less";
export function CreatePairScreen(props: any) {
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
          <Content />
        </ICol>
      </IRow>
    </div>
  );
}

function Content() {
  const RATE = 100.54543;
  let history = useHistory();
  const [showWallet, setShowWallet] = useState(false);

  return (
    <div>
      <IRow style={{ width: "100%" }}>
        <ICol span={24}>
          <IRow>
            <ICol
              onClick={() => {
                history.goBack();
              }}
            >
              <img src={Icons.BACK} id="swap-set" />
            </ICol>
            <ICol flex="auto"></ICol>
            <ICol>{/* <img src={Icons.SET} id="swap-set" /> */}</ICol>
          </IRow>
          <IRow>
            <ICol>
              <h1>Create a pair</h1>
              <h5>You are the first liquidity provider.</h5>
              <span className="swap-text-gray">
                The ratio of tokens you add will set the price of this pool.
                Once you are happy with the rate click supply to review.
              </span>
              <br />
              <br />
            </ICol>
          </IRow>

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
            </ICol>
          </IRow>
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
    </div>
  );
}
