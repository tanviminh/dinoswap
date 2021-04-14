import { Dropdown, Menu, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";
import { isMobileOnly } from "react-device-detect";
const items = [
  {
    title: "ETH",
    description: "Ethereum",
    icon: Icons.ETH,
  },

  {
    title: "DINO",
    description: "Dino",
    icon: Icons.DINO,
  },

  {
    title: "FORTMATIC",
    description: "Fortmatic",
    icon: Icons.FORTMATIC,
  },
  {
    title: "BNB",
    description: "Binance",
    icon: Icons.BNB,
  },
  {
    title: "ETH",
    description: "Ethereum",
    icon: Icons.ETH,
  },

  {
    title: "DINO",
    description: "Dino",
    icon: Icons.DINO,
  },

  {
    title: "FORTMATIC",
    description: "Fortmatic",
    icon: Icons.FORTMATIC,
  },
  {
    title: "BNB",
    description: "Binance",
    icon: Icons.BNB,
  },
  {
    title: "ETH",
    description: "Ethereum",
    icon: Icons.ETH,
  },

  {
    title: "DINO",
    description: "Dino",
    icon: Icons.DINO,
  },

  {
    title: "FORTMATIC",
    description: "Fortmatic",
    icon: Icons.FORTMATIC,
  },
  {
    title: "BNB",
    description: "Binance",
    icon: Icons.BNB,
  },
];
export function ListCoinComponent(props: any) {
  return (
    <Modal
      visible={props.visible ? true : false}
      style={{ right: 0 }}
      title={null}
      footer={null}
      closable={false}
      onCancel={() => {
        props.setVisible("");
      }}
      width={isMobileOnly ? "100%" : "25%"}
    >
      <ICol>
        <h5>Select a token</h5>
        <br />
        <input
          className="box-gray-inner"
          style={{ width: "100%" }}
          placeholder="search name or paste address"
        />
        <br />
        <br />
        <ICol style={{ maxHeight: "60vh", overflow: "auto" }}>
          {items.map((item, index) => {
            return (
              <IRow
                key={index}
                className="pointer"
                style={{ margin: "20px 0px" }}
                onClick={() => {
                  props.setVisible("");
                  if (props.callback) {
                    props.callback(item);
                  }
                }}
              >
                <img src={item.icon} style={{ width: 40 }} />
                <ICol style={{ marginLeft: 20 }}>
                  <span className="bold ">{item.title}</span>
                  <br />
                  <span className="small">{item.description}</span>
                </ICol>
              </IRow>
            );
          })}
        </ICol>
      </ICol>
    </Modal>
  );
}
