import { Colors, Icons } from "assets";
import { ICol, IRow } from "components";
import React, { useState } from "react";

export function SettingUtilsComponent(props: any) {
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
          <IRow>
            <h5 style={{ color: Colors.GRAY }}>Slippage tolerance</h5>
            <img src={Icons.QUESTION} style={{ width: 16, marginLeft: 8 }} />
          </IRow>
          <IRow justify="space-between" style={{ marginTop: 10 }}>
            <ICol>
              <div
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  background: Colors.GRAY,
                }}
              >
                <h5 style={{ color: "white" }}>0.1%</h5>
              </div>
            </ICol>
            <ICol>
              <div
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  background: Colors.SECONDARY,
                }}
              >
                <h5 style={{ color: "white" }}>0.1%</h5>
              </div>
            </ICol>
            <ICol>
              <div
                style={{
                  padding: "4px 20px",
                  borderRadius: 100,
                  background: Colors.GRAY,
                }}
              >
                <h5 style={{ color: "white" }}>0.1%</h5>
              </div>
            </ICol>
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
                <h5 style={{ color: "black" }}>0.1%</h5>
              </div>
            </ICol>
          </IRow>
          <br />
          <IRow>
            <h5 style={{ color: Colors.GRAY }}>Transaction deadline</h5>
            <img src={Icons.QUESTION} style={{ width: 16, marginLeft: 8 }} />
          </IRow>
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
                <h5 style={{ color: "black" }}>20</h5>
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
            <IRow>
              <h5 style={{ color: Colors.GRAY }}>Slippage tolerance</h5>
              <img src={Icons.QUESTION} style={{ width: 16, marginLeft: 8 }} />
              <ICol flex="auto" />
              <img src={Icons.TOOGLE_ON} style={{ height: 28 }} />
            </IRow>
            <IRow style={{ marginTop: 10 }}>
              <h5 style={{ color: Colors.GRAY }}>Disable Multihops</h5>
              <img src={Icons.QUESTION} style={{ width: 16, marginLeft: 8 }} />
              <ICol flex="auto" />
              <img src={Icons.TOOGLE_OFF} style={{ height: 28 }} />
            </IRow>
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
