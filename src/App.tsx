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
import { AppRouter, MainRouter, PoolRouter } from "./navigations";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="">
          <Layout>
            <Content>
              <Switch>
                {MainRouter.map((item, index) => {
                  return (
                    <Route
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  );
                })}
                <PoolStack />
              </Switch>
            </Content>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function PoolStack() {
  let history = useHistory();
  let path = history.location.pathname;
  return (
    <Route path="">
      <div id="swap-container">
        <Header pathname={path} />
        <div id="swap-content">
          {PoolRouter.map((item, index) => {
            return (
              <Route
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            );
          })}
        </div>
      </div>
    </Route>
  );
}

export default App;
