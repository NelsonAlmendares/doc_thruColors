// Arreglo con las categorías de la tienda
const label = ["Labiales","Lociones","Shampoo","Cremas","Cabello","Higine",];
//Arreglo con los meses del año
const months = ["Enero","Febrero","Marzp","Abril","Mayo","Junio","Julio"];
//Arglo con las marcas que posee la tienda
const marcas = ["Aveeno","Darphin","Jo Malone","Fresh","Bioderma","Nutrogena","Herbal Essense"];

const dataSet1 = [1,3,6,12,4,23,17];
const dataSet2 = [3,5,9,1,21,2,12];

const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];

const lineColors = [
  "rgba(255, 99, 132, 0.7)",
  "rgba(54, 162, 235, 0.7)",
  "rgba(255, 206, 86, 0.7)",
  "rgba(75, 192, 192, 0.7)",
  "rgba(153, 102, 255, 0.7)",
  "rgba(255, 159, 64, 0.7)",
  "rgba(121, 0, 172, 0.7)",
];

const borderLineColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(121, 0, 172, 0.7)",
];

// Función para llenar un gráfico de lineas
const dataLines = {
  labels: label,
  datasets: [
    {
      label: "Categorías",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: lineColors,
      borderColor: borderLineColors,
      borderWidth: 1,
    },
  ],
};
export { dataLines };

// Función para crear un gráfico con varias lineas
const multiAxisData = {
  labels: months,
  datasets: [
    {
      label: "Clientes",
      data: dataSet1,
      yAxisID: "y",
      backgroundColor: lineColors,
      borderColor: borderLineColors,
    },
    {
      label: "Empleados",
      data: dataSet2,
      yAxisID: "y1",
      backgroundColor: lineColors,
      borderColor: borderLineColors,
    },
  ],
};
export {multiAxisData};

// Configuración para fráfico multilineas
const multiAxisOption = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Registros realizados",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",

      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
};
export {multiAxisOption};

// Configuración para el gráfico de barrras
const barConfig = {
  labels: marcas,
  datasets: [
    {
      label: "Darphin",
      data: dataSet1,
      backgroundColor: lineColors
    },
  ],
};
export {barConfig};

// Configuración para un gráfico de lines interpoladas
const interpolationConfig = {
  labels: label,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: lineColors,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: lineColors,
      fill: false,
      tension: 0.4
    }, {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: lineColors,
      fill: false
    }
  ]
};
export {interpolationConfig};

// Configuración del 
const doughnutConfig = {
  labels: ["Almacén", "Bodega", "No encontrados"],
  datasets: [
    {
      label: "Dataset 1",
      data: [45,26,2],
      backgroundColor: lineColors,
    },
  ],
};
export {doughnutConfig};