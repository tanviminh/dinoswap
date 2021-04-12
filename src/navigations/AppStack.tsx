import { AppRouter } from "navigations/routes";
import React from "react";
import { Layout } from "antd";
import { Route, useHistory, Switch } from "react-router-dom";
import { SliderComponent } from "screens/components/slider/slider.component";
const { Content } = Layout;

export function AppStack() {
  let history = useHistory();
  let path = history.location.pathname;
  if (!isRender(path)) {
    return null;
  }
  return (
    <div>
      <Layout>
        <SliderComponent />
        <Layout style={{ minWidth: 300 }}>
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

function isRender(path: string) {
  let item = AppRouter.find((item) => {
    return item.path?.includes(path);
  });

  if (item) {
    return true;
  }
  return false;
}
