import { Dropdown, Menu, Progress, Tabs } from "antd";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;
interface Props {
  setShowWallet: any;
  addLiquidity?: boolean;
}

export function GovernanceScreen() {
  return (
    <div
      style={{
        width: "100%",
        padding: 24,
      }}
    >
      <HeaderComponent />
      <br />
      <IRow>
        <ICol>
          <h1 style={{}}>Governance</h1>
        </ICol>
      </IRow>
      <br />
      <Content />
      <Footer />
    </div>
  );
}

function Content() {
  let history = useHistory();
  let path = history.location.pathname;
  let activeKey = 1;
  if (path.includes("forum")) {
    activeKey = 2;
  }
  return (
    <div>
      <Tabs defaultActiveKey={activeKey + ""} onChange={() => {}}>
        <TabPane tab="Timelook" key="1">
          <Timelook />
        </TabPane>
        <TabPane tab="Forum" key="2">
          <div style={{ height: "50vh" }} />
        </TabPane>
        <TabPane tab="Treasury" key="3">
          <Treasury />
        </TabPane>
      </Tabs>
    </div>
  );
}

function Timelook() {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <br />
      <span className="bold">Security with Transparency</span>
      <br />
      <span className="bold gray">
        There is a 48 hour timelock on any updates performed on the Sushiswap
        smart contract. After functions exit the timelock they can be executed
        with 3 out of 5 team multisignatures.
      </span>
      <br />
      <ISpace>
        <span className="secondary bold">Learn more</span>
        <img src={Icons.LINK} />
      </ISpace>

      <ICol style={{ marginTop: 60 }}>
        {data.map((item, index) => {
          return (
            <IRow
              style={{
                padding: "20px 0px",
                borderTop: `1px solid ${Colors.LINE}`,
              }}
            >
              <ICol span={24} style={{ width: "100%" }}>
                <IRow justify="space-between" align="top">
                  <h4>MasterChef</h4>
                  <div className={index == 1 ? "tag-pending" : "tag-excute"}>
                    <span>{index == 1 ? "Pending" : "Excuted"}</span>
                  </div>
                </IRow>
                <span className="small gray">Unlocks in 3 hours</span>
                <br />
                <br />
                <IRow gutter={[20, 20]}>
                  <ICol md={24} lg={8}>
                    <span className="small gray">Created</span>
                    <br />
                    <span className="bold">
                      Thu Apr 08 2021 14:55:32 GMT+0700 (Indochina Time)
                    </span>
                  </ICol>
                  <ICol md={24} lg={8}>
                    <span className="small gray">End</span>
                    <br />
                    <span className="bold">
                      Thu Apr 08 2021 14:55:32 GMT+0700 (Indochina Time)
                    </span>
                  </ICol>
                  <ICol md={24} lg={8}>
                    <span className="small gray">Function</span>
                    <br />
                    <span className="bold">set(uint256,uint256,bool)</span>
                  </ICol>
                </IRow>

                <br />
                <span className="gray ">Data</span>
                <br />
                <span className="bold">
                  0x000000000000000000000000000000000000000000000000000000000000008400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                </span>
              </ICol>
            </IRow>
          );
        })}
      </ICol>
    </div>
  );
}

function Treasury() {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];
  const [filter, setFiler] = useState("");
  const menu = (
    <Menu>
      {["Teams (5)", "Signers (10)", "Election (20)"].map((item, index) => {
        return (
          <Menu.Item
            onClick={() => {
              setFiler(item);
            }}
          >
            <span className="bold">{item}</span>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <div>
      <br />
      <IRow justify="space-between" align="middle">
        <h4>Multisignature Commission</h4>
        <ICol span={5}>
          <span className="pink">Sort by</span>
          <br />
          <br />
          <div className="no-wrap dropdown pointer">
            <Dropdown overlay={menu}>
              <IRow gutter={[20, 0]}>
                <ICol flex="auto">
                  <span className="bold ">{filter}</span>
                </ICol>
                <ICol>
                  <img src={Icons.DOWN_SECONDARY} style={{ width: 24 }} />
                </ICol>
              </IRow>
            </Dropdown>
          </div>
        </ICol>
      </IRow>
      <br />
      <span className="bold">Multisignature Commission</span>
      <br />
      <span className="bold gray">
        9 signers were selected from 50 candidates. 7 out of 9 signers must
        approve action items from proposals. The signing committee can also fast
        track proposals given timely necessity...
      </span>
      <br />
      <ISpace>
        <span className="secondary bold">Learn more</span>
        <img src={Icons.LINK} />
      </ISpace>

      <ICol style={{ marginTop: 60, width: "100%" }}>
        <IRow>
          <ICol span={3}>
            <span className="gray bold">Place</span>
          </ICol>
          <ICol span={5}>
            <span className="gray bold">Signer</span>
          </ICol>
          <ICol span={5}>
            <span className="bull bold">Yes</span>
          </ICol>
          <ICol span={5}>
            <span className="bear bold">No</span>
          </ICol>
          <ICol span={6}>{/* <span className="bear bold">No</span> */}</ICol>
        </IRow>
        <br />
        {data.map((item, index) => {
          return (
            <IRow
              style={{
                padding: "20px 0px",
                borderTop: `1px solid ${Colors.LINE}`,
              }}
            >
              <ICol span={3}>
                <h4 className="light-brown pink">#{index + 1}</h4>
              </ICol>

              <ICol span={5}>
                <IRow gutter={[12, 0]}>
                  <img src={Images.AVATAR} style={{ width: 40 }} />
                  <ICol>
                    <span>@SBF_Alameda</span>
                    <br />
                    <span className="small gray">(Contributor)</span>
                  </ICol>
                </IRow>
              </ICol>
              <ICol span={5}>
                <ISpace>
                  <img src={Icons.DOT_BULL} style={{ width: 6 }} />
                  <span className="bold">234.544</span>
                </ISpace>
                <br />
                <span className="small gray">273 wallets</span>
              </ICol>
              <ICol span={5}>
                <ISpace>
                  <img src={Icons.DOT_BEAR} style={{ width: 6 }} />
                  <span className="bold">234.544</span>
                </ISpace>
                <br />
                <span className="small gray">273 wallets</span>
              </ICol>

              <ICol span={6} style={{}}>
                <Progress
                  // strokeColor={{
                  //   "0%": "#54C71E",
                  //   "100%": "red",
                  // }}
                  strokeColor={Colors.BULL}
                  trailColor={Colors.BEAR}
                  percent={80}
                />
                <br />
                <br />
                <IRow justify="space-between" align="middle">
                  <span className="bull  ">96.4% Yes</span>
                  <span className="bear ">3.6% NO</span>
                  <span className="secondary bold">
                    Snapshot
                    <img src={Icons.LINK} style={{ width: 12 }} />
                  </span>
                </IRow>
              </ICol>
            </IRow>
          );
        })}
      </ICol>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <FooterComponent />
    </div>
  );
}
