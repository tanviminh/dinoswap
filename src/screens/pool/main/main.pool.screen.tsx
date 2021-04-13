import React, { useState } from "react";
import Icon from "@ant-design/icons";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import "./main.pool.style.less";
import { useHistory } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";

export function MainPoolScreen(props: any) {
  return (
    <div>
      <IRow
        style={{ width: "100%", minHeight: "80vh" }}
        justify="center"
        align="middle"
      >
        <ICol span={24}>
          <Content />
        </ICol>
      </IRow>
    </div>
  );
}

function Content(props: any) {
  let history = useHistory();
  return (
    <div>
      <IRow
        style={{ width: "100%", padding: 20 }}
        align="middle"
        justify="center"
      >
        <ICol lg={12} md={18} xs={24}>
          <h1
            style={{
              color: Colors.PINK,
              fontSize: "calc(28px + 2.5vmin)",
              lineHeight: 1.2,
            }}
          >
            Liquidity provider rewards
          </h1>
          <br />
          <span style={{ color: "white", fontSize: "calc(8px + 1vmin)" }}>
            Liquidity providers earn a 0.25% fee on all trades proportional to
            their share of the pool. Fees are added to the pool, accrue in real
            time and can be claimed by withdrawing your liquidity.
          </span>
          <br />
          <br />
          <br />
          <h4
            style={{
              color: Colors.PINK,
            }}
          >
            Your liquidity
          </h4>
          <br />
          <ISpace size={16}>
            <div
              className="button-outer"
              onClick={() => {
                history.push("pool/create-pair");
              }}
            >
              Create a pair
            </div>
            <div
              className="button"
              onClick={() => {
                history.push("pool/add-liquidity");
              }}
            >
              Add Liquidity
            </div>
          </ISpace>

          <br />
          <br />

          <span style={{ color: Colors.GRAY }}>
            Connect to a wallet to view your liquidity
          </span>
        </ICol>
      </IRow>
    </div>
  );
}
