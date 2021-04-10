import { Layout, Menu, Typography } from "antd";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";

import { Header } from "screens/pool/main/header";
import "./App.less";
import "styles/index.less";
import { AppRouter, MainRouter, PoolRouter } from "./navigations/routes";
import { AppStack } from "navigations/AppStack";
import { PoolStack } from "navigations/PoolStack";
import { MainStack } from "navigations/MainStack";
import { HomeAppScreen } from "screens/app/home/home.app.screen";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;

function App() {
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
