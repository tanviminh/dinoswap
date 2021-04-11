import { Colors } from "assets";
import { IRow, ISpace } from "components";
import React from "react";
const SIZE = 32;
export function PaginationComponent() {
  return (
    <div>
      <ISpace size={20} align="center">
        <span className="gray">Page</span>
        {[{}, {}, {}, {}, {}].map((item, index) => {
          return <Item data={{ item, index }} />;
        })}
      </ISpace>
    </div>
  );
}

function Item(props: any) {
  const { item, index } = props.data;
  return (
    <IRow
      style={{
        minWidth: SIZE,
        height: SIZE,
        borderRadius: 100,
        backgroundColor: index == 2 ? Colors.SECONDARY : Colors.GRAY,
      }}
      align="middle"
      justify="center"
    >
      <span className="bold white">{index + 1}</span>
    </IRow>
  );
}
