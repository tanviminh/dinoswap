import { Tooltip } from "antd";
import { Colors, Icons } from "assets";
import { ICol, IRow } from "components";
import React, { useState } from "react";

export function SettingUtilsComponent(props: any) {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  return (
    <div>
      <IRow>
        <ICol style={{ width: "100%" }}>
          <IRow>
            <ICol>
              <h4>Transaction Settings</h4>
            </ICol>

            <ICol flex="auto" />
            <ICol
              onClick={() => {
                props.close();
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={Icons.CLOSE} style={{ width: 20 }} />
            </ICol>
          </IRow>
          <br />
          <Tooltip
            className="pointer"
            title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
          >
            <IRow>
              <h5 style={{ color: Colors.GRAY }}>Slippage tolerance</h5>
              <img src={Icons.QUESTION} style={{ width: 16, marginLeft: 8 }} />
            </IRow>
          </Tooltip>
          <IRow
            justify="space-between"
            gutter={[8, 8]}
            style={{ marginTop: 10 }}
            wrap={false}
          >
            <ICol span={6}>
              <IRow
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  background: Colors.GRAY,
                }}
                className="pointer"
                justify="center"
              >
                <h5 style={{ color: "white" }}>0.1%</h5>
              </IRow>
            </ICol>
            <ICol span={6}>
              <IRow
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  background: Colors.GRAY,
                }}
                className="pointer"
                justify="center"
              >
                <h5 style={{ color: "white" }}>0.1%</h5>
              </IRow>
            </ICol>
            <ICol span={6}>
              <IRow
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  background: Colors.GRAY,
                }}
                className="pointer"
                justify="center"
              >
                <h5 style={{ color: "white" }}>0.1%</h5>
              </IRow>
            </ICol>
            <ICol span={6}>
              <IRow
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  //   border: "1px solid gray",
                  boxShadow: "inset 1px 1px 4px rgba(0, 0, 0, 0.2)",
                  background: "white",
                  overflow: "hidden",
                }}
                className="pointer"
                justify="center"
                align="middle"
                wrap={false}
              >
                <input
                  className="input-h5"
                  style={{ textAlign: "center", width: 40 }}
                />
                <span className="input-h5">%</span>
              </IRow>
            </ICol>
          </IRow>
          <br />
          <Tooltip
            className="pointer"
            title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
          >
            <IRow>
              <h5 style={{ color: Colors.GRAY }}>Transaction deadline</h5>
              <img src={Icons.QUESTION} style={{ width: 16, marginLeft: 8 }} />
            </IRow>
          </Tooltip>
          <IRow style={{ marginTop: 10 }} align="middle">
            <ICol>
              <div
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  //   border: "1px solid gray",
                  boxShadow: "inset 1px 1px 4px rgba(0, 0, 0, 0.2)",
                  background: "white",
                }}
              >
                <input
                  className="input-h5"
                  style={{ textAlign: "center", width: 40 }}
                />
              </div>
            </ICol>
            <ICol>
              <span style={{ color: Colors.GRAY, marginLeft: 8 }}>minutes</span>
            </ICol>
          </IRow>

          <br />

          <ICol>
            <h4>Interface Settings</h4>
          </ICol>
          <ICol style={{ marginTop: 10 }}>
            <IRow
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Tooltip
                className="pointer"
                title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
              >
                <IRow>
                  <h5 style={{ color: Colors.GRAY }}>Slippage tolerance</h5>
                  <img
                    src={Icons.QUESTION}
                    style={{ width: 16, marginLeft: 8 }}
                  />
                </IRow>
              </Tooltip>

              <ICol flex="auto" />
              <img
                src={toggle ? Icons.TOOGLE_ON : Icons.TOOGLE_OFF}
                style={{ height: 28 }}
              />
            </IRow>
            <Tooltip
              className="pointer"
              title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
            >
              <IRow
                style={{ marginTop: 10 }}
                onClick={() => {
                  setToggle1(!toggle1);
                }}
              >
                <Tooltip
                  className="pointer"
                  title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                >
                  <IRow>
                    <h5 style={{ color: Colors.GRAY }}>Disable Multihops</h5>
                    <img
                      src={Icons.QUESTION}
                      style={{ width: 16, marginLeft: 8 }}
                    />
                  </IRow>
                </Tooltip>

                <ICol flex="auto" />
                <img
                  src={toggle1 ? Icons.TOOGLE_ON : Icons.TOOGLE_OFF}
                  style={{ height: 28 }}
                />
              </IRow>
            </Tooltip>
          </ICol>
        </ICol>
      </IRow>
    </div>
  );
}

function Item(props: any) {
  const { title, icon } = props.data;
  return (
    <div style={{ marginTop: 10 }}>
      <IRow
        style={{
          padding: 10,
          border: "1px solid #E0E0E0",
          borderRadius: 10,
          background: "white",
        }}
      >
        <ICol>
          <span>{title}</span>
        </ICol>
        <ICol flex="auto"></ICol>
        <img src={icon} style={{ width: 20 }} />
      </IRow>
    </div>
  );
}
