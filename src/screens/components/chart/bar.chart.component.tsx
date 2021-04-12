import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Colors } from "assets";
const data = [
  {
    country: "AD",
    CoinBase: 33,
    CoinBaseColor: "hsl(69, 70%, 50%)",
    burger: 16,
    burgerColor: "hsl(254, 70%, 50%)",
    sandwich: 58,
    sandwichColor: "hsl(131, 70%, 50%)",
    kebab: 63,
    kebabColor: "hsl(269, 70%, 50%)",
    fries: 86,
    friesColor: "hsl(24, 70%, 50%)",
    donut: 190,
    donutColor: "hsl(187, 70%, 50%)",
  },
  {
    country: "AE",
    CoinBase: 133,
    CoinBaseColor: "hsl(97, 70%, 50%)",
    burger: 83,
    burgerColor: "hsl(194, 70%, 50%)",
    sandwich: 169,
    sandwichColor: "hsl(127, 70%, 50%)",
    kebab: 120,
    kebabColor: "hsl(84, 70%, 50%)",
    fries: 40,
    friesColor: "hsl(211, 70%, 50%)",
    donut: 124,
    donutColor: "hsl(230, 70%, 50%)",
  },
  {
    country: "AF",
    CoinBase: 57,
    CoinBaseColor: "hsl(161, 70%, 50%)",
    burger: 98,
    burgerColor: "hsl(296, 70%, 50%)",
    sandwich: 157,
    sandwichColor: "hsl(11, 70%, 50%)",
    kebab: 168,
    kebabColor: "hsl(98, 70%, 50%)",
    fries: 64,
    friesColor: "hsl(123, 70%, 50%)",
    donut: 167,
    donutColor: "hsl(264, 70%, 50%)",
  },
  {
    country: "AG",
    CoinBase: 43,
    CoinBaseColor: "hsl(310, 70%, 50%)",
    burger: 84,
    burgerColor: "hsl(271, 70%, 50%)",
    sandwich: 60,
    sandwichColor: "hsl(138, 70%, 50%)",
    kebab: 1,
    kebabColor: "hsl(9, 70%, 50%)",
    fries: 1,
    friesColor: "hsl(222, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(35, 70%, 50%)",
  },
  {
    country: "AI",
    CoinBase: 69,
    CoinBaseColor: "hsl(10, 70%, 50%)",
    burger: 193,
    burgerColor: "hsl(297, 70%, 50%)",
    sandwich: 59,
    sandwichColor: "hsl(181, 70%, 50%)",
    kebab: 79,
    kebabColor: "hsl(116, 70%, 50%)",
    fries: 136,
    friesColor: "hsl(163, 70%, 50%)",
    donut: 171,
    donutColor: "hsl(314, 70%, 50%)",
  },
  {
    country: "AL",
    CoinBase: 171,
    CoinBaseColor: "hsl(284, 70%, 50%)",
    burger: 112,
    burgerColor: "hsl(189, 70%, 50%)",
    sandwich: 132,
    sandwichColor: "hsl(224, 70%, 50%)",
    kebab: 191,
    kebabColor: "hsl(85, 70%, 50%)",
    fries: 8,
    friesColor: "hsl(45, 70%, 50%)",
    donut: 182,
    donutColor: "hsl(66, 70%, 50%)",
  },
  {
    country: "AM",
    CoinBase: 183,
    CoinBaseColor: "hsl(236, 70%, 50%)",
    burger: 35,
    burgerColor: "hsl(126, 70%, 50%)",
    sandwich: 66,
    sandwichColor: "hsl(275, 70%, 50%)",
    kebab: 199,
    kebabColor: "hsl(228, 70%, 50%)",
    fries: 132,
    friesColor: "hsl(103, 70%, 50%)",
    donut: 37,
    donutColor: "hsl(2, 70%, 50%)",
  },
];
export function BarChartComponent() {
  return (
    <ResponsiveBar
      data={data}
      keys={["CoinBase", "burger", "sandwich", "kebab", "fries", "donut"]}
      // margin={{ top: 20, right: 130, bottom: 28, left: 60 }}
      margin={{ top: 50, right: 0, bottom: 0, left: 0 }}
      indexBy="country"
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      //   colors={[Colors.SECONDARY]}
      enableGridY={false}
      enableLabel={false}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={36}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}
