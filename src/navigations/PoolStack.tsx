import Layout from "antd/lib/layout/layout";
import { PoolRouter } from "navigations/routes";
import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { Header } from "screens/pool/main/header";

export function PoolStack() {
  let history = useHistory();
  let path = history.location.pathname;
  if (!path.includes("pool") && !path.includes("swap")) {
    return null;
  }
  return (
    <div>
      <div id="swap-container">
        <div id="swap-content">
          <Header pathname={path} />
          <Switch>
            {PoolRouter.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
}
