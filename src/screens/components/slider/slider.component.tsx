import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ICol, IRow } from "components";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export function SliderComponent() {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse(collapsed: boolean) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }

  return (
    <Sider
      width={320}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ height: "100vh", overflow: "scroll" }}
    >
      <div style={{ width: "100%", height: "100%", padding: 12 }}>
        <IRow style={{ background: "white", height: "100%" }}>
          <ICol>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
            <h1>fdsfdsf</h1>
          </ICol>
        </IRow>
      </div>
      {/* <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu> */}
    </Sider>
  );
}
