import { AppRouter } from "navigations/routes";
import React from "react";
import { Layout } from "antd";
import { Route, useHistory, Switch } from "react-router-dom";
import { SliderComponent } from "screens/components/slider/slider.component";
const { Content } = Layout;

export function AppStack() {
  let history = useHistory();
  let path = history.location.pathname;
  return (
    <div>
      <Layout>
        <SliderComponent />
        <Layout>
          <Switch>
            {AppRouter.map((item: any, index: any) => {
              return (
                <Route
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              );
            })}
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
}
