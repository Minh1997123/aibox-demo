const sysAdminDashboard = document.getElementById("dashboard-SysAdmin");
const sysAdmin = document.getElementById("SysAdmin");
const aiModelSpeedCtx1 = document.getElementById("aiModelSpeedChart1");
const aiModelAccuracyCtx1 = document.getElementById("aiModelAccuracyChart1");
const systemStatusPieCtx1 = document.getElementById("systemStatusPieChart");
new Chart(aiModelAccuracyCtx1, {
  type: "bar",
  data: aiModelAccuracyChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } },
  },
});
new Chart(aiModelSpeedCtx1, {
  type: "bar",
  data: aiModelSpeedChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } },
  },
});
new Chart(systemStatusPieCtx1, {
  type: "pie",
  data: systemStatusPieData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
