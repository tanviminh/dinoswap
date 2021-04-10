import Layout from "antd/lib/layout/layout";
import { AppRouter, MainRouter } from "navigations/routes";
import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";

export function MainStack() {
  let history = useHistory();
  let path = history.location.pathname;
  return (
    <div>
      <Switch>
        {MainRouter.map((item: any, index: any) => {
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
  );
}
