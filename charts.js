// Function to create a random chart with specified type and data
function createChart(chartId, chartType, chartData, chartOptions) {
  const ctx = document.getElementById(chartId).getContext("2d");
  new Chart(ctx, {
    type: chartType,
    data: chartData,
    options: chartOptions,
  });
}

// Data and options for 6 random charts
const chartData1 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#ff6384",
        "#36a2eb",
        "#ffce56",
        "#4bc0c0",
        "#9966ff",
        "#ff9f40",
      ],
      borderColor: [
        "#ff6384",
        "#36a2eb",
        "#ffce56",
        "#4bc0c0",
        "#9966ff",
        "#ff9f40",
      ],
      borderWidth: 1,
    },
  ],
};

const chartData2 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const chartData3 = {
  labels: ["North", "South", "East", "West"],
  datasets: [
    {
      label: "Population",
      data: [300, 450, 100, 150],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      borderColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      borderWidth: 1,
    },
  ],
};

const chartData4 = {
  labels: ["Product A", "Product B", "Product C"],
  datasets: [
    {
      label: "Revenue",
      data: [4000, 3000, 2000],
      backgroundColor: ["#36a2eb", "#ff6384", "#ff9f40"],
      borderColor: ["#36a2eb", "#ff6384", "#ff9f40"],
      borderWidth: 1,
    },
  ],
};

const chartData5 = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Expenses",
      data: [500, 700, 400, 600],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ],
};

const chartData6 = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "Hours Worked",
      data: [8, 7.5, 8, 6.5, 8],
      backgroundColor: "#9966ff",
      borderColor: "#9966ff",
      borderWidth: 1,
    },
  ],
};

// Creating charts with random data and different types
createChart("chart1", "bar", chartData1);
createChart("chart2", "line", chartData2);
createChart("chart3", "pie", chartData3);
createChart("chart4", "doughnut", chartData4);
createChart("chart5", "polarArea", chartData5);
createChart("chart6", "radar", chartData6);
