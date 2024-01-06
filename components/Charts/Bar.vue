<template>
  <section class="grid">
    <!-- dynamic =>> {{ data }} -->
    <!-- dynamic =>> {{ chartData }} -->
    <Bar
      v-if="chartData"
      ref="BarChart"
      :class="chartClass"
      :options="chartOptions"
      :data="chartData"
    />
    <ChartsFooter :text="footerText" />
  </section>
</template>

<script setup>
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

const props = defineProps({
  footerText: {},
  chartClass: {},
  chartData: {},
});

const chartData = computed(() => {
  if (props.chartData && Array.isArray(props.chartData)) {
    return {
      labels: props.chartData.map((el) => el.label),
      datasets: [
        {
          data: props.chartData.map((el) => el.point_value),
        },
      ],
    };
  }
  return { labels: [], datasets: [] };
});

const chartOptions = {
  responsive: true,
  backgroundColor: "#273D6C",
  color: "black",
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
    datalabels: {
      align: "center",
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
      beginAtZero: true, // default true,
      display: false,
      grid: {
        display: false,
      },
    },
    x: {
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
</script>
