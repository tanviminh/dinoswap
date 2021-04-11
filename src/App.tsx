import { Layout, Menu, Typography } from "antd";
import { AppStack } from "navigations/AppStack";
import { MainStack } from "navigations/MainStack";
import { PoolStack } from "navigations/PoolStack";
import React, { Fragment, useLayoutEffect } from "react";
import { BrowserRouter, Switch, useLocation } from "react-router-dom";
import "styles/index.less";
import "styles/antd.less";
import "./App.less";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;

function App() {
  // const location = useLocation();
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  return (
    <BrowserRouter>
      <Switch>
        <MainStack />
      </Switch>
      <Switch>
        <PoolStack />
      </Switch>

      <Switch>
        <AppStack />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
