import { Tabs } from "antd";
import { Colors } from "assets";
import { ICol, IRow } from "components";
import React from "react";
import { HeaderComponent } from "screens/components/header/header.component";
import { UtilsComponent } from "screens/components/utils/utils.component";
const { TabPane } = Tabs;
interface Props {
  setShowWallet: any;
  addLiquidity?: boolean;
}

export function SwapScreen() {
  return (
    <div
      style={{
        width: "100%",
        padding: 24,
        background: Colors.PURPLE,
        minHeight: "100vh",
      }}
    >
      <HeaderComponent />

      <br />
      <IRow>
        <ICol span={8}>
          <div className="box-white-outer">
            <UtilsComponent />
          </div>
        </ICol>
      </IRow>
    </div>
  );
}
