import { useTheme } from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { ethusdt } from "../data/ethusdt";

export const PortfolioOverviewGraph = () => {
  const theme = useTheme();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
  );

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
        grid: {
          color: theme.palette.border + "80",
          drawTicks: false,
        },
      },
      x: {
        border: {
          display: false,
        },
        ticks: {
          display: true,
        },
        grid: {
          color: theme.palette.border + "80",
          borderDash: [8, 4],
        },
      },
    },
    elements: {
      line: {
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 150);
          gradient.addColorStop(0, theme.palette.graph.grey2);
          gradient.addColorStop(1, theme.palette.white.main + "66");
          return gradient;
        },
      },
      point: {
        radius: () => {
          const lastPoint = labels.length - 1;
          const points = [];
          for (let i in labels) {
            if (i === String(lastPoint)) {
              points.push(5);
            } else {
              points.push(0);
            }
          }
          return points;
        },
        pointBackgroundColor: theme.palette.primary.main,
        borderWidth: 3,
        pointBorderColor: theme.palette.grey[400],
        hoverRadius: 6,
      },
    },
  };

  const labels = ethusdt.map((item) => item.Month);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.4,
        data: ethusdt.map((item) => item.Close),
        borderColor: theme.palette.primary.main,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default PortfolioOverviewGraph;
