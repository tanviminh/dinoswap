import Modal from "antd/lib/modal/Modal";
import { Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ConnectWalletScreen } from "screens/wallet/connect.wallet.screen";
export function HeaderComponent(props: any) {
  let history = useHistory();
  const [showWallet, setShowWallet] = useState(false);

  return (
    <div>
      <IRow gutter={[24, 0]} align="middle" wrap={false}>
        <ICol flex="auto"></ICol>

        <ICol>
          <ISpace size={24}>
            <div
              className="button"
              onClick={() => {
                setShowWallet(true);
              }}
            >
              <img src={Icons.WALLET} style={{ width: 20, marginRight: 12 }} />
              Wallet
            </div>
            <img id="avatar" src={Images.AVATAR} />
          </ISpace>
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
        width={"25%"}
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
