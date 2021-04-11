import React, { useState } from "react";
import { Tabs } from "antd";
import { ICol, IRow, ISpace } from "components";
import { Icons } from "assets";
import Modal from "antd/lib/modal/Modal";
import { ConnectWalletScreen } from "screens/wallet/connect.wallet.screen";
import { SettingUtilsComponent } from "./setting.utils.component";
const { TabPane } = Tabs;
interface Props {
  setShowWallet: any;
  addLiquidity?: boolean;
}

export function UtilsComponent() {
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
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        <TabPane tab="Swap" key="1">
          <Swap setShowWallet={setShowSetting} />
        </TabPane>
        <TabPane tab="+Liquidity" key="2">
          <Liquidity setShowWallet={setShowSetting} />
        </TabPane>
        <TabPane tab="Stake" key="3">
          <Swap setShowWallet={setShowSetting} />
        </TabPane>

        <TabPane tab="-Liquidity" key="4">
          <Liquidity setShowWallet={setShowSetting} />
        </TabPane>
      </Tabs>

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
          setShowSetting(false);
        }}
        width={"25%"}
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

function Swap(props: Props) {
  const [value, setValue] = useState("");
  const RATE = 100.54543;

  return (
    <div>
      <br />
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">Input</span>
            <div className="box-white-outer" style={{ padding: 8 }}>
              <ISpace size={8}>
                <img src={Icons.DINO} style={{ width: 20 }} />
                <span className="brown bold">DINO</span>
                <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
              </ISpace>
            </div>
          </IRow>
          <IRow>
            <input
              className="utils-input"
              placeholder="0.0"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
              type="number"
            />
          </IRow>
        </div>
      </IRow>
      <IRow justify="center" style={{ margin: "12px 0px" }}>
        <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
      </IRow>
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">Output</span>
            <div className="box-white-outer" style={{ padding: 8 }}>
              <ISpace size={8}>
                <img src={Icons.ETH} style={{ width: 20 }} />
                <span className="brown bold">ETH</span>
                <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
              </ISpace>
            </div>
          </IRow>
          <IRow>
            <input
              className="utils-input"
              placeholder="0.0"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              readOnly
              value={value ? Number.parseFloat(value) * RATE : ""}
              type="number"
            />
          </IRow>
        </div>
      </IRow>

      <br />
      <IRow gutter={[8, 8]}>
        <ICol span={12}>
          <span className="gray">Max Sold</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">28.188 ETH per WBTC</span>
            <ICol flex="auto" />
            <img src={Icons.QUESTION} style={{ width: 16 }} />
          </IRow>
        </ICol>

        <ICol span={12}>
          <span className="gray">Min Received</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">0.03529 WBTC</span>
            <ICol flex="auto" />
            <img src={Icons.QUESTION} style={{ width: 16 }} />
          </IRow>
        </ICol>

        <ICol span={12}>
          <span className="gray">Price Impact</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">{"<0.01%"}</span>
            <ICol flex="auto" />
            <img src={Icons.QUESTION} style={{ width: 16 }} />
          </IRow>
        </ICol>

        <ICol span={12}>
          <span className="gray">Fee</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">0.003 ETH</span>
            <ICol flex="auto" />
            <img src={Icons.QUESTION} style={{ width: 16 }} />
          </IRow>
        </ICol>
      </IRow>

      <br />
      <div
        className="button"
        onClick={() => {
          props.setShowWallet(true);
        }}
      >
        Connect wallet
      </div>
    </div>
  );
}

function Liquidity(props: Props) {
  return (
    <div>
      <br />
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">Input</span>
            <div className="box-white-outer" style={{ padding: 8 }}>
              <ISpace size={8}>
                <img src={Icons.DINO} style={{ width: 20 }} />
                <span className="brown bold">DINO</span>
                <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
              </ISpace>
            </div>
          </IRow>
          <IRow>
            <input className="utils-input" placeholder="0.0" type="number" />
          </IRow>
        </div>
      </IRow>
      <IRow justify="center" style={{ margin: "12px 0px" }}>
        <img src={Icons.PLUS} style={{ width: 20 }} />
      </IRow>
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">Output</span>
            <div className="box-white-outer" style={{ padding: 8 }}>
              <ISpace size={8}>
                <img src={Icons.ETH} style={{ width: 20 }} />
                <span className="brown bold">ETH</span>
                <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
              </ISpace>
            </div>
          </IRow>
          <IRow>
            <input className="utils-input" placeholder="0.0" type="number" />
          </IRow>
        </div>
      </IRow>

      <br />
      <div
        className="button"
        onClick={() => {
          props.setShowWallet(true);
        }}
      >
        Connect wallet
      </div>

      <br />
      <h4>Tip:</h4>
      <span className="swap-text-gray">
        When you add liquidity, you will receive pool tokens representing your
        position. These tokens automatically earn fees proportional to your
        share of the pool, and can be redeemed at any time
      </span>
    </div>
  );
}
