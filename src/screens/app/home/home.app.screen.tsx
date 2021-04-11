import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React from "react";
import { useHistory } from "react-router-dom";
import { SwapComponent, SwapScreen } from "screens/swap/swap.screen";
import { FooterComponent } from "screens/components/footer/footer.component";
import { BarChartComponent } from "screens/components/chart/bar.chart.component";
import { LineChartComponent } from "screens/components/chart/line.chart.component";
import { UtilsComponent } from "screens/components/utils/utils.component";

export function HomeAppScreen(props: any) {
  return (
    <div style={{ width: "100%", padding: 24 }}>
      <IRow>
        <ICol span={24}>
          <Header />

          <br />
          <Chart />
          <br />
          <br />
          <PopularList />
          <br />
          <br />
          <br />
          <Announcements />

          <br />
          <br />
          <br />
          <TopMovers />

          <br />
          <br />
          <br />
          <TopEarners />
          <br />
          <br />
          <Footer />
        </ICol>
      </IRow>
    </div>
  );
}

function Header(props: any) {
  let history = useHistory();
  return (
    <IRow gutter={[24, 0]} align="middle" wrap={false}>
      <ICol flex="auto">
        <div
          className="box-gray-inner"
          style={{ width: "100%", overflow: "scroll" }}
        >
          <ISpace className="no-wrap" size={24}>
            <span className="no-wrap">
              Transactions (24hr):{" "}
              <span className="no-wrap" style={{ color: Colors.BEAR }}>
                -14%
              </span>
            </span>

            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">
              Transactions (24hr):{" "}
              <span className="no-wrap" style={{ color: Colors.BULL }}>
                -14%
              </span>
            </span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">Transactions (24hr): 14</span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
            <span className="no-wrap">Transactions (24hr): 14,256</span>
          </ISpace>
        </div>
      </ICol>

      <ICol>
        <ISpace size={24}>
          <div
            className="button"
            onClick={() => {
              // setShowWallet(true);
            }}
          >
            <img src={Icons.WALLET} style={{ width: 20, marginRight: 12 }} />
            Wallet
          </div>
          <img id="avatar" src={Images.AVATAR} />
        </ISpace>
      </ICol>
    </IRow>
  );
}

