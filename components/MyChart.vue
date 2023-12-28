<template>
  <Bar ref="BarChart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
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
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["2019A", "2020A", "2021A", "2022A", "2024A", "2025A", "2026A"],
        datasets: [
          {
            label: "Market Size",
            data: [374.7, 372, 347.2, 376.5, 406.7, 435.3, 461.8, 489.6],
            borderWidth: 0,
          },
        ],
      },
      chartOptions: {
        responsive: false,
        backgroundColor: "#273D6C",
        color: "black",
        scales: {
          y: {
            beginAtZero: true, // default true,
          },
        },
      },
    };
  },
};
</script>
