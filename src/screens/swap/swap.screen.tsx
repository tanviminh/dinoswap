import Icon from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import React, { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { SettingUtilsComponent } from "screens/components/utils/setting.utils.component";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";
import { Tooltip } from "antd";
import { Swap } from "screens/components/utils/utils.component";

export function SwapScreen(props: any) {
  const [showWallet, setShowWallet] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  return (
    <div>
      <IRow
        style={{ width: "100%", minHeight: "80vh" }}
        justify="center"
        align="middle"
      >
        <ICol
          xs={24}
          md={12}
          lg={10}
          xl={8}
          xxl={6}
          className="box-white-outer"
        >
          <SwapComponent />
        </ICol>
      </IRow>
    </div>
  );
}

export function SwapComponent() {
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const RATE = 1.2;

  const [showWallet, setShowWallet] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  return (
    <div>
      <IRow
        justify="end"
        onClick={() => {
          setShowSetting(true);
        }}
      >
        <img src={Icons.SET} id="swap-set" />
      </IRow>
      <IRow>
        <h1>Swap</h1>
      </IRow>
      <br />
      <Swap setShowWallet={setShowSetting} />
      <Modal
        visible={showSetting}
        title={null}
        footer={null}
        closable={false}
        onCancel={() => {
          setShowSetting(false);
        }}
        width={isMobileOnly ? "100%" : "25%"}
      >
        <SettingUtilsComponent
          close={() => {
            setShowSetting(false);
          }}
        />
      </Modal>
    </div>
  );
}
