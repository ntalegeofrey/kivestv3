import { useTheme } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

export const HalfDoughnutChart = ({ gdata }) => {
  const theme = useTheme();
  ChartJS.register(ArcElement, Legend);

  const stackedText = {
    id: "stackedText",
    afterDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { top, width, height },
      } = chart;
      ctx.save();
      ctx.font = "bolder 30px san-serif";
      ctx.fillStyle = theme.palette.primary.main;
      ctx.textAlign = "center";
      ctx.fillText(
        data(gdata).datasets[0].data[0] + "%",
        width / 2,
        height / 2 + top
      );
      ctx.restore();
      ctx.font = "bolder 12px sans-serif";
      ctx.fillStyle = theme.palette.text.footnote;
      ctx.textAlign = "center";
      ctx.fillText("Overall account growth", width / 2, height / 2 + top + 40);
    },
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: "94%",
    elements: {
      arc: {
        roundedCornersFor: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = (dt) => {
    return {
      labels: ["growth"],
      datasets: [
        {
          label: "%growth",
          data: dt,
          backgroundColor: [theme.palette.primary.main, theme.palette.border],
          borderWidth: 1,
          borderRadius: 20,
          rotation: -90,
          circumference: 180,
        },
      ],
    };
  };
  const plugins = [stackedText];
  return (
    <Doughnut
      data={data(gdata)}
      options={options}
      plugins={plugins}
      style={{ height: "100%", width: "100%" }}
    />
  );
};
