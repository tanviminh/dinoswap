import React, { useState } from "react";
import { Tabs, Tooltip } from "antd";
import { ICol, IRow, ISpace } from "components";
import { Icons } from "assets";
import Modal from "antd/lib/modal/Modal";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";
import { SettingUtilsComponent } from "./setting.utils.component";
import { isMobileOnly } from "react-device-detect";
import { ListCoinComponent } from "./list.coin.component";
import { totalmem } from "node:os";
const { TabPane } = Tabs;
interface Props {
  setShowWallet: any;
  addLiquidity?: boolean;
}

export function UtilsComponent() {
  const [showWallet, setShowWallet] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const [key, setKey] = useState("1");
  return (
    <div>
      <IRow
        justify="end"
        style={{ height: 32 }}
        onClick={() => {
          if (key != "1") {
            return;
          }
          setShowSetting(true);
        }}
      >
        {key == "1" ? <img src={Icons.SET} id="swap-set" /> : null}
      </IRow>

      <Tabs
        defaultActiveKey="1"
        onChange={(keyActive) => {
          setKey(keyActive);
        }}
      >
        <TabPane tab="Swap" key="1">
          <Swap setShowWallet={setShowWallet} />
        </TabPane>
        <TabPane tab="+Liquidity" key="2">
          <Liquidity setShowWallet={setShowWallet} />
        </TabPane>
        <TabPane disabled={true} tab="Stake" key="3">
          {/* <Swap setShowWallet={setShowWallet} /> */}
        </TabPane>
        <TabPane tab="-Liquidity" key="4">
          <Liquidity setShowWallet={setShowWallet} />
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

const intialState: any = {};
export function Swap(props: Props) {
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const RATE = 1.2;
  //null or from or to
  const [showListCoin, setShowListCoin] = useState("");
  const [from, setFrom] = useState(intialState);
  const [to, setTo] = useState(intialState);

  return (
    <div>
      <br />
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">From</span>
            <div
              className="box-white-outer pointer"
              style={{ padding: 8 }}
              onClick={() => {
                setShowListCoin("from");
              }}
            >
              <ISpace size={8}>
                <img
                  src={from.icon ? from.icon : Icons.DINO}
                  style={{ width: 20 }}
                />
                <span className="brown bold">
                  {from.title ? from.title : "DINO"}
                </span>
                <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
              </ISpace>
            </div>
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
        </div>
      </IRow>
      <IRow justify="center" align="middle" style={{ margin: "12px 0px" }}>
        <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
        <img
          src={Icons.DOWN_BROWN}
          style={{ width: 20, transform: "rotateX(180deg)" }}
        />
      </IRow>
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">To</span>
            <div
              className="box-white-outer pointer"
              style={{ padding: 8 }}
              onClick={() => {
                setShowListCoin("to");
              }}
            >
              <ISpace size={8}>
                <img
                  src={to.icon ? to.icon : Icons.ETH}
                  style={{ width: 20 }}
                />
                <span className="brown bold">
                  {to.title ? to.title : "ETH"}
                </span>
                <img src={Icons.DOWN_BROWN} style={{ width: 20 }} />
              </ISpace>
            </div>
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
            <Tooltip
              className="pointer"
              title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
            >
              <img src={Icons.QUESTION} style={{ width: 16 }} />
            </Tooltip>
          </IRow>
        </ICol>

        <ICol span={12}>
          <span className="gray">Min Received</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">0.03529 WBTC</span>
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
          <span className="gray">Price Impact</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">{"<0.01%"}</span>
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
          <span className="gray">Fee</span>
        </ICol>
        <ICol span={12}>
          <IRow>
            <span className="gray">0.003 ETH</span>
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
          props.setShowWallet(true);
        }}
      >
        Connect wallet
      </div>

      <ListCoinComponent
        visible={showListCoin}
        setVisible={setShowListCoin}
        callback={(item: any) => {
          if (showListCoin === "from") {
            setFrom(item);
            return;
          }

          if (showListCoin === "to") {
            setTo(item);
            return;
          }
        }}
      />
    </div>
  );
}

export function Liquidity(props: Props) {
  //null or from or to
  const [showListCoin, setShowListCoin] = useState("");
  const [from, setFrom] = useState(intialState);
  const [to, setTo] = useState(intialState);
  return (
    <div>
      <br />
      <IRow>
        <div className="box-pink-inner" style={{ padding: 12 }}>
          <IRow justify="space-between">
            <span className="brown small bold">Input</span>
            <div
              className="box-white-outer pointer"
              style={{ padding: 8 }}
              onClick={() => {
                setShowListCoin("from");
              }}
            >
              <ISpace size={8}>
                <img
                  src={from.icon ? from.icon : Icons.DINO}
                  style={{ width: 20 }}
                />
                <span className="brown bold">
                  {from.title ? from.title : "DINO"}
                </span>
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
            <div
              className="box-white-outer pointer"
              style={{ padding: 8 }}
              onClick={() => {
                setShowListCoin("to");
              }}
            >
              <ISpace size={8}>
                <img
                  src={to.icon ? to.icon : Icons.ETH}
                  style={{ width: 20 }}
                />
                <span className="brown bold">
                  {to.title ? to.title : "ETH"}
                </span>
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
      <ListCoinComponent
        visible={showListCoin}
        setVisible={setShowListCoin}
        callback={(item: any) => {
          if (showListCoin === "from") {
            setFrom(item);
            return;
          }

          if (showListCoin === "to") {
            setTo(item);
            return;
          }
        }}
      />
    </div>
  );
}
