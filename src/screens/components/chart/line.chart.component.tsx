import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Colors } from "assets";
const data = [
  {
    id: "japan",
    color: "hsl(117, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 269,
      },
      {
        x: "helicopter",
        y: 294,
      },
      {
        x: "boat",
        y: 232,
      },
      {
        x: "train",
        y: 174,
      },
      {
        x: "subway",
        y: 206,
      },
      {
        x: "bus",
        y: 262,
      },
      {
        x: "car",
        y: 130,
      },
      {
        x: "moto",
        y: 156,
      },
      {
        x: "bicycle",
        y: 195,
      },
      {
        x: "horse",
        y: 122,
      },
      {
        x: "skateboard",
        y: 222,
      },
      {
        x: "others",
        y: 160,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(328, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 205,
      },
      {
        x: "helicopter",
        y: 204,
      },
      {
        x: "boat",
        y: 213,
      },
      {
        x: "train",
        y: 167,
      },
      {
        x: "subway",
        y: 37,
      },
      {
        x: "bus",
        y: 68,
      },
      {
        x: "car",
        y: 111,
      },
      {
        x: "moto",
        y: 16,
      },
      {
        x: "bicycle",
        y: 50,
      },
      {
        x: "horse",
        y: 183,
      },
      {
        x: "skateboard",
        y: 47,
      },
      {
        x: "others",
        y: 290,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(150, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 48,
      },
      {
        x: "helicopter",
        y: 146,
      },
      {
        x: "boat",
        y: 139,
      },
      {
        x: "train",
        y: 160,
      },
      {
        x: "subway",
        y: 239,
      },
      {
        x: "bus",
        y: 41,
      },
      {
        x: "car",
        y: 271,
      },
      {
        x: "moto",
        y: 51,
      },
      {
        x: "bicycle",
        y: 224,
      },
      {
        x: "horse",
        y: 291,
      },
      {
        x: "skateboard",
        y: 136,
      },
      {
        x: "others",
        y: 109,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(33, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 279,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 175,
      },
      {
        x: "train",
        y: 133,
      },
      {
        x: "subway",
        y: 160,
      },
      {
        x: "bus",
        y: 104,
      },
      {
        x: "car",
        y: 53,
      },
      {
        x: "moto",
        y: 201,
      },
      {
        x: "bicycle",
        y: 295,
      },
      {
        x: "horse",
        y: 231,
      },
      {
        x: "skateboard",
        y: 190,
      },
      {
        x: "others",
        y: 150,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(181, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 4,
      },
      {
        x: "helicopter",
        y: 215,
      },
      {
        x: "boat",
        y: 228,
      },
      {
        x: "train",
        y: 262,
      },
      {
        x: "subway",
        y: 286,
      },
      {
        x: "bus",
        y: 223,
      },
      {
        x: "car",
        y: 13,
      },
      {
        x: "moto",
        y: 279,
      },
      {
        x: "bicycle",
        y: 7,
      },
      {
        x: "horse",
        y: 221,
      },
      {
        x: "skateboard",
        y: 209,
      },
      {
        x: "others",
        y: 111,
      },
    ],
  },
];
export function LineChartComponent() {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 100, right: 0, bottom: 0, left: 0 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "nivo" }}
      enablePoints={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
