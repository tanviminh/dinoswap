import { Dropdown, Menu, Tooltip } from "antd";
import { Colors, Icons } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";

const items = [
  {
    title: "ENG",
    icon: Icons.ENG,
  },
  {
    title: "RUS",
    icon: Icons.RUS,
  },
];
export function LanguageComponent(props: any) {
  const [item, setItem] = useState(items[0]);
  const menu = (
    <Menu
      style={{ padding: 10, background: "white", borderRadius: 20, margin: 20 }}
    >
      {items.map((item, index) => {
        return (
          <Menu.Item
            className="pointer"
            onClick={() => {
              setItem(item);
            }}
            style={{ padding: 10 }}
          >
            <ISpace>
              <img src={item.icon} style={{ width: 20, height: 20 }} />
              <span key={index} className="bold">
                {item.title}
              </span>
            </ISpace>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <ISpace
        size={40}
        style={{
          paddingLeft: "30px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <img src={item.icon} style={{ width: 24, cursor: "pointer" }} />

        <span
          className="no-wrap"
          style={{ fontWeight: "bolder", color: Colors.LIGHT_BROWN }}
        >
          {item.title}
        </span>
      </ISpace>
    </Dropdown>
  );
}
