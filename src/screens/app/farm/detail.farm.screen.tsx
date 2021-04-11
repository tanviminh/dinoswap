import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React from "react";
import { useHistory } from "react-router-dom";
import { SwapComponent, SwapScreen } from "screens/swap/swap.screen";
import { FooterComponent } from "screens/components/footer/footer.component";
import { HeaderComponent } from "screens/components/header/header.component";
import { PaginationComponent } from "screens/components/page/pagination.component";

export function DetailFarmScreen() {
  let history = useHistory();
  return (
    <div style={{ width: "100%", padding: 24 }}>
      <IRow>
        <ICol span={24}>
          <div>
            <ISpace size={12}>
              <span
                className="gray pointer"
                onClick={() => {
                  history.goBack();
                }}
              >
                Farm
              </span>
              <img src={Icons.NEXT} style={{ width: 24 }} />
              <h5>DINO-ETH</h5>
            </ISpace>
          </div>
          <HeaderComponent />
          <br />
          <Chart />
          <br />
          <br />
          <DataTable />
          <Footer />
        </ICol>
      </IRow>
    </div>
  );
}

function Chart(props: any) {
  return (
    <IRow gutter={[24, 24]}>
      <ICol flex="auto">
        <IRow
          style={{
            height: 306,
            border: `1px solid ${Colors.SECONDARY}`,
            borderRadius: 20,
            padding: 20,
            background: Colors.LINE,
          }}
        >
          <ICol>
            <ISpace size={12}>
              <span>Liquidity</span>
              <span>Volume</span>
              <span>DINO/ETH</span>
              <span>ETH/DINO</span>
            </ISpace>
          </ICol>
        </IRow>

        <br />
        <br />
        <IRow>
          <ICol span={24}>
            <h1>Pair Details</h1>
            <br />
            <IRow>
              <ICol span={8}>
                <span>Total Liquidity</span>
                <br />
                <ISpace size={8} align="center">
                  <h5>$3.656.554</h5>

                  <span className="bear">-0.71%</span>
                </ISpace>
              </ICol>
              <ICol span={8}>
                <span>Volume (24hrs)</span>
                <br />
                <ISpace size={8} align="center">
                  <h5>$3.656.554</h5>
                  <span className="bull">+0.71%</span>
                </ISpace>
              </ICol>

              <ICol span={8}>
                <span>Fee (24hrs)</span>
                <br />
                <ISpace size={8} align="center">
                  <h5>$3.656.554</h5>
                  <span className="bull">+0.71%</span>
                </ISpace>
              </ICol>
            </IRow>
          </ICol>
        </IRow>
        <br />
        <br />
        <IRow>
          <ICol span={24}>
            <h5>Tokens</h5>
            <br />
            <ICol className="box-gray-border">
              {[{}, {}, {}].map((item, index) => {
                return (
                  <IRow
                    style={{
                      padding: 12,
                      borderTop: `1px solid ${Colors.LINE}`,
                    }}
                    align="middle"
                  >
                    <img src={Icons.BNB} style={{ width: 24 }} />
                    <ICol flex="auto" style={{ marginLeft: 12 }}>
                      <span>1 DINO = 0.423443 ETH ($456.78)</span>
                    </ICol>
                    <ISpace size={8}>
                      <span className="secondary bold">View more</span>
                      <img src={Icons.NEXT} style={{ width: 24 }} />
                    </ISpace>
                  </IRow>
                );
              })}
            </ICol>
          </ICol>
        </IRow>
        <br />
        <br />
        <IRow>
          <ICol span={24}>
            <h5>Underlying Liquidity</h5>
            <br />
            <ICol className="box-gray-border">
              {[{}, {}, {}].map((item, index) => {
                return (
                  <IRow
                    style={{
                      padding: 12,
                      borderTop: `1px solid ${Colors.LINE}`,
                    }}
                    align="middle"
                  >
                    <img src={Icons.BNB} style={{ width: 24 }} />
                    <ICol flex="auto" style={{ marginLeft: 12 }}>
                      <span>1 DINO = 0.423443 ETH ($456.78)</span>
                    </ICol>
                    <ISpace size={8}>
                      <span className="secondary bold">View more</span>
                      <img src={Icons.NEXT} style={{ width: 24 }} />
                    </ISpace>
                  </IRow>
                );
              })}
            </ICol>
          </ICol>
        </IRow>
      </ICol>
      <ICol span={8}>
        <div className="box-white-outer">
          <SwapComponent />
        </div>
      </ICol>
    </IRow>
  );
}

function DataTable() {
  return (
    <IRow gutter={[24, 24]}>
      <ICol flex="auto">
        <ISpace size={20} align="center">
          <ICol>
            <span className="bold">All</span>
            <div style={{ height: 2, background: Colors.SECONDARY }}></div>
          </ICol>

          <span className="gray">Swaps</span>
          <span className="gray">Adds</span>
          <span className="gray">Removes</span>
        </ISpace>
        <br />
        <br />
        <IRow
          style={{
            padding: "12px",
            background: Colors.PRIMARY,
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <ICol span={4}></ICol>
          <ICol span={4}>
            <IRow justify="end">
              <span className="pink small">Total value</span>
            </IRow>
          </ICol>
          <ICol span={4}>
            <IRow justify="end">
              <span className="pink small">Token amount</span>
            </IRow>
          </ICol>
          <ICol span={4}>
            <IRow justify="end">
              <span className="pink small">Token amount</span>
            </IRow>
          </ICol>
          <ICol span={4}>
            <IRow justify="end">
              <span className="pink small">Account</span>
            </IRow>
          </ICol>
          <ICol span={4}>
            <IRow justify="end">
              <span className="pink small">Time</span>
            </IRow>
          </ICol>
        </IRow>
        {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
          (item, index) => {
            return (
              <IRow
                style={{
                  padding: "12px",
                  borderTop: `1px solid ${Colors.LINE}`,
                }}
              >
                <ICol span={4}>
                  <span className="secondary small">Add ETH and COVER</span>
                </ICol>
                <ICol span={4}>
                  <IRow justify="end">
                    <span className="small">20.17$</span>
                  </IRow>
                </ICol>
                <ICol span={4}>
                  <IRow justify="end">
                    <span className=" small">0.00596 ETH</span>
                  </IRow>
                </ICol>
                <ICol span={4}>
                  <IRow justify="end">
                    <span className=" small">0.00596 ETH DINO</span>
                  </IRow>
                </ICol>
                <ICol span={4}>
                  <IRow justify="end">
                    <span className=" small">0xe11f0...0df50</span>
                  </IRow>
                </ICol>
                <ICol span={4}>
                  <IRow justify="end">
                    <span className="pink small">10 days ago</span>
                  </IRow>
                </ICol>
              </IRow>
            );
          }
        )}

        <br />
        <PaginationComponent />
      </ICol>

      <ICol span={8}></ICol>
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
