"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function ExampleChart() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [2000, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <>
      <Chart
        type="line"
        options={option}
        series={series}
        height={400}
        width={500}
      />
    </>
  );
}
