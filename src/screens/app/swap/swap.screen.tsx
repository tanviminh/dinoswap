import { Tabs } from "antd";
import { Colors, Images } from "assets";
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
        // background: Colors.PURPLE,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <img
        src={Images.BACKGROUND_2}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      <div style={{ padding: 20 }}>
        <HeaderComponent />
        <br />

        <IRow>
          <ICol xs={24} md={12} lg={10} xl={8} xxl={6}>
            <div className="box-white-outer">
              <UtilsComponent />
            </div>
          </ICol>
        </IRow>
      </div>
    </div>
  );
}
