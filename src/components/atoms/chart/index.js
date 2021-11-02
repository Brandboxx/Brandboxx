import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 50],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

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
      display: false,
    },
  },
};

const Chart = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export { Chart };
