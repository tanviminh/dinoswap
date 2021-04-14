import Icon from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import { values } from "lodash";
import React, { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { ConnectWalletScreen } from "screens/components/utils/connect.wallet.screen";
import { Liquidity } from "screens/components/utils/utils.component";
import { ModifierFlags } from "typescript";

export function AddLiquidityScreen(props: any) {
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
          <Content />
        </ICol>
      </IRow>
    </div>
  );
}

function Content() {
  const [showWallet, setShowWallet] = useState(false);

  const RATE = 100.54543;
  let history = useHistory();
  return (
    <div>
      <IRow style={{ width: "100%" }}>
        <ICol span={24}>
          <IRow>
            <ICol
              onClick={() => {
                history.goBack();
              }}
            >
              <img src={Icons.BACK} id="swap-set" />
            </ICol>
            <ICol flex="auto"></ICol>
            <ICol>{/* <img src={Icons.SET} id="swap-set" /> */}</ICol>
          </IRow>
          <IRow>
            <h1>Add Liquidity</h1>
          </IRow>
          <br />
          <Liquidity setShowWallet={setShowWallet} />
        </ICol>
      </IRow>
      <Modal
        visible={showWallet}
        title={null}
        footer={null}
        closable={false}
        onCancel={() => {
          setShowWallet(false);
        }}
        width={isMobileOnly ? "100%" : "25%"}
      >
        <ConnectWalletScreen
          close={() => {
            setShowWallet(false);
          }}
        />
      </Modal>
    </div>
  );
}
