import { Colors, Icons } from "assets";
import { ICol, IRow } from "components";
import React, { useState } from "react";

const items = [
  {
    title: "Install Metamask",
    icon: Icons.METAMASK,
  },
  {
    title: "WalletConnect",
    icon: Icons.WALLET_CONNECT,
  },
  {
    title: "Lattice",
    icon: Icons.WALLET_CONNECT,
  },
  {
    title: "Coinbase Wallet",
    icon: Icons.COINBASE,
  },
  {
    title: "Fortmatic",
    icon: Icons.FORTMATIC,
  },
  {
    title: "Portis",
    icon: Icons.PORTIS,
  },
];
export function ConnectWalletScreen(props: any) {
  return (
    <div>
      <IRow>
        <ICol style={{ width: "100%" }}>
          <IRow>
            <ICol>
              <h4>Connect to wallet</h4>
            </ICol>

            <ICol flex="auto" />
            <ICol
              onClick={() => {
                props.close();
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={Icons.CLOSE} style={{ width: 20 }} />
            </ICol>
          </IRow>
          {items.map((item, index) => {
            return <Item data={item} key={index} />;
          })}

          <br />

          <IRow justify="center">
            <span style={{ color: Colors.GRAY }}>Learn how to connect?</span>
            <img src={Icons.QUESTION} style={{ width: 20, marginLeft: 8 }} />
          </IRow>
        </ICol>
      </IRow>
    </div>
  );
}

function Item(props: any) {
  const { title, icon } = props.data;
  return (
    <div style={{ marginTop: 10 }}>
      <IRow
        style={{
          padding: 10,
          border: "1px solid #E0E0E0",
          borderRadius: 10,
          background: "white",
        }}
      >
        <ICol>
          <span>{title}</span>
        </ICol>
        <ICol flex="auto"></ICol>
        <img src={icon} style={{ width: 20 }} />
      </IRow>
    </div>
  );
}
