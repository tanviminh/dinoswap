import { Dropdown, Menu } from "antd";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";

export function FarmScreen() {
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
          <ICol>
            <h1 style={{ color: Colors.PINK }}>Farms</h1>
            <span className="white">
              Stake Liquidity Pool (LP) tokens to earn.
            </span>
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
      <br />
      <IRow gutter={[20, 20]} align="bottom">
        <ICol lg={9} md={6} xs={24}>
          <ISpace size={20}>
            <img src={Icons.LIVE_FINISH} style={{ height: 36 }} />
          </ISpace>
        </ICol>
        <ICol lg={5} md={6}>
          <ISpace size={20}>
            <img src={Icons.TOOGLE_ON} style={{ height: 36 }} />
            <span className="pink">Stack only</span>
          </ISpace>
        </ICol>
        <ICol lg={5} md={6} xs={24}>
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
                  <img src={Icons.DOWN_SECONDARY} style={{ width: 20 }} />
                </ICol>
              </IRow>
            </Dropdown>
          </div>
        </ICol>
        <ICol lg={5} md={6} xs={24}>
          <span className="pink">Search</span>
          <br />
          <br />
          <div className="no-wrap box-search">
            <IRow gutter={[20, 0]} wrap={false}>
              <ICol flex="auto">
                <input className="input-search" placeholder="Search farms..." />
              </ICol>
              <ICol>
                <img src={Icons.SEARCH} style={{ width: 20 }} />
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
            className="pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
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
  let history = useHistory();
  const [showDetail, setShowDetail] = useState(false);
  return (
    <ICol style={{ width: "100%" }}>
      <IRow
        style={{ padding: 20, borderBottom: `1px solid ${Colors.LINE}` }}
        align="middle"
        gutter={[20, 20]}
      >
        <ICol xs={12} md={8} lg={5}>
          <ISpace size={12}>
            <IRow>
              <img src={Icons.BNB} style={{ height: 20, zIndex: 1 }} />
              <img
                src={Icons.ETH}
                style={{ height: 20, marginLeft: -4, zIndex: 0 }}
              />
            </IRow>
            <h5>BNB-ETH</h5>
          </ISpace>
        </ICol>
        <ICol xs={12} md={8} lg={3}>
          <span className="gray">Earned</span>
          <br />
          <h5>?</h5>
        </ICol>
        <ICol xs={12} md={8} lg={4}>
          <span className="gray">ARP</span>
          <br />
          <ISpace size={12}>
            <h5 className="primary">85.58%</h5>
            <img src={Icons.QUESTION} style={{ height: 16 }} />
          </ISpace>
        </ICol>
        <ICol xs={12} md={8} lg={5}>
          <span className="gray">Liquidity</span>
          <br />
          <ISpace size={12}>
            <h5 className="primary">$855.554.554</h5>
            <img src={Icons.QUESTION} style={{ height: 16 }} />
          </ISpace>
        </ICol>
        <ICol xs={12} md={8} lg={4}>
          <span className="gray">Multiplier</span>
          <br />
          <ISpace size={12}>
            <h5 className="primary">40x</h5>
            <img src={Icons.QUESTION} style={{ height: 16 }} />
          </ISpace>
        </ICol>
        <ICol xs={12} md={8} lg={3}>
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
        <IRow
          style={{ background: Colors.PINK, padding: 20 }}
          gutter={[20, 20]}
          align="middle"
        >
          <ICol xs={24} md={8}>
            <IRow className="pointer" onClick={() => {}}>
              <ISpace size={10} align="center">
                <span className="bold secondary pointer">Get BNB-ETH LP</span>
                <img src={Icons.LINK} style={{ width: 16 }} />
              </ISpace>
            </IRow>
            <IRow className="pointer" onClick={() => {}}>
              <ISpace size={10} align="center">
                <span className="bold secondary pointer">View contract</span>
                <img src={Icons.LINK} style={{ width: 16 }} />
              </ISpace>
            </IRow>

            <IRow
              className="pointer"
              onClick={() => {
                history.push("/farm/see-pair");
              }}
            >
              <ISpace size={10} align="center">
                <span className="bold secondary pointer">See pair info</span>
                <img src={Icons.LINK} style={{ width: 16 }} />
              </ISpace>
            </IRow>
          </ICol>
          <ICol xs={24} md={8}>
            <div className="box-white-outer">
              <span className="bold brown">Cake Earning</span>
              <br />
              <span className="bold">?</span>
              <IRow justify="space-between" align="middle">
                <span className="gray">-0.000USD</span>
                <div className="box-gray center pointer">
                  <h5 className="gray">Harvest</h5>
                </div>
              </IRow>
            </div>
          </ICol>
          <ICol xs={24} md={8}>
            <div className="box-white-outer" style={{ height: "100%" }}>
              <span className="bold brown">Start farming</span>
              <br />
              <span className="bold" style={{ opacity: 0 }}>
                space
              </span>
              <span className="bold" style={{ opacity: 0 }}>
                space
              </span>
              <div className="button center pointer">
                <h5 className="white">Unlock wallet</h5>
              </div>
            </div>
          </ICol>
        </IRow>
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
