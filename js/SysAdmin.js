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

const donutCtx = document.getElementById("donutChart");
const lineCtx = document.getElementById("lineChart");
new Chart(donutCtx.getContext("2d"), {
  type: "doughnut",
  data: {
    labels: ["Nhẹ", "Trung bình", "Nghiêm trọng", "Rất nghiêm trọng"],
    datasets: [
      {
        data: [25, 35, 28, 12],
        backgroundColor: ["#3498db", "#f39c12", "#e67e22", "#e74c3c"],
        borderWidth: 2,
        borderColor: "#fff",
        hoverOffset: 8,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "65%",
    plugins: {
      legend: {
        display: false, // ẨN LEGEND MẶC ĐỊNH
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 12,
        cornerRadius: 8,
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  },
});

new Chart(lineCtx.getContext("2d"), {
  type: "line",
  data: {
    labels: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
    datasets: [
      {
        label: "Số vụ tràn",
        data: [1, 0, 0, 3, 5, 4, 2, 5, 4, 3, 1, 0], // Dữ liệu mẫu ban đầu
        borderColor: "#00b894",
        backgroundColor: "rgba(0, 184, 148, 0.08)",
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#00b894",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "#00b894",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    interaction: { intersect: false, mode: "index" },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, font: { size: 12 } },
        grid: { color: "#f0f0f0", drawBorder: false },
      },
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { font: { size: 12 } },
      },
    },
  },
});
