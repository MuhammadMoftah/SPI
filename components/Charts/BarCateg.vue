<template>
  <section class="grid">
    <Bar
      ref="BarChart"
      :class="chartClass"
      :options="chartOptions"
      :data="chartData"
    />
    <ChartsFooter :text="footerText" />
  </section>
</template>

<script setup>
const { market_size_1 } = inject("charts");

// console.log(
//   "data ",
//   market_size_1.value.map((el) => el.label)
// );
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

defineProps(["footerText", "chartClass"]);

const chartData = {
  labels: ["2017A", "2018A", "2019A", "2020A", "2024A"],
  datasets: [
    {
      label: "BSB",
      backgroundColor: "#273D6C ", // Set color for category 1
      data: [76, 72, 68, 60, 66], // Replace with your data for category 1
    },
    {
      label: "Labour",
      backgroundColor: "#4266B1", // Set color for category 2
      data: [100, 100, 100, 100, 100], // Replace with your data for category 2
    },
    {
      label: "Taxes",
      backgroundColor: "#769FF5", // Set color for category 3
      data: [120, 130, 125, 135, 115], // Replace with your data for category 3
    },
  ],
};

const chartOptions = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      // position: "bottom",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 7,
        font: {
          size: 12,
          weight: "500",
        },
        usePointStyle: true,
      },
    },
    datalabels: {
      formatter: function (value, context) {
        // Add "%" symbol after each data number
        return value + "%";
      },
      align: "end",
      anchor: "center",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "500",
        size: 13,
      },
    },
  },
  scales: {
    y: {
      type: "linear",
      suggestedMax: 61,
      display: false,
      position: "left",
      beginAtZero: true,
    },
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "black",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  },
};
</script>
