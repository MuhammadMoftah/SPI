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
import { Bar, Line } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
  PointElement,
  LineElement
);

defineProps(["footerText", "chartClass"]);

const chartData = {
  labels: ["2017A", "2018A", "2019A", "2020A", "2024A"],
  datasets: [
    {
      type: "line",
      label: "Profit margin",
      borderWidth: 1,
      pointRadius: 5, // Adjust the point radius as needed
      pointStyle: "rect",
      borderColor: "#6B4747", // Set line color to green
      backgroundColor: "#6B4747", // Transparent background
      fill: false,
      data: [35, 31, 30.2, 35.2, 32.7],
      yAxisID: "y1",
      order: 2,

      datalabels: {
        color: "#6B4747",
        anchor: "end",
        align: "end",
        offset: -2,
        font: {
          weight: "bold",
          size: 13,
        },
      },
    },
    {
      type: "bar",
      label: "Profit",
      backgroundColor: "#273D6C",
      borderColor: "#273D6C", // Set line color to green
      barThickness: 60,
      borderWidth: 1,
      data: [46, 43, 44, 45, 43],
      yAxisID: "y",
      order: 2, // Bar chart has a lower order
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
        padding: 10,
        font: {
          size: 11.5,
          weight: "500",
        },
        usePointStyle: true,
      },
    },
    datalabels: {
      formatter: function (value, context) {
        if (context.dataset.label === "Total") {
          return value;
        }
        return value + "%";
      },
      align: "end",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "600",
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
    y1: {
      type: "linear",
      display: false,
      position: "right",
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
      },
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
          size: 13,
        },
      },
    },
  },
};

onMounted(() => {
  // console.log("ref", ctx.value);
  // ctx.value.innerHTML = "test";
});
</script>
