<template>
  <section class="grid gap-6 ">
    <Bar ref="BarChart" :options="chartOptions" :data="chartData" />
    <ChartsFooter :text="'Market size (SAR bn), 2019A-26F'" />
  </section>
</template>


<script setup>
import { Bar } from "vue-chartjs";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);



const chartData = {
  labels: ["2019A", "2020A", "2021A", "2022A", "2024A", "2025A", "2026A"],
  datasets: [
    {
      label: "Market Size",
      data: [374.7, 372, 347.2, 376.5, 406.7, 435.3, 461.8, 489.6],
      borderWidth: 0,
    },
  ],
}
const chartOptions = {
  responsive: true,
  backgroundColor: "#273D6C",
  color: "black",
  plugins: {
    legend: {
      display: false // Hides the legend
    },

    datalabels: {
      align: 'center',
      anchor: 'top',
      color: 'white',
      indexLabels: {
        display: false, // Hide default index labels
      },
      font: {
        weight: 'bold',

        size: 20,
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true, // default true,
      display: false,
      grid: {
        display: false
      },
    },
    x: {
      // display: false,
      grid: {
        display: false
      },
      ticks: {
        color: 'black',
        font: {
          weight: 'bold', // Make the Y-axis font bold
          size: 15
        },
      },
    }
  },
}



</script>