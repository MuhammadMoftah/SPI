<template>
  <section class="grid">
    <Doughnut
      ref="DoughnutChart"
      :class="chartClass"
      :options="chartOptions"
      :data="chartData"
    />
    <ChartsFooter :text="footerText" />
  </section>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
// Import necessary elements, controllers, and charts
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
// Register the components
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

defineProps(["footerText", "chartClass"]);

// Chart data
const chartData = ref({
  labels: ["Non-store", "Store-based"],
  datasets: [
    {
      data: [6.1, 93.9],
      backgroundColor: ["#457BEE", "#273D6C"],
      borderWidth: 0,
      spacing: 0,
    },
  ],
});

// Chart options
const chartOptions = ref({
  cutout: "65%",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      align: "center",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",

      font: {
        weight: "bold",
        size: 16,
      },
    },
  },
});
</script>
