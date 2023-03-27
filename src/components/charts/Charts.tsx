import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import "../../style.css"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export function Chart() {
    const products = useSelector<RootState, IProduct[]>(
        (state) => state.products.list
      );
  const labels = products.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Закупочная цена",
        data: products.map((item) => item.purchasePrice),
        backgroundColor: "rgba(251, 0, 54, 0.5)",
      },
      {
        label: "Цена продажи",
        data: products.map((item) => item.sellingPrice),
        backgroundColor: "rgba(10, 87, 220, 0.5)",
      },
    ],
  };

  return (
    <>
      <h1>График анализа цен:</h1>
      <Bar options={options} data={data} className="chart-block" />
    </>
  );
}
