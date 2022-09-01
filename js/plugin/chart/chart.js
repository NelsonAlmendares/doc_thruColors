// import { pointStyling } from "./config";

import { dataLines } from "./config.js";
import { multiAxisData } from "./config.js";
import { multiAxisOption } from "./config.js";
import { barConfig } from "./config.js";
import { doughnutConfig } from "./config.js";
import { interpolationConfig } from "./config.js";

const lineGraph = document.getElementById("lineChart").getContext("2d");
const lineChat = new Chart(lineGraph, {
  type: "line",
  data: dataLines,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const lineAxisChart = document.getElementById("lineAxisChart").getContext("2d");
const multiAxisChart = new Chart(lineAxisChart, {
  type: "line",
  data: multiAxisData,
  options: multiAxisOption,
});

const barGraph = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(barGraph, {
  type: 'bar',
  data: barConfig,
});

const lineInterpolationGraph = document.getElementById("lineInterpolation").getContext("2d");
const interpolationChart = new Chart(lineInterpolationGraph, {
  type: "line",
  data: interpolationConfig,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  },
});

const doughnutGraph = document.getElementById("doughnutChart").getContext("2d");
const doughnutChart = new Chart(doughnutGraph, {
  type: "doughnut",
  data: doughnutConfig,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Estado de los productos",
      },
    },
  },
});