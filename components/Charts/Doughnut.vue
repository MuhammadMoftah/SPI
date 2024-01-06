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

const props = defineProps(["chartData", "footerText", "chartClass"]);

const chartData = computed(() => {
  if (props.chartData && Array.isArray(props.chartData)) {
    return {
      labels: props.chartData.map((el) => el.label),
      datasets: [
        {
          data: props.chartData.map((el) => el.point_value),
          backgroundColor: ["#457BEE", "#273D6C"],
          borderWidth: 0,
          spacing: 0,
        },
      ],
    };
  }
  return { labels: [], datasets: [] };
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
        size: 13,
      },
    },
  },
});
</script>
