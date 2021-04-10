import { Dropdown, Menu } from "antd";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React from "react";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";

export function FarmScreen() {
  return (
    <div
      style={{
        width: "100%",
        padding: 24,
        background: Colors.PURPLE,
        minHeight: "100vh",
      }}
    >
      <ICol>
        <HeaderComponent />
        <br />
        <IRow>
          <ICol>
            <h1 style={{ color: Colors.PINK }}>Farms</h1>
            <h5 style={{ color: "white" }}>
              Stake Liquidity Pool (LP) tokens to earn.
            </h5>
          </ICol>
        </IRow>
        <Content />

        <Footer />
      </ICol>
    </div>
  );
}

function Content() {
  const menu = (
    <Menu>
      <Menu.Item>
        <span className="bold">Multiplier</span>
      </Menu.Item>
      <Menu.Item>
        <span className="bold">Liquidity</span>
      </Menu.Item>
      <Menu.Item>
        <span className="bold">Earned</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <ICol>
      <IRow gutter={[24, 24]} align="bottom">
        <ICol span={9}>
          <ISpace size={24}>
            <img src={Icons.LIVE_FINISH} style={{ height: 24 }} />
          </ISpace>
        </ICol>
        <ICol span={5}>
          <ISpace size={24}>
            <img src={Icons.TOOGLE_ON} style={{ height: 24 }} />
            <span className="pink">Stack only</span>
          </ISpace>
        </ICol>
        <ICol span={5}>
          <span className="pink">Sort by</span>
          <br />
          <br />
          <div className="no-wrap dropdown pointer">
            <Dropdown overlay={menu}>
              <IRow gutter={[20, 0]}>
                <ICol flex="auto">
                  <span className="bold ">APR</span>
                </ICol>
                <ICol>
                  <img src={Icons.DOWN_SECONDARY} style={{ width: 24 }} />
                </ICol>
              </IRow>
            </Dropdown>
          </div>
        </ICol>
        <ICol span={5}>
          <span className="pink">Search</span>
          <br />
          <br />
          <div className="no-wrap box-search">
            <IRow gutter={[20, 0]}>
              <ICol flex="auto">
                <input className="input-search" placeholder="Search farms..." />
              </ICol>
              <ICol>
                <img src={Icons.SEARCH} style={{ width: 24 }} />
              </ICol>
            </IRow>
          </div>
        </ICol>
      </IRow>

      <br />
      <br />
      <IRow className="box-white-outer" style={{ padding: 0 }}>
        <ICol style={{ width: "100%" }}>
          {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
            (item, index) => {
              return <Item key={index} />;
            }
          )}
        </ICol>
        <ICol style={{ width: "100%" }}>
          <IRow
            align="middle"
            justify="center"
            style={{ padding: 16, background: Colors.SECONDARY }}
          >
            <h5 className="white">TO TOP</h5>
          </IRow>
        </ICol>
      </IRow>
    </ICol>
  );
}

function Item() {
  return (
    <ICol style={{ width: "100%" }}>
      <IRow
        style={{ padding: 20, borderBottom: `1px solid ${Colors.LINE}` }}
        align="middle"
      >
        <ICol span={5}>
          <ISpace size={12}>
            <IRow>
              <img src={Icons.BNB} style={{ height: 24, zIndex: 1 }} />
              <img
                src={Icons.ETH}
                style={{ height: 24, marginLeft: -4, zIndex: 0 }}
              />
            </IRow>
            <h5>BNB-ETH</h5>
          </ISpace>
        </ICol>
        <ICol span={3}>
          <span className="gray">Earned</span>
          <br />
          <h5>?</h5>
        </ICol>
        <ICol span={4}>
          <span className="gray">ARP</span>
          <br />
          <ISpace size={12}>
            <h5 className="primary">85.58%</h5>
            <img src={Icons.QUESTION} style={{ height: 16 }} />
          </ISpace>
        </ICol>
        <ICol span={5}>
          <span className="gray">Liquidity</span>
          <br />
          <ISpace size={12}>
            <h5 className="primary">$855.554.554</h5>
            <img src={Icons.QUESTION} style={{ height: 16 }} />
          </ISpace>
        </ICol>
        <ICol span={4}>
          <span className="gray">Multiplier</span>
          <br />
          <ISpace size={12}>
            <h5 className="primary">40x</h5>
            <img src={Icons.QUESTION} style={{ height: 16 }} />
          </ISpace>
        </ICol>
        <ICol flex="auto">
          <ISpace size={12} className="pointer">
            <h5 className="secondary">Detail</h5>
            <img src={Icons.DOWN_SECONDARY} style={{ height: 24 }} />
          </ISpace>
        </ICol>
      </IRow>
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
