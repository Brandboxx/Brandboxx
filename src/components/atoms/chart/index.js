import React from "react";
import { Line } from "react-chartjs-2";
import { useGetResquest } from "../../../api/useRequestProcessor";

const weeklyLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthlyLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
const data = (data, duration) => ({
  labels: duration ? weeklyLabel : monthlyLabel,
  datasets: [
    {
      label: duration ? "Weekly Transaction" : "Monthly Transaction",
      data,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
});

let options = {
  legend: {
    display: false,
  },
  scales: {
    xAxis: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    y: {
      display: true,
    },
  },
};

const Chart = ({ duration }) => {

  const { data: chartData } = useGetResquest(
    `/users/chart${duration ? "" : '?interval=monthly'}`,
    "chart-data"
  );

  console.log({ chartData, duration })

  return (
    <div style={{ marginTop: "30px" }}>
      <Line options={options} data={data(chartData?.data, duration)} />
    </div>
  );
};

export { Chart };
