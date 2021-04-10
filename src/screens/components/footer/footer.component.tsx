import { Colors, Images } from "assets";
import { ICol, IRow, ISpace, ITitle } from "components";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./footer.style.less";

export function FooterComponent() {
  return (
    <ICol id="footer" span={24}>
      <div className="footer-container">
        <IRow align="middle">
          <ICol>
            <img id="logo" src={Images.LOGO} />
          </ICol>
          <ICol flex="60px" />
          <ICol flex="auto">
            <span style={{ color: Colors.GRAY }}>
              An automated market-making (AMM) decentralized exchange (DEX)
              {"\n"}
              currently on the Ethereum blockchain
            </span>
          </ICol>
          <ICol flex="auto"></ICol>
          <ICol>
            <h4>Contact us</h4>
            <ISpace size={8}>
              <img className="social" src={Images.FACEBOOK} />
              <img className="social" src={Images.TWITTER} />
              <img className="social" src={Images.TELEGRAM} />
            </ISpace>
          </ICol>
        </IRow>
      </div>
    </ICol>
  );
}
