import { useTheme } from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import { de } from "date-fns/locale";
import React from "react";
import { Line } from "react-chartjs-2";
import { TestStrategy } from "../data/Strategies";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";

export const PerformanceCurve = () => {
  const theme = useTheme();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
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
          display: true,
          stepSize: 50,
        },
        grid: {
          color: theme.palette.border + "80",
          drawTicks: false,
        },
      },
      x: {
        type: "time",
        time: {
          unit: "week",
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
        border: {
          display: false,
        },
        ticks: {
          display: true,
        },
        grid: {
          color: theme.palette.border + "80",
        },
      },
    },
    elements: {
      line: {
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, theme.palette.border);
          gradient.addColorStop(1, theme.palette.white.main);
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

  const labels = TestStrategy.overview.series.map((item) => item.date);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.4,
        data: TestStrategy.overview.series.map((item) => item.balance),
        borderColor: theme.palette.primary.main,
      },
    ],
  };
  return <Line options={options} data={data} style={{ height: "40vh" }} />;
};

export default PerformanceCurve;
