import { Layout, Menu } from "antd";
import React from "react";
import { SliderComponent } from "../../components/slider/slider.component";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export function CreatePairScreen() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Layout style={{ minHeight: "100vh" }}>
        <SliderComponent />
        <Layout>
          <Content style={{ background: "yellow" }}></Content>
        </Layout>
      </Layout>
    </div>
  );
}
