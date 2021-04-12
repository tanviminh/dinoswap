import Layout from "antd/lib/layout/layout";
import { PoolRouter } from "navigations/routes";
import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { Header } from "screens/pool/main/header";

export function PoolStack() {
  let history = useHistory();
  let path = history.location.pathname;
  if (!isRender(path)) {
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

function isRender(path: string) {
  let item = PoolRouter.find((item) => {
    return item.path?.includes(path);
  });

  if (item) {
    return true;
  }
  return false;
}