function Chart(props: any) {
  return (
    <IRow gutter={[24, 24]}>
      <ICol span={16}>
        <IRow
          style={{
            height: 236,
            border: "1px solid gray",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <LineChartComponent />
          <div style={{ position: "absolute", top: 20, left: 24 }}>
            <ICol>
              <h5>Liquidity</h5>
              <h3>$4.6b</h3>
              <span>March 30, 2021</span>
            </ICol>
          </div>
        </IRow>
        <br />
        <IRow
          style={{
            height: 236,
            border: "1px solid gray",
            borderRadius: 20,
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <BarChartComponent />
          </div>
        </IRow>
        <br />
        <br />
        <IRow wrap={false}>
          <ICol flex="auto" className="no-wrap box-search">
            <IRow gutter={[20, 0]}>
              <ICol flex="auto">
                <input
                  className="input-search"
                  placeholder="Search DinoEx pair and tokens..."
                />
              </ICol>
              <ICol>
                <img src={Icons.SEARCH} style={{ width: 24 }} />
              </ICol>
            </IRow>
          </ICol>
        </IRow>
      </ICol>
      <ICol span={8}>
        <div className="box-white-outer">
          {/* <SwapComponent /> */}
          <UtilsComponent />
        </div>
      </ICol>
    </IRow>
  );
}

function PopularList() {
  function Item() {
    return (
      <div
        style={{
          boxShadow: "3px 3px 12px rgba(0, 0, 0, 0.12)",
          borderRadius: 14,
          padding: "2px 10px 2px 2px",
        }}
      >
        <ISpace size="small">
          <img src={Icons.COINBASE} style={{ width: 20 }} />
          <span>StableCoin</span>
        </ISpace>
      </div>
    );
  }
  return (
    <IRow gutter={[24, 24]}>
      <ICol flex="auto">
        <IRow align="middle" justify="space-between">
          <h1>Popular list</h1>
          <span className="pointer" style={{ color: Colors.SECONDARY }}>
            View more
          </span>
        </IRow>
        <br />
        <ISpace>
          {[{}, {}, {}].map((item, index) => {
            return <Item />;
          })}
        </ISpace>
      </ICol>
      <ICol span={8} />
    </IRow>
  );
}

function Announcements() {
  function Item() {
    return (
      <ICol style={{}}>
        <IRow
          gutter={[24, 24]}
          align="middle"
          wrap={false}
          style={{
            borderTop: `1px solid ${Colors.LINE}`,
            padding: "10px 0px",
          }}
        >
          <ICol flex="auto">
            <h4>Introducing the Stablecoin List</h4>
            <span className="bold gray">
              Stablecoins are back with a new twist - algorithmic stablecoins.
              Browse stablecoins in our new list. Add liquidity to MIS-USDT only
              on SushiSwap.
            </span>
            <br />
            <br />
            <ISpace size="middle" align="center">
              <h5>MIC</h5>
              <img src={Icons.UP} style={{ width: 12 }} />
              <h5 style={{ color: Colors.BULL }}>0.71%</h5>
            </ISpace>
          </ICol>
          <ICol flex="128px">
            <img src={Icons.FORTMATIC} style={{ width: 128 }} />
          </ICol>
        </IRow>
      </ICol>
    );
  }
  return (
    <IRow gutter={[24, 24]}>
      <ICol span={16}>
        <IRow align="middle" justify="space-between">
          <h1>Announcements</h1>
          <span className="pointer" style={{ color: Colors.SECONDARY }}>
            View more
          </span>
        </IRow>
        <br />
        <IRow gutter={[24, 0]}>
          {[{}, {}, {}, {}, {}].map((item, index) => {
            return <Item />;
          })}
        </IRow>
      </ICol>
      <ICol span={8} />
    </IRow>
  );
}

function TopMovers() {
  function Item() {
    return (
      <ICol span={6}>
        <div className="box-white-outer">
          <h4>ZLOT</h4>
          <span style={{ color: Colors.TEXT_GRAY }}>zLOT</span>
          <br />
          <br />
          <h4 style={{ color: Colors.BULL }}>688.78$</h4>
          <span style={{ color: Colors.BULL }}>+98%</span>
        </div>
      </ICol>
    );
  }
  return (
    <IRow gutter={[24, 24]}>
      <ICol span={16}>
        <IRow align="middle" justify="space-between">
          <h1>Top Movers</h1>
          <span className="pointer" style={{ color: Colors.SECONDARY }}>
            View more
          </span>
        </IRow>
        <br />
        <IRow className="" gutter={[20, 20]}>
          {[{}, {}, {}, {}, {}, {}, {}].map((item, index) => {
            return <Item />;
          })}
        </IRow>
      </ICol>
      <ICol span={8} />
    </IRow>
  );
}

function TopEarners() {
  function Item() {
    return (
      <ICol span={6}>
        <div className="box-white-outer">
          <h4>ETH-AXS</h4>
          <br />
          <br />
          <h4 style={{ color: Colors.BEAR }}>-688%</h4>
        </div>
      </ICol>
    );
  }
  return (
    <IRow gutter={[24, 24]}>
      <ICol span={16}>
        <IRow align="middle" justify="space-between">
          <h1>Top Earners</h1>
          <span className="pointer" style={{ color: Colors.SECONDARY }}>
            View more
          </span>
        </IRow>
        <br />
        <IRow className="" gutter={[20, 20]}>
          {[{}, {}, {}, {}, {}, {}, {}].map((item, index) => {
            return <Item />;
          })}
        </IRow>
      </ICol>
      <ICol span={8} />
    </IRow>
  );
}

function Footer() {
  return (
    <div>
      <FooterComponent />
    </div>
  );
}
