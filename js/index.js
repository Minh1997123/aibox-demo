// =========================
// DỮ LIỆU CHI TIẾT SAMPLE
// =========================
const detailData = {
  "Tuần 1": [
    {
      code: "PPE-2001",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hồ Chí Minh",
      staff: "NV-1025",
    },
    {
      code: "PPE-2003",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hà Nội",
      staff: "NV-1025",
    },
    {
      code: "PPE-2002",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hà Nội",
      staff: "NV-1025",
    },
  ],
  "Tuần 2": [
    {
      code: "PPE-2001",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hồ Chí Minh",
      staff: "NV-1025",
    },
    {
      code: "PPE-2003",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hà Nội",
      staff: "NV-1025",
    },
    {
      code: "PPE-2002",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hồ Chí Minh",
      staff: "NV-1025",
    },
  ],
  "Tuần 3": [
    {
      code: "PPE-2001",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hà Nội",
      staff: "NV-1025",
    },
    {
      code: "PPE-2003",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hồ Chí Minh",
      staff: "NV-1025",
    },
    {
      code: "PPE-2002",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hà Nội",
      staff: "NV-1025",
    },
  ],
  "Tuần 4": [
    {
      code: "PPE-3001",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hồ Chí Minh",
      staff: "NV-1025",
    },
    {
      code: "PPE-5003",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hà Nội",
      staff: "NV-1025",
    },
    {
      code: "PPE-5002",
      type: "Không mũ bảo hộ",
      aibox: "AIBox-001",
      camera: "Camera-001",
      time: "10:15:00",
      area: "Khu vực kho",
      branch: "Hồ Chí Minh",
      staff: "NV-1025",
    },
  ],
};

// =========================
// HÀM RENDER BẢNG CHI TIẾT
// =========================
function renderDetailTable(list) {
  const tbody = document.getElementById("detailTableBody");

  tbody.innerHTML = ""; // Xóa bảng cũ

  if (!list || list.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:10px;">Không có dữ liệu</td>
            </tr>
        `;
    return;
  }

  list.forEach((item) => {
    tbody.innerHTML += `
            <tr>
                <td>${item.code}</td>
                <td>${item.type}</td>
                <td>${item.aibox}</td>
                <td>${item.camera}</td>
                <td>${item.time}</td>
                <td>${item.area}</td>
                <td>${item.branch}</td>
                <td>${item.staff}</td>
            </tr>
        `;
  });
}

// =========================
// BIỂU ĐỒ SỰ KIỆN
// =========================
let eventOverviewChart;

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("eventOverviewSelect");

  function loadEventOverviewChart(type) {
    let labels = [];
    let values = [];

    if (type === "day") {
      labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
      values = [5, 9, 3, 4, 8, 6, 10];
    } else if (type === "week") {
      labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
      values = [40, 32, 55, 20];
    } else {
      labels = [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12",
      ];
      values = [120, 90, 150, 80, 160, 120, 200, 150, 180, 190, 210, 220];
    }

    const ctx = document.getElementById("eventOverviewChart").getContext("2d");

    // Xóa chart cũ
    if (eventOverviewChart) {
      eventOverviewChart.destroy();
    }

    // Vẽ biểu đồ mới
    eventOverviewChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sự kiện",
            data: values,
            backgroundColor: "rgba(0, 123, 255, 0.6)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
        // ========================
        // CLICK VÀO CỘT BIỂU ĐỒ
        // ========================
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = this.data.labels[index]; // Ví dụ: "Tuần 1"

            console.log("Bạn đã click:", label);

            const list = detailData[label] || [];
            renderDetailTable(list);
          }
        },

        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // Khi đổi select
  select.addEventListener("change", function () {
    loadEventOverviewChart(this.value);
  });

  // Load mặc định theo tháng
  loadEventOverviewChart("month");
});

// =========================
// DỮ LIỆU CHI TIẾT HÀNG RÀO ẢO
// =========================
const virtualFenceDetailData = {
  "Tuần 1": [
    {
      code: "SEC-3001",
      type: "Xâm nhập khu vực cấm",
      aibox: "AIBox-002",
      camera: "CAMERA-002",
      time: "14:03:00",
      area: "Công sau",
      branch: "Hà Nội",
      severity: "Rất nghiêm trọng",
    },
    {
      code: "SEC-3002",
      type: "Phát hiện đối tượng lạ",
      aibox: "AIBox-001",
      camera: "CAMERA-001",
      time: "11:55:00",
      area: "Bãi xe",
      branch: "TP.HCM",
      severity: "Nghiêm trọng",
    },
  ],
  "Tuần 2": [
    {
      code: "SEC-3003",
      type: "Xâm nhập khu vực cấm",
      aibox: "AIBox-003",
      camera: "CAMERA-003",
      time: "09:20:00",
      area: "Khu vực hạn chế",
      branch: "Đà Nẵng",
      severity: "Nghiêm trọng",
    },
  ],
  "Tuần 3": [
    {
      code: "SEC-3004",
      type: "Phát hiện đối tượng lạ",
      aibox: "AIBox-004",
      camera: "CAMERA-004",
      time: "16:15:00",
      area: "Cổng chính",
      branch: "Hà Nội",
      severity: "Trung bình",
    },
  ],
  "Tuần 4": [
    {
      code: "SEC-3005",
      type: "Xâm nhập khu vực cấm",
      aibox: "AIBox-002",
      camera: "CAMERA-002",
      time: "13:45:00",
      area: "Công sau",
      branch: "TP.HCM",
      severity: "Rất nghiêm trọng",
    },
  ],
};

// =========================
// HÀM RENDER BẢNG CHI TIẾT HÀNG RÀO ẢO
// =========================
function renderVirtualFenceDetailTable(list) {
  const tbody = document.getElementById("virtualFenceDetailTableBody");

  tbody.innerHTML = ""; // Xóa bảng cũ

  if (!list || list.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:10px;">Không có dữ liệu</td>
            </tr>
        `;
    return;
  }

  list.forEach((item) => {
    const severityClass =
      item.severity === "Rất nghiêm trọng"
        ? "text-danger"
        : item.severity === "Nghiêm trọng"
        ? "text-warning"
        : "text-info";
    tbody.innerHTML += `
            <tr>
                <td><strong>${item.code}</strong></td>
                <td>${item.type}</td>
                <td>${item.aibox}</td>
                <td>${item.camera}</td>
                <td>${item.time}</td>
                <td>${item.area}</td>
                <td>${item.branch}</td>
                <td><span class="${severityClass}">${item.severity}</span></td>
                <td>
            </tr>
        `;
  });
}

// =========================
// BIỂU ĐỒ HÀNG RÀO ẢO
// =========================
let virtualFenceChart;

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("virtualFenceSelect");

  function loadVirtualFenceChart(type) {
    let labels = [];
    let values = [];

    if (type === "day") {
      labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
      values = [3, 5, 2, 6, 4, 7, 5];
    } else if (type === "week") {
      labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
      values = [16, 12, 18, 14];
    } else {
      labels = [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12",
      ];
      values = [85, 70, 95, 60, 110, 80, 120, 95, 130, 115, 140, 125];
    }

    const ctx = document.getElementById("virtualFenceChart");
    if (!ctx) return;

    const ctxContext = ctx.getContext("2d");

    // Xóa chart cũ
    if (virtualFenceChart) {
      virtualFenceChart.destroy();
    }

    // Vẽ biểu đồ mới
    virtualFenceChart = new Chart(ctxContext, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sự kiện hàng rào ảo",
            data: values,
            backgroundColor: "rgba(220, 53, 69, 0.6)",
            borderColor: "rgba(220, 53, 69, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
        // ========================
        // CLICK VÀO CỘT BIỂU ĐỒ
        // ========================
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = this.data.labels[index]; // Ví dụ: "Tuần 1"

            console.log("Bạn đã click vào:", label);

            const list = virtualFenceDetailData[label] || [];
            renderVirtualFenceDetailTable(list);
          }
        },

        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // Khi đổi select
  if (select) {
    select.addEventListener("change", function () {
      loadVirtualFenceChart(this.value);
    });

    // Load mặc định theo tháng
    loadVirtualFenceChart("month");
  }
});

// =========================
// DỮ LIỆU CHI TIẾT BÁO CHÁY
// =========================
const fireAlertDetailData = {
  "Tuần 1": [
    {
      code: "#FC2025001",
      camera: "CAM-A2-01",
      aibox: "AIBox-HN-03",
      branch: "Hà Nội",
      area: "Kho hàng A2",
      severity: "Rất nghiêm trọng",
      time: "19/11/2025 14:23",
    },
    {
      code: "#FC2025002",
      camera: "CAM-B3-02",
      aibox: "AIBox-HN-04",
      branch: "Hà Nội",
      area: "Khu vực sản xuất",
      severity: "Nghiêm trọng",
      time: "19/11/2025 10:15",
    },
  ],
  "Tuần 2": [
    {
      code: "#FC2025003",
      camera: "CAM-C1-01",
      aibox: "AIBox-HCM-01",
      branch: "TP.HCM",
      area: "Kho hàng C1",
      severity: "Nghiêm trọng",
      time: "18/11/2025 09:30",
    },
    {
      code: "#FC2025004",
      camera: "CAM-A1-03",
      aibox: "AIBox-HN-02",
      branch: "Hà Nội",
      area: "Cổng chính",
      severity: "Trung bình",
      time: "18/11/2025 16:45",
    },
  ],
  "Tuần 3": [
    {
      code: "#FC2025005",
      camera: "CAM-DN-01",
      aibox: "AIBox-DN-01",
      branch: "Đà Nẵng",
      area: "Văn phòng",
      severity: "Nghiêm trọng",
      time: "17/11/2025 11:20",
    },
  ],
  "Tuần 4": [
    {
      code: "#FC2025006",
      camera: "CAM-A2-02",
      aibox: "AIBox-HN-03",
      branch: "Hà Nội",
      area: "Kho hàng A2",
      severity: "Rất nghiêm trọng",
      time: "16/11/2025 13:50",
    },
    {
      code: "#FC2025007",
      camera: "CAM-B1-01",
      aibox: "AIBox-HCM-02",
      branch: "TP.HCM",
      area: "Khu vực kho",
      severity: "Nghiêm trọng",
      time: "16/11/2025 15:30",
    },
  ],
};

// =========================
// HÀM RENDER BẢNG CHI TIẾT BÁO CHÁY
// =========================
function renderFireAlertDetailTable(list) {
  const tbody = document.getElementById("fireAlertDetailTableBody");

  tbody.innerHTML = ""; // Xóa bảng cũ

  if (!list || list.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align:center; padding:10px;">Không có dữ liệu</td>
            </tr>
        `;
    return;
  }

  list.forEach((item) => {
    const severityClass =
      item.severity === "Rất nghiêm trọng"
        ? "text-danger"
        : item.severity === "Nghiêm trọng"
        ? "text-warning"
        : "text-info";
    tbody.innerHTML += `
            <tr>
                <td><strong>${item.code}</strong></td>
                <td>${item.camera}</td>
                <td>${item.aibox}</td>
                <td>${item.branch}</td>
                <td>${item.area}</td>
                <td><span class="${severityClass}">${item.severity}</span></td>
                <td>${item.time}</td>
            </tr>
        `;
  });
}

// =========================
// BIỂU ĐỒ BÁO CHÁY
// =========================
let fireAlertChart;

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("fireAlertSelect");

  function loadFireAlertChart(type) {
    let labels = [];
    let values = [];

    if (type === "day") {
      labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
      values = [2, 4, 1, 3, 2, 5, 3];
    } else if (type === "week") {
      labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
      values = [12, 9, 7, 14];
    } else {
      labels = [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12",
      ];
      values = [45, 38, 52, 41, 58, 47, 63, 55, 71, 68, 76, 82];
    }

    const ctx = document.getElementById("fireAlertChart");
    if (!ctx) return;

    const ctxContext = ctx.getContext("2d");

    // Xóa chart cũ
    if (fireAlertChart) {
      fireAlertChart.destroy();
    }

    // Vẽ biểu đồ mới
    fireAlertChart = new Chart(ctxContext, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sự kiện báo cháy",
            data: values,
            backgroundColor: "rgba(255, 152, 0, 0.6)",
            borderColor: "rgba(255, 152, 0, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
        // ========================
        // CLICK VÀO CỘT BIỂU ĐỒ
        // ========================
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = this.data.labels[index]; // Ví dụ: "Tuần 1"

            console.log("Bạn đã click vào:", label);

            const list = fireAlertDetailData[label] || [];
            renderFireAlertDetailTable(list);
          }
        },

        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // Khi đổi select
  if (select) {
    select.addEventListener("change", function () {
      loadFireAlertChart(this.value);
    });

    // Load mặc định theo tháng
    loadFireAlertChart("month");
  }
});

// =========================
// DỮ LIỆU CHI TIẾT TRÀN DẦU KHO
// =========================
const warehouseOilSpillDetailData = {
  "Tuần 1": [
    {
      code: "OSK-2025-001",
      type: "Tràn dầu xăng",
      aibox: "AIBox-HCM-01",
      camera: "CAM-K01-03",
      time: "14:03:00",
      area: "Kho 01 - Xăng",
      branch: "TP.HCM",
      severity: "Rất nghiêm trọng",
      amount: "5.2L",
    },
    {
      code: "OSK-2025-002",
      type: "Tràn dầu diesel",
      aibox: "AIBox-HN-02",
      camera: "CAM-K02-01",
      time: "11:55:00",
      area: "Kho 02 - Dầu Diesel",
      branch: "Hà Nội",
      severity: "Nghiêm trọng",
      amount: "3.8L",
    },
  ],
  "Tuần 2": [
    {
      code: "OSK-2025-003",
      type: "Tràn dầu DO",
      aibox: "AIBox-DN-01",
      camera: "CAM-K03-02",
      time: "09:20:00",
      area: "Kho 03 - Dầu DO",
      branch: "Đà Nẵng",
      severity: "Nghiêm trọng",
      amount: "2.5L",
    },
  ],
  "Tuần 3": [
    {
      code: "OSK-2025-004",
      type: "Tràn dầu xăng",
      aibox: "AIBox-HCM-02",
      camera: "CAM-K01-01",
      time: "16:15:00",
      area: "Kho 01 - Xăng",
      branch: "TP.HCM",
      severity: "Trung bình",
      amount: "1.8L",
    },
  ],
  "Tuần 4": [
    {
      code: "OSK-2025-005",
      type: "Tràn dầu diesel",
      aibox: "AIBox-HN-03",
      camera: "CAM-K02-02",
      time: "13:45:00",
      area: "Kho 02 - Dầu Diesel",
      branch: "Hà Nội",
      severity: "Rất nghiêm trọng",
      amount: "6.1L",
    },
  ],
};

// =========================
// HÀM RENDER BẢNG CHI TIẾT TRÀN DẦU KHO
// =========================
function renderWarehouseOilSpillDetailTable(list) {
  const tbody = document.getElementById("warehouseOilSpillDetailTableBody");

  tbody.innerHTML = ""; // Xóa bảng cũ

  if (!list || list.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:10px;">Không có dữ liệu</td>
            </tr>
        `;
    return;
  }

  list.forEach((item) => {
    const severityClass =
      item.severity === "Rất nghiêm trọng"
        ? "text-danger"
        : item.severity === "Nghiêm trọng"
        ? "text-warning"
        : "text-info";
    tbody.innerHTML += `
            <tr>
                <td><strong>${item.code}</strong></td>
                <td>${item.type}</td>
                <td>${item.aibox}</td>
                <td>${item.camera}</td>
                <td>${item.time}</td>
                <td>${item.area}</td>
                <td>${item.branch}</td>
                <td><span class="${severityClass}">${item.severity}</span></td>
            </tr>
        `;
  });
}

// =========================
// BIỂU ĐỒ TRÀN DẦU KHO
// =========================
let warehouseOilSpillChart;

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("warehouseOilSpillSelect");

  function loadWarehouseOilSpillChart(type) {
    let labels = [];
    let values = [];

    if (type === "day") {
      labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
      values = [1, 2, 0, 1, 1, 2, 1];
    } else if (type === "week") {
      labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
      values = [8, 5, 4, 6];
    } else {
      labels = [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12",
      ];
      values = [28, 22, 35, 18, 42, 31, 48, 39, 56, 52, 64, 58];
    }

    const ctx = document.getElementById("warehouseOilSpillChart");
    if (!ctx) return;

    const ctxContext = ctx.getContext("2d");

    // Xóa chart cũ
    if (warehouseOilSpillChart) {
      warehouseOilSpillChart.destroy();
    }

    // Vẽ biểu đồ mới
    warehouseOilSpillChart = new Chart(ctxContext, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sự kiện tràn dầu kho",
            data: values,
            backgroundColor: "rgba(0, 188, 212, 0.6)",
            borderColor: "rgba(0, 188, 212, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
        // ========================
        // CLICK VÀO CỘT BIỂU ĐỒ
        // ========================
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = this.data.labels[index]; // Ví dụ: "Tuần 1"

            console.log("Bạn đã click vào:", label);

            const list = warehouseOilSpillDetailData[label] || [];
            renderWarehouseOilSpillDetailTable(list);
          }
        },

        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // Khi đổi select
  if (select) {
    select.addEventListener("change", function () {
      loadWarehouseOilSpillChart(this.value);
    });

    // Load mặc định theo tháng
    loadWarehouseOilSpillChart("month");
  }
});

// =========================
// DỮ LIỆU TRÀN DẦU XE TRA NẠP
// =========================
const vehicleOilSpillDetailData = {
  "Tuần 1": [
    {
      code: "OXV-2025-006",
      licensePlate: "43C-77889",
      camera: "CAM-M03-02",
      area: "AIBox-M03",
      time: "09:50:00",
      branch: "Đà Nẵng",
      severity: "Trung bình",
    },
    {
      code: "OXV-2025-006",
      licensePlate: "43C-77889",
      camera: "CAM-M03-02",
      area: "AIBox-M03",
      time: "09:50:00",
      branch: "Đà Nẵng",
      severity: "Trung bình",
    },
  ],
  "Tuần 2": [
    {
      code: "OXV-2025-006",
      licensePlate: "43C-77889",
      camera: "CAM-M03-02",
      area: "AIBox-M03",
      time: "09:50:00",
      branch: "Đà Nẵng",
      severity: "Trung bình",
    },
    {
      code: "OXV-2025-006",
      licensePlate: "43C-77889",
      camera: "CAM-M03-02",
      area: "AIBox-M03",
      time: "09:50:00",
      branch: "Đà Nẵng",
      severity: "Trung bình",
    },
  ],
  "Tuần 3": [
    {
      code: "OXV-2025-006",
      licensePlate: "43C-77889",
      camera: "CAM-M03-02",
      area: "AIBox-M03",
      time: "09:50:00",
      branch: "Đà Nẵng",
      severity: "Trung bình",
    },
  ],
  "Tuần 4": [
    {
      code: "OXV-2025-006",
      licensePlate: "43C-77889",
      camera: "CAM-M03-02",
      area: "AIBox-M03",
      time: "09:50:00",
      branch: "Đà Nẵng",
      severity: "Trung bình",
    },
  ],
};

// =========================
// HÀM RENDER BẢNG CHI TIẾT TRÀN DẦU XE TRA NẠP
// =========================
function renderVehicleOilSpillDetailTable(list) {
  const tbody = document.getElementById("vehicleOilSpillDetailTableBody");

  tbody.innerHTML = ""; // Xóa bảng cũ

  if (!list || list.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:10px;">Không có dữ liệu</td>
            </tr>
        `;
    return;
  }

  list.forEach((item) => {
    const severityClass =
      item.severity === "Rất nghiêm trọng"
        ? "text-danger"
        : item.severity === "Nghiêm trọng"
        ? "text-warning"
        : "text-info";
    tbody.innerHTML += `
            <tr>
                <td><strong>${item.code}</strong></td>
                <td>${item.licensePlate}</td>
                <td>${item.camera}</td>
                <td>${item.area}</td>
                <td>${item.branch}</td>
                <td>${item.time}</td>
                <td><span class="${severityClass}">${item.severity}</span></td>
            </tr>
        `;
  });
}

// =========================
// BIỂU ĐỒ TRÀN DẦU XE TRA NẠP
// =========================
let vehicleOilSpillChart;

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("vehicleOilSpillSelect");

  function loadVehicleOilSpillChart(type) {
    let labels = [];
    let values = [];

    if (type === "day") {
      labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
      values = [2, 1, 3, 2, 1, 2, 0];
    } else if (type === "week") {
      labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
      values = [12, 8, 6, 5];
    } else {
      labels = [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12",
      ];
      values = [32, 28, 41, 25, 38, 36, 52, 44, 48, 56, 52, 62];
    }

    const ctx = document.getElementById("vehicleOilSpillChart");
    if (!ctx) return;

    const ctxContext = ctx.getContext("2d");

    // Xóa chart cũ
    if (vehicleOilSpillChart) {
      vehicleOilSpillChart.destroy();
    }

    // Vẽ biểu đồ mới
    vehicleOilSpillChart = new Chart(ctxContext, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sự kiện tràn dầu xe tra nạp",
            data: values,
            backgroundColor: "rgba(76, 175, 80, 0.6)",
            borderColor: "rgba(76, 175, 80, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
        // ========================
        // CLICK VÀO CỘT BIỂU ĐỒ
        // ========================
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = this.data.labels[index]; // Ví dụ: "Tuần 1"

            console.log("Bạn đã click vào:", label);

            const list = vehicleOilSpillDetailData[label] || [];
            renderVehicleOilSpillDetailTable(list);
          }
        },

        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // Khi đổi select
  if (select) {
    select.addEventListener("change", function () {
      loadVehicleOilSpillChart(this.value);
    });

    // Load mặc định theo tháng
    loadVehicleOilSpillChart("month");
  }
});

// =========================
// DỮ LIỆU BIỂN SỐ XE (LPR)
// =========================
const lprDetailData = {
  "Tuần 1": [
    {
      code: "LPR-1001",
      licensePlate: "AIBox-01",
      violationType: "Hồ Chí Minh",
      camera: "CAM-01",
      location: "51H-123.45",
      time: "08:01:00",
      branch: "Vào",
    },
    {
      code: "LPR-1021",
      licensePlate: "AIBox-01",
      violationType: "Hồ Chí Minh",
      camera: "CAM-01",
      location: "51H-123.45",
      time: "08:01:00",
      branch: "Ra",
    },
  ],
  "Tuần 2": [
    {
      code: "LPR-1051",
      licensePlate: "AIBox-01",
      violationType: "Hồ Chí Minh",
      camera: "CAM-01",
      location: "51H-123.45",
      time: "08:01:00",
      branch: "Vào",
    },
    {
      code: "LPR-1031",
      licensePlate: "AIBox-01",
      violationType: "Hồ Chí Minh",
      camera: "CAM-01",
      location: "51H-123.45",
      time: "08:01:00",
      branch: "Ra",
    },
  ],
  "Tuần 3": [
    {
      code: "LPR-2001",
      licensePlate: "AIBox-01",
      violationType: "Hồ Chí Minh",
      camera: "CAM-01",
      location: "51H-123.45",
      time: "08:01:00",
      branch: "Vào",
    },
  ],
  "Tuần 4": [
    {
      code: "LPR-9001",
      licensePlate: "AIBox-01",
      violationType: "Hà Nội",
      camera: "CAM-01",
      location: "51H-123.45",
      time: "08:01:00",
      branch: "Vào",
    },
  ],
};

// =========================
// HÀM RENDER BẢNG CHI TIẾT BIỂN SỐ XE
// =========================
function renderLprDetailTable(list) {
  const tbody = document.getElementById("lprDetailTableBody");

  tbody.innerHTML = ""; // Xóa bảng cũ

  if (!list || list.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:10px;">Không có dữ liệu</td>
            </tr>
        `;
    return;
  }

  list.forEach((item) => {
    const severityClass =
      item.severity === "Rất nghiêm trọng"
        ? "text-danger"
        : item.severity === "Nghiêm trọng"
        ? "text-warning"
        : "text-info";
    tbody.innerHTML += `
            <tr>
                <td><strong>${item.code}</strong></td>
                <td><strong style="color: #0078d4;">${item.licensePlate}</strong></td>
                <td>${item.camera}</td>
                <td>${item.violationType}</td>
                <td>${item.location}</td>
                <td>${item.time}</td>
                <td>${item.branch}</td>

            </tr>
        `;
  });
}

// =========================
// BIỂU ĐỒ BIỂN SỐ XE (LPR)
// =========================
let lprChart;

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("lprSelect");

  function loadLprChart(type) {
    let labels = [];
    let values = [];

    if (type === "day") {
      labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
      values = [5, 3, 7, 4, 6, 8, 2];
    } else if (type === "week") {
      labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
      values = [15, 12, 8, 10];
    } else {
      labels = [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12",
      ];
      values = [45, 38, 52, 41, 58, 49, 63, 55, 72, 68, 81, 76];
    }

    const ctx = document.getElementById("lprChart");
    if (!ctx) return;

    const ctxContext = ctx.getContext("2d");

    // Xóa chart cũ
    if (lprChart) {
      lprChart.destroy();
    }

    // Vẽ biểu đồ mới
    lprChart = new Chart(ctxContext, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sự kiện biển số xe",
            data: values,
            backgroundColor: "rgba(63, 81, 181, 0.6)",
            borderColor: "rgba(63, 81, 181, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
        // ========================
        // CLICK VÀO CỘT BIỂU ĐỒ
        // ========================
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = this.data.labels[index]; // Ví dụ: "Tuần 1"

            console.log("Bạn đã click vào:", label);

            const list = lprDetailData[label] || [];
            renderLprDetailTable(list);
          }
        },

        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // Khi đổi select
  if (select) {
    select.addEventListener("change", function () {
      loadLprChart(this.value);
    });

    // Load mặc định theo tháng
    loadLprChart("month");
  }
});

let notificationReadState = [false, false, false, false];

const notificationData = [
  {
    title: "Sự kiện nghiêm trọng: Báo Cháy",
    device: "AIBox0003",
    camera: "CAM-003",
    branch: "Chi nhánh B",
    time: "14:05:30 07/11/2025",
    location: "Khu vực kho hàng A2",
    icon: "fa-bell",
    trangthai: "Đang xử lý",
    image: "Asset/image/demo.jpg",
  },
  {
    title: "Tràn dầu",
    device: "AIBox0004",
    camera: "CAM-003",
    branch: "Chi nhánh B",
    time: "08:30:00",
    location: "Kho hàng 3",
    icon: "fa-triangle-exclamation",
    trangthai: "Đã xử lý",
    image: "Asset/image/ai.jpg",
  },
  {
    title: "Vi phạm PPE (Không mũ)",
    device: "Nhân viên ID 1024",
    camera: "CAM-005",
    branch: "Chi nhánh C",
    time: "09:10:00",
    location: "Cổng sau",
    icon: "fa-user",
    trangthai: "Chưa xử lý",
    image: "Asset/image/demo2.jpg",
  },
  {
    title: "Sự cố Hạ tầng: AIBox Offline",
    device: "AIBox0002",
    camera: "CAM-006",
    branch: "Chi nhánh A",
    time: "13:50:15",
    location: "Mất kết nối 30s",
    icon: "fa-triangle-exclamation",
    trangthai: "Đã xử lý",
    image: "Asset/image/demo.jpg",
  },
];

let clickedIds = new Set();

function showNotificationDetails(id) {
  const data = notificationData[id];
  if (!data) return;

  // ==========================
  // 1️⃣ ĐÁNH DẤU ĐÃ ĐỌC + GIẢM SỐ
  // ==========================
  if (!notificationReadState[id]) {
    notificationReadState[id] = true; // đánh dấu đã đọc

    // Giảm số badge
    let count = parseInt(document.getElementById("unreadCount").innerText);

    if (count > 0) {
      count--;
      document.getElementById("unreadCount").innerText = count;
      document.getElementById("unreadText").innerText = count;
    }

    // Ẩn badge nếu hết
    if (count === 0) {
      document.getElementById("unreadCount").style.display = "none";
    }
  }

  // ==========================
  // 2️⃣ LƯU ID ĐÃ CLICK
  // ==========================
  clickedIds.add(id);

  // ==========================
  // 3️⃣ ĐỔI MÀU ITEM
  // ==========================
  const item = document.querySelector(
    `.quick-notification-item[data-id="${id}"]`
  );
  if (item) {
    item.classList.add("clicked-item");
  }

  // ==========================
  // 4️⃣ HIỂN THỊ MODAL
  // ==========================
  let color = "#FFC107";
  let bg = "#FFC10722";
  if (data.trangthai === "Chưa xử lý") {
    color = "#F44333";
    bg = "#F4433322";
  } else if (data.trangthai === "Đã xử lý") {
    color = "#4CAF50";
    bg = "#4CAF5022";
  }

  let html = `
    <div style="padding: 10px;">
        <h3 style="margin-top:0;">
            <i class="fa-solid ${data.icon}" style="margin-right:6px;"></i>
            ${data.title}
        </h3>

        <p><strong>Thiết bị:</strong> ${data.device}</p>
        <p><strong>Camera:</strong> ${data.camera}</p>
        <p><strong>Chi nhánh:</strong> ${data.branch}</p>
        <p><strong>Thời gian:</strong> ${data.time}</p>
        ${
          data.location
            ? `<p><strong>Vị trí:</strong> ${data.location}</p>`
            : ""
        }
        
        <p>
            <strong>Trạng thái:</strong> 
            <strong style="color:${color}; background: ${bg}; border-radius: 6px; padding: 2px 12px; display: inline-block; text-align: center; min-width: 90px; font-weight: 600;">
                ${data.trangthai}
            </strong>
        </p>

        <div style="margin-top:15px; text-align:center;">
            <img src="${data.image}"
                alt="Event Image" 
                style="max-width:100%; border-radius:6px;">
        </div>
    </div>
    `;

  document.getElementById("modal-content-body").innerHTML = html;
  document.getElementById("details-modal").style.display = "flex";
}

// Data giả lập cho Biểu đồ
const AIBoxStatusData = {
  labels: ["Bình thường (42)", "Cảnh báo (3)", "Không hoạt động (5)"],
  datasets: [
    {
      data: [42, 3, 5],
      backgroundColor: ["#4CAF50", "#FFC107", "#F44333"],
      hoverOffset: 4,
    },
  ],
};

const CameraStatusData = {
  labels: ["Đang hoạt động (120)", "Mất tín hiệu (5)", "Không hoạt động (10)"],
  datasets: [
    {
      data: [120, 5, 10],
      backgroundColor: ["#2196F3", "#FF9800", "#F44333"],
      hoverOffset: 4,
    },
  ],
};

const resourceData = [
  { id: "AIBox0001", cpu: 75, ram: 55, storage: 85, network: "120/45 Mbps" },
  { id: "AIBox0002", cpu: 30, ram: 45, storage: 95, network: "110/30 Mbps" },
  { id: "AIBox0003", cpu: 90, ram: 80, storage: 60, network: "100/50 Mbps" },
];

const uptimeAlertData = [
  {
    id: "AI-B001",
    camera: "Camera-001",
    chinhanh: "Hà Nội",
    uptime: 99.5,
    matketnoi: 3,
    tgoffline: "7 phút",
    saoluu: 100,
    dungluong: 85,
    trangthai: "Tốt",
  },
  {
    id: "AI-B002",
    camera: "Camera-002",
    chinhanh: "TP.HCM",
    uptime: 90.1,
    matketnoi: 15,
    tgoffline: "59 phút",
    saoluu: 100,
    dungluong: 95,
    trangthai: "Tốt",
  },
  {
    id: "AI-B003",
    camera: "Camera-003",
    chinhanh: "Đà Nẵng",
    uptime: 100,
    matketnoi: 0,
    tgoffline: "0 phút",
    saoluu: 50,
    dungluong: 40,
    trangthai: "Tốt",
  },
  {
    id: "AI-B004",
    camera: "Camera-004",
    chinhanh: "Hà Nội",
    uptime: 98.0,
    matketnoi: 2,
    tgoffline: "20 phút",
    saoluu: 100,
    dungluong: 15,
    trangthai: "Xuống cấp",
  }, // Dung lượng thấp
];

const statusColorMap = {
  Tốt: "text-ok", // Xanh
  "Xuống cấp": "text-warning", // Vàng/cam
  Lỗi: "text-danger", // Đỏ
};

// typeStyle: 'color: orange; font-weight: bold;',
// SỬA: Data cho Bảng Sự kiện AI (để dùng cho Modal)
const eventFeedData = [
  {
    id: "EVT-1001",
    type: "Va chạm xe",
    severity: "Rất nghiêm trọng",
    location: "Chi nhánh B",
    camera: "CAM_Kho_A2",
    time: "10:12:55",
    status: "Chưa xử lý",
    imageUrl: "Asset/image/ai.jpg",
    icon: "icon-event-crash",
    severityClass: "severity-high",
  },
  {
    id: "EVT-1002",
    type: "Xâm nhập",
    severity: "Rất nghiêm trọng",
    location: "Chi nhánh A",
    camera: "CAM_Kho_A1",
    time: "10:12:40",
    status: "Chưa xử lý",
    imageUrl: "https://i.imgur.com/O6G1L2g.jpeg",
    icon: "icon-event-alert",
    severityClass: "severity-high",
  },
  {
    id: "EVT-1003",
    type: "Vi phạm PPE",
    severity: "Thấp",
    location: "Chi nhánh C",
    camera: "CAM_Kho_A3",
    time: "10:11:00",
    status: "Đã xử lý",
    imageUrl: "https://i.imgur.com/1aX5Y4w.jpeg",
    icon: "icon-event-ppe",
    severityClass: "severity-low",
  },
  {
    id: "EVT-1004",
    type: "Tràn dầu",
    severity: "Nghiêm trọng",
    location: "Chi nhánh B",
    camera: "CAM_Kho_A3",
    time: "08:30:00",
    status: "Chưa xử lý",
    imageUrl: "https://i.imgur.com/gthF0nQ.jpeg",
    icon: "icon-event-spill",
    severityClass: "severity-medium",
  },
  {
    id: "EVT-1005",
    type: "AIBox Offline",
    severity: "Nghiêm trọng",
    location: "Chi nhánh A",
    camera: "CAM_Kho_A3",
    time: "13:50:15",
    status: "Đang xử lý",
    imageUrl: "https://i.imgur.com/O6G1L2g.jpeg",
    icon: "icon-event-offline",
    severityClass: "severity-medium",
  },
];

const typeColorMap = {
  "Va chạm xe": "orange",
  "Xâm nhập": "red",
  "Vi phạm PPE": "blue",
  "Tràn dầu": "brown",
  "AIBox Offline": "purple",
};

const aiEventChartData = {
  labels: [
    "0h",
    "1h",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
    "23h",
  ],
  datasets: [
    {
      label: "Số Sự kiện được phát hiện",
      data: [
        20, 15, 10, 12, 15, 30, 50, 90, 150, 210, 185, 300, 250, 350, 420, 380,
        310, 240, 180, 120, 80, 60, 40, 30,
      ],
      borderColor: "#2196F3",
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};

const ppeDailyComplianceChartData = {
  labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  datasets: [
    {
      label: "Tỷ lệ Tuân thủ PPE (%)",
      data: [92, 95, 90, 96, 95, 93, 97],
      borderColor: "#4CAF50",
      backgroundColor: "rgba(76, 175, 80, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const ppeViolationTypeChartData = {
  labels: ["Không Mũ bảo hộ", "Không Áo phản quang", "Không Giày bảo hộ"],
  datasets: [
    {
      label: "Số lần Vi phạm",
      data: [150, 80, 20],
      backgroundColor: ["#FFC107", "#FF9800", "#2196F3"],
    },
  ],
};

const slaResponseTimeChartData = {
  labels: ["0-500ms", "501-1000ms", "1001-1500ms", ">1500ms"],
  datasets: [
    {
      label: "Phân bổ Sự kiện",
      data: [500, 350, 100, 50],
      backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#F44333"],
    },
  ],
};

// SỬA: Data cho biểu đồ cột chồng (Quản trị)
const branchEventStackedData = {
  labels: ["Chi nhánh Hà Nội", "Chi nhánh TP.HCM", "Chi nhánh Đà Nẵng"],
  datasets: [
    {
      label: "Rất nghiêm trọng", // MỚI
      data: [10, 15, 5], // MỚI
      backgroundColor: "#b71c1c", // Darker Red
    },
    {
      label: "Nghiêm trọng", // MỚI
      data: [25, 40, 12], // MỚI
      backgroundColor: "#F44333", // Red
    },
    {
      label: "Bình thường", // MỚI
      data: [115, 165, 63], // MỚI
      backgroundColor: "#2196F3", // Blue
    },
  ],
};

// SỬA: Data cho biểu đồ tỉ lệ Offline (Quản trị)
const systemStatusPieData = {
  labels: [
    "AIBox Offline (5)",
    "Camera Offline (10)",
    "Cảnh báo Dung lượng (2)",
    "Bình thường (233)",
  ],
  datasets: [
    {
      data: [5, 10, 2, 233],
      backgroundColor: ["#F44333", "#FF9800", "#FFC107", "#4CAF50"],
      hoverOffset: 4,
    },
  ],
};

const securityHourlyChartData = {
  labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
  datasets: [
    {
      label: "Số Sự kiện An ninh",
      data: [3, 5, 1, 8, 2, 6],
      borderColor: "#F44333",
      backgroundColor: "rgba(244, 67, 54, 0.2)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const lprHourlyChartData = {
  labels: [
    "0h",
    "1h",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
    "23h",
  ],
  datasets: [
    {
      label: "Xe vào",
      data: [
        5, 2, 1, 0, 2, 5, 15, 40, 55, 50, 45, 40, 35, 40, 42, 40, 40, 50, 30,
        15, 10, 8, 7, 6,
      ],
      backgroundColor: "rgba(33, 150, 243, 0.6)",
    },
    {
      label: "Xe ra",
      data: [
        2, 1, 0, 0, 1, 3, 10, 35, 50, 45, 40, 35, 30, 35, 38, 35, 45, 55, 35,
        20, 15, 10, 8, 5,
      ],
      backgroundColor: "rgba(255, 159, 64, 0.6)",
    },
  ],
};

const aiModelAccuracyChartData = {
  labels: ["LPR_v3.1", "PPE_v1.5", "Intrusion_v2.0"],
  datasets: [
    {
      label: "Sự kiện Phát hiện",
      data: [1520, 350, 45],
      backgroundColor: "rgba(76, 175, 80, 0.6)",
    },
    {
      label: "Lỗi (False Positive)",
      data: [5, 12, 1],
      backgroundColor: "rgba(244, 67, 54, 0.6)",
    },
  ],
};

const aiModelSpeedChartData = {
  labels: ["LPR_v3.1", "PPE_v1.5", "Intrusion_v2.0"],
  datasets: [
    {
      label: "Tốc độ xử lý (ms)",
      data: [85, 110, 95],
      backgroundColor: "rgba(156, 39, 176, 0.6)",
    },
  ],
};

const AIBoxMockData = [
  {
    id: "AIBox0001",
    ten: "AIBox cổng ra vào",
    vitri: "Cổng ra vào",
    camera: "CAM-001",
    chinhanh: "Chi nhánh A",
    status: "Đang hoạt động",
  },
  {
    id: "AIBox0002",
    ten: "AIBox bãi gửi xe",
    vitri: "Bãi gửi xe khu 1",
    camera: "CAM-002",
    chinhanh: "Chi nhánh A",
    status: "Không hoạt động",
  },
  {
    id: "AIBox0003",
    ten: "AIBox Kho A1",
    vitri: "Kho A1",
    camera: "CAM-003",
    chinhanh: "Chi nhánh B",
    status: "Đang hoạt động",
  },
  {
    id: "AIBox0004",
    ten: "AIBox Kho A2",
    vitri: "Kho A2",
    camera: "CAM-004",
    chinhanh: "Chi nhánh B",
    status: "Đang nâng cấp",
  },
  {
    id: "AIBox0005",
    ten: "AIBox Khu Sản Xuất",
    vitri: "Dây chuyền 1",
    camera: "CAM-005",
    chinhanh: "Chi nhánh A",
    status: "Đang hoạt động",
  },
  // Page 2
  {
    id: "AIBox0006",
    ten: "AIBox Cổng An ninh",
    vitri: "Cổng B",
    chinhanh: "Chi nhánh C",
    status: "Online",
  },
  {
    id: "AIBox0007",
    ten: "AIBox Văn phòng",
    vitri: "Tầng 2",
    chinhanh: "Chi nhánh C",
    status: "Online",
  },
  {
    id: "AIBox0008",
    ten: "AIBox Kho Lạnh",
    vitri: "Kho Lạnh 01",
    chinhanh: "Chi nhánh B",
    status: "Offline",
  },
  {
    id: "AIBox0009",
    ten: "AIBox Sảnh Chính",
    vitri: "Sảnh",
    chinhanh: "Chi nhánh A",
    status: "Online",
  },
  {
    id: "AIBox0010",
    ten: "AIBox Bãi Xe 02",
    vitri: "Bãi xe khu 2",
    chinhanh: "Chi nhánh A",
    status: "Online",
  },
  // Page 3
  {
    id: "AIBox0011",
    ten: "AIBox Hàng rào 01",
    vitri: "Hàng rào phía Đông",
    chinhanh: "Chi nhánh C",
    status: "Online",
  },
  {
    id: "AIBox0012",
    ten: "AIBox Hàng rào 02",
    vitri: "Hàng rào phía Tây",
    chinhanh: "Chi nhánh C",
    status: "Online",
  },
];
const itemsPerPage = 5; // Số mục trên mỗi trang AIBox

// SỬA: Thêm Dữ liệu cho Dashboard Quản trị mới
const adminScorecardsData = {
  total: 450,
  serious: 30,
  unprocessed: 12,
};
const adminEventStatusData = {
  labels: ["Đã xử lý (400)", "Đang xử lý (38)", "Chưa xử lý (12)"],
  datasets: [
    {
      data: [400, 38, 12],
      backgroundColor: ["#4CAF50", "#FFC107", "#F44333"],
      hoverOffset: 4,
    },
  ],
};
// SỬA: Data cho biểu đồ (Tuần/Tháng/Năm)
const weeklyEventChartData = {
  labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  datasets: [
    {
      label: "Tổng sự kiện (Tuần này)",
      data: [150, 210, 185, 300, 250, 350, 420],
      backgroundColor: "#2196F3",
    },
  ],
};
const monthlyEventChartData = {
  labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
  datasets: [
    {
      label: "Tổng sự kiện (Tháng này)",
      data: [1200, 1500, 1300, 1700],
      backgroundColor: "#2196F3",
    },
  ],
};
const yearlyEventChartData = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  datasets: [
    {
      label: "Tổng sự kiện (Năm nay)",
      data: [
        8200, 8500, 7300, 9700, 10800, 9600, 10100, 11200, 9800, 12000, 10123,
        12000,
      ],
      backgroundColor: "#2196F3",
    },
  ],
};

const generateLegend = (chart, elementId) => {
  const list = document.getElementById(elementId);
  if (!list) return;

  // Map icon cho từng trạng thái
  const iconMap = {
    "Đã xử lý": "fa-circle-check",
    "Đang xử lý": "fa-hourglass-half",
    "Chưa xử lý": "fa-clock",
    "Nghiêm trọng": "fa-triangle-exclamation",
    "Sự kiện nghiêm trọng": "fa-triangle-exclamation",
  };

  list.innerHTML = "";
  chart.data.labels.forEach((label, index) => {
    const color = chart.data.datasets[0].backgroundColor[index];
    // Tìm icon phù hợp dựa vào label
    let iconClass = "fa-circle";
    for (const [key, icon] of Object.entries(iconMap)) {
      if (label.includes(key)) {
        iconClass = icon;
        break;
      }
    }

    const item = document.createElement("div");
    item.classList.add("donut-legend-item");
    item.innerHTML = `
                    <i class="fa-solid ${iconClass}" style="color: ${color};  font-size: 16px;"></i>
                    <span>${label}</span>
                `;
    list.appendChild(item);
  });
};

const createProgressBar = (value) => {
  let colorClass = "status-ok";
  if (value > 70) colorClass = "status-warn";
  if (value > 90) colorClass = "status-danger";

  return `
                <div class="progress-bar-container">
                    <div class="progress-bar ${colorClass}" style="width: ${value}%;"></div>
                </div>
                <span style="font-weight: bold; margin-left: 10px;">${value}%</span>
            `;
};

// SỬA: Cập nhật hàm render Bảng Uptime
const renderUptimeAlertTable = () => {
  const tableBody = document.querySelector("#uptimeAlertTable tbody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  uptimeAlertData.forEach((item) => {
    let statusClass = statusColorMap[item.trangthai] || "text-danger";
    let storageClass = item.dungluong < 20 ? "text-danger" : "";

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.camera}</td>
            <td>${item.chinhanh}</td>
            <td>${item.uptime}%</td>
            <td>${item.matketnoi} lần</td>
            <td>${item.tgoffline}</td>
            <td>${createProgressBar(item.saoluu)}</td>
            <td><span class="${storageClass}">${item.dungluong}%</span></td>
            <td><span class="${statusClass}">${item.trangthai}</span></td>
        `;
    tableBody.appendChild(row);
  });
};

// SỬA: Hàm render Bảng Sự kiện Vận hành (Mới)
function renderEventFeedTable() {
  const tableBody = document.getElementById("eventFeedTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = ""; // Xóa dữ liệu cũ

  eventFeedData.forEach((item, index) => {
    const row = `
            <tr>
                <td>${item.id}</td>
                <td><span class="event-icon ${item.icon} ${
      item.severityClass
    }"></span> ${item.type}</td>
                <td>${item.location}</td>
                <td>${item.camera}</td>

                <td>
                    <select style="padding: 5px; border-radius: 4px;">
                        <option value="new" ${
                          item.status === "Chưa xử lý" ? "selected" : ""
                        }>Chưa xử lý</option>
                        <option value="pending" ${
                          item.status === "Đang xử lý" ? "selected" : ""
                        }>Đang xử lý</option>
                        <option value="done" ${
                          item.status === "Đã xử lý" ? "selected" : ""
                        }>Đã xử lý</option>
                    </select>
                </td>

                <td style="display:flex; gap:6px; justify-content:center;">

                    <!-- Nút xem -->
                    <button onclick="showEventFeedDetails('${item.id}')"
                            style="background:#28a745; color:white; border:none; padding:6px 10px; border-radius:4px;">
                        <i class="fa-solid fa-eye"></i>
                    </button>


                    <!-- Nút xóa -->
                    <button onclick="deleteEvent(${index})"
                            style="background:#e74c3c; color:white; padding:6px 10px; border:none; border-radius:4px;">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </td>

            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

function showEventFeedDetails(eventId) {
  const e = eventFeedData.find((x) => x.id === eventId);
  if (!e) {
    console.error("Không tìm thấy sự kiện:", eventId);
    return;
  }
  const html = `
        <div><strong>Mã sự kiện:</strong> ${e.id}</div>
        <div><strong>Loại sự kiện:</strong> ${e.type}</div>
        <div><strong>Camera:</strong> ${e.camera}</div>
        <div><strong>Mức độ:</strong> ${e.severity}</div>
        <div><strong>Thời gian:</strong> ${e.time}</div>
        <div><strong>Vị trí:</strong> ${e.location}</div>
        <div><strong>Trạng thái:</strong> ${e.status}</div>
        <div style="margin-top:10px;">
            <strong>Hình ảnh:</strong><br>
            <img src="${e.imageUrl}" style="width:100%; border-radius:8px; margin-top:5px;">
        </div>
    `;

  document.getElementById("modal-content-body").innerHTML = html;
  document.getElementById("details-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("event-details-modal").style.display = "none";
}

// SỬA: Hàm render Bảng Tình trạng Camera (Mới)
function renderCameraHealthTable() {
  const tableBody = document.getElementById("cameraHealthTableBody");
  if (!tableBody) return;
  tableBody.innerHTML = `
                <tr><td>CAM-001</td><td>AI-B001</td><td>Hà Nội</td><td>99.5%</td><td>3</td><td><span class="text-ok">Tốt</span></td></tr>
                <tr><td>CAM-002</td><td>AI-B002</td><td>Hà Nội</td><td>99.5%</td><td>3</td><td><span class="text-ok">Tốt</span></td></tr>
                <tr><td>CAM-003</td><td>AI-B003</td><td>TP.HCM</td><td>90.1%</td><td>15</td><td><span class="text-danger">Mất tín hiệu</span></td></tr>
            `;
}

const initDashboardOperation = () => {
  const tableBody = document.querySelector("#resourceTable tbody");
  if (tableBody) {
    tableBody.innerHTML = "";
    resourceData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${createProgressBar(item.cpu)}</td>
                        <td>${createProgressBar(item.ram)}</td>
                        <td>${createProgressBar(item.storage)}</td>
                        <td>${item.network}</td>
                    `;
      tableBody.appendChild(row);
    });
  }

  // SỬA: Cập nhật thời gian
  const timeEl = document.getElementById("lastUpdatedTime");
  if (timeEl) {
    timeEl.textContent = `Cập nhật lần cuối: ${new Date().toLocaleTimeString()} (5s/lần)`;
  }

  // SỬA: Chuyển 2 biểu đồ Donut sang Vận hành
  const aiBoxTotal = AIBoxStatusData.datasets[0].data.reduce(
    (a, b) => a + b,
    0
  );
  document.getElementById("aiBoxTotalText").textContent = aiBoxTotal;

  const cameraTotal = CameraStatusData.datasets[0].data.reduce(
    (a, b) => a + b,
    0
  );
  document.getElementById("cameraTotalText").textContent = cameraTotal;

  const aiBoxCtx = document.getElementById("aiBoxStatusChart");
  if (aiBoxCtx) {
    if (aiBoxCtx.chart) aiBoxCtx.chart.destroy();
    aiBoxCtx.chart = new Chart(aiBoxCtx, {
      type: "doughnut",
      data: AIBoxStatusData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { display: false }, title: { display: false } },
      },
    });
    generateLegend(aiBoxCtx.chart, "aiBoxLegend");
  }

  const cameraCtx = document.getElementById("cameraStatusChart");
  if (cameraCtx) {
    if (cameraCtx.chart) cameraCtx.chart.destroy();
    cameraCtx.chart = new Chart(cameraCtx, {
      type: "doughnut",
      data: CameraStatusData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { display: false }, title: { display: false } },
      },
    });
    generateLegend(cameraCtx.chart, "cameraLegend");
  }

  // SỬA: Render bảng Uptime
  renderUptimeAlertTable();
  // SỬA: Render bảng sự kiện
  renderEventFeedTable();
  // SỬA: Gọi hàm vẽ biểu đồ cho "Hiệu suất mô hình AI"
  initReportAIModelCharts();
};

// SỬA: Hàm render Bảng AIBox (Phân trang)
function renderAIBoxTable(page = 1) {
  // SỬA: Lấy giá trị từ bộ lọc
  const branchFilter = document.getElementById("aiboxFilterBranch")
    ? document.getElementById("aiboxFilterBranch").value
    : "all";
  const statusFilter = document.getElementById("aiboxFilterStatus")
    ? document.getElementById("aiboxFilterStatus").value
    : "all";
  const searchFilter = document.getElementById("aiboxSearchBox")
    ? document.getElementById("aiboxSearchBox").value.toUpperCase()
    : "";

  const tableBody = document.getElementById("aiBoxTableBody");
  const totalCountEl = document.getElementById("aiBoxTotalCount");
  if (!tableBody || !totalCountEl) return;

  // SỬA: Lọc dữ liệu
  const filteredData = AIBoxMockData.filter((item) => {
    const matchesBranch =
      branchFilter === "all" || item.chinhanh === branchFilter;
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    const matchesSearch =
      item.id.toUpperCase().indexOf(searchFilter) > -1 ||
      item.ten.toUpperCase().indexOf(searchFilter) > -1 ||
      item.vitri.toUpperCase().indexOf(searchFilter) > -1;
    return matchesBranch && matchesStatus && matchesSearch;
  });

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (page > totalPages && totalPages > 0) {
    page = totalPages;
  } // Fix trang
  if (page < 1) {
    page = 1;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToRender = filteredData.slice(startIndex, endIndex);

  tableBody.innerHTML = ""; // Xóa dữ liệu cũ

  dataToRender.forEach((item) => {
    let statusHtml = "";

    if (item.status === "Đang hoạt động") {
      statusHtml = '<span class="text-ok">Đang hoạt động</span>';
    } else if (item.status === "Không hoạt động") {
      statusHtml = '<span class="text-danger">Không hoạt động</span>';
    } else {
      // Updating
      statusHtml = '<span class="text-warn">Đang nâng cấp</span>';
    }

    const row = `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.ten}</td>
                        <td>${item.chinhanh}</td>
                        <td>${item.camera}</td>
                        <td>${item.vitri}</td>
                        <td>${statusHtml}</td>
                        <td>
                        <button class="ai-action-btn edit" 
                                onclick="openAIBoxEditModal(event, '${item.id}')"
                                style="background:#f1c40f; color:white; padding:6px 10px; border:none; border-radius:4px;">
                            <i class="fa-solid fa-pen"></i>
                        </button>

                        <button class="ai-action-btn delete" 
                                onclick="alert('Xác nhận Xóa ${item.id}')"
                                style="background:#e74c3c; color:white; padding:6px 10px; border:none; border-radius:4px;">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        </td>
                    </tr>
                `;
    tableBody.innerHTML += row;
  });

  // Cập nhật tổng số
  totalCountEl.textContent = `Hiển thị ${
    dataToRender.length > 0 ? startIndex + 1 : 0
  } - ${Math.min(endIndex, totalItems)} trên tổng số ${totalItems} mục.`;

  // Render Pagination
  renderAIBOxPagination(page, totalPages);
}

// SỬA: Hàm render Phân trang cho AIBox
function renderAIBOxPagination(currentPage, totalPages) {
  const paginationContainer = document.getElementById("aiBoxPagination");
  if (!paginationContainer) return;

  paginationContainer.innerHTML = "";

  // Nút Previous
  if (currentPage > 1) {
    paginationContainer.innerHTML += `<a href="#" onclick="event.preventDefault(); renderAIBoxTable(${
      currentPage - 1
    })">&laquo;</a>`;
  } else {
    paginationContainer.innerHTML += `<a href="#" class="disabled">&laquo;</a>`;
  }

  // Các nút số
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `<a href="#" onclick="event.preventDefault(); renderAIBoxTable(${i})" class="${
      i === currentPage ? "active" : ""
    }">${i}</a>`;
  }

  // Nút Next
  if (currentPage < totalPages) {
    paginationContainer.innerHTML += `<a href="#" onclick="event.preventDefault(); renderAIBoxTable(${
      currentPage + 1
    })">&raquo;</a>`;
  } else {
    paginationContainer.innerHTML += `<a href="#" class="disabled">&raquo;</a>`;
  }
}

// SỬA: Tách hàm initCharts thành các hàm con
function initDashboardAdminCharts() {
  // SỬA: Thêm Scorecards và Biểu đồ Tròn (Trạng thái Sự vụ)
  // document.getElementById('adminTotalEvents').textContent = adminScorecardsData.total;
  // document.getElementById('adminSeriousEvents').textContent = adminScorecardsData.serious;
  // document.getElementById('adminAvgResponse').textContent = "0.85s"; // Thêm TGTB

  const adminEventCtx = document.getElementById("adminEventStatusChart");
  if (adminEventCtx) {
    if (adminEventCtx.chart) adminEventCtx.chart.destroy();
    adminEventCtx.chart = new Chart(adminEventCtx, {
      type: "doughnut",
      data: adminEventStatusData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { display: false }, title: { display: false } },
      },
    });
    generateLegend(adminEventCtx.chart, "adminEventStatusLegend");
  }

  // SỬA: Thêm Biểu đồ (Theo Tháng)
  updateAdminMainChart("year"); // Mặc định hiển thị theo Năm (các Tháng)
  const timeSelect = document.getElementById("adminEventTimeSelect");
  if (timeSelect) {
    // Xóa event listener cũ nếu có
    timeSelect.onchange = null;
    timeSelect.onchange = (e) => updateAdminMainChart(e.target.value);
  }

  // SỬA: Thêm Biểu đồ Cột chồng (Chi nhánh)
  const branchEventStackedCtx = document.getElementById(
    "branchEventStackedChart"
  );
  if (branchEventStackedCtx) {
    if (branchEventStackedCtx.chart) branchEventStackedCtx.chart.destroy();
    branchEventStackedCtx.chart = new Chart(branchEventStackedCtx, {
      type: "bar",
      data: branchEventStackedData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, stacked: true },
          x: { stacked: true },
        },
      },
    });
  }

  // SỬA: Thêm Biểu đồ Pie (Trạng thái Hệ thống)
  const systemStatusPieCtx = document.getElementById("systemStatusPieChart");
  if (systemStatusPieCtx) {
    // Destroy existing chart using Chart.js API
    const existingChart =
      systemStatusPieCtx.chart ||
      (typeof Chart !== "undefined" && Chart.getChart
        ? Chart.getChart(systemStatusPieCtx)
        : null);
    if (existingChart) {
      existingChart.destroy();
    }
    new Chart(systemStatusPieCtx, {
      type: "pie",
      data: systemStatusPieData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

// SỬA: Hàm mới cho Báo cáo Tình trạng
function initReportHealthCharts() {
  // Render bảng camera
  renderCameraHealthTable();
}

function initReportPPECharts() {
  const ppeDailyComplianceCtx = document.getElementById(
    "ppeDailyComplianceChart"
  );
  if (ppeDailyComplianceCtx) {
    if (ppeDailyComplianceCtx.chart) ppeDailyComplianceCtx.chart.destroy();
    ppeDailyComplianceCtx.chart = new Chart(ppeDailyComplianceCtx, {
      type: "line",
      data: ppeDailyComplianceChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 85, max: 100 } },
      },
    });
  }

  const ppeViolationTypeCtx = document.getElementById("ppeViolationTypeChart");
  if (ppeViolationTypeCtx) {
    if (ppeViolationTypeCtx.chart) ppeViolationTypeCtx.chart.destroy();
    ppeViolationTypeCtx.chart = new Chart(ppeViolationTypeCtx, {
      type: "bar",
      data: ppeViolationTypeChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });
  }
}

// SỬA: Gộp SLA vào Event
function initReportEventSLACharts() {
  // SỬA: Thêm data cho scorecards
  const slaPercent = document.getElementById("slaPercent");
  const slaAvgTime = document.getElementById("slaAvgTime");
  const slaMissed = document.getElementById("slaMissed");

  if (slaPercent) slaPercent.textContent = "92.5%";
  if (slaAvgTime) slaAvgTime.textContent = "1.5 phút";
  if (slaMissed) slaMissed.textContent = "15";
}

function initReportSLACharts() {
  const slaResponseTimeCtx = document.getElementById("slaResponseTimeChart");
  if (slaResponseTimeCtx) {
    if (slaResponseTimeCtx.chart) slaResponseTimeCtx.chart.destroy();
    slaResponseTimeCtx.chart = new Chart(slaResponseTimeCtx, {
      type: "bar",
      data: slaResponseTimeChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });
  }
}

function initReportBranchCharts() {
  const branchEventComparisonCtx = document.getElementById(
    "branchEventComparisonChart"
  );
  if (branchEventComparisonCtx) {
    if (branchEventComparisonCtx.chart)
      branchEventComparisonCtx.chart.destroy();
    // SỬA: Sửa hàm này để dùng đúng data (branchEventStackedData)
    branchEventComparisonCtx.chart = new Chart(branchEventComparisonCtx, {
      type: "bar",
      data: branchEventStackedData, // ĐỔI DATA
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, stacked: true },
          x: { stacked: true },
        }, // THÊM STACKED
      },
    });
  }
}

function initReportSecurityCharts() {
  const securityHourlyCtx = document.getElementById("securityHourlyChart");
  if (securityHourlyCtx) {
    if (securityHourlyCtx.chart) securityHourlyCtx.chart.destroy();
    securityHourlyCtx.chart = new Chart(securityHourlyCtx, {
      type: "line",
      data: securityHourlyChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });
  }
}

function initReportLPRCharts() {
  const lprHourlyCtx = document.getElementById("lprHourlyChart");
  if (lprHourlyCtx) {
    if (lprHourlyCtx.chart) lprHourlyCtx.chart.destroy();
    lprHourlyCtx.chart = new Chart(lprHourlyCtx, {
      type: "bar",
      data: lprHourlyChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, stacked: true },
          x: { stacked: true },
        },
      },
    });
  }
}

function initReportAIModelCharts() {
  const aiModelAccuracyCtx = document.getElementById("aiModelAccuracyChart");
  if (aiModelAccuracyCtx) {
    if (aiModelAccuracyCtx.chart) aiModelAccuracyCtx.chart.destroy();
    aiModelAccuracyCtx.chart = new Chart(aiModelAccuracyCtx, {
      type: "bar",
      data: aiModelAccuracyChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });
  }

  const aiModelSpeedCtx = document.getElementById("aiModelSpeedChart");
  if (aiModelSpeedCtx) {
    if (aiModelSpeedCtx.chart) aiModelSpeedCtx.chart.destroy();
    aiModelSpeedCtx.chart = new Chart(aiModelSpeedCtx, {
      type: "bar",
      data: aiModelSpeedChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });
  }
}

// Hàm chuyển đổi tab
const switchTab = (tabId) => {
  // Hủy tất cả biểu đồ cũ (nếu có)
  const chartsToDestroy = [
    "aiBoxStatusChart",
    "cameraStatusChart",
    "adminEventStatusChart",
    "aiEventChart",
    "eventTypeChart",
    "adminEventTimeChart",
    "branchEventStackedChart",
    "systemStatusPieChart",
    "ppeComplianceChart",
    "ppeDailyComplianceChart",
    "ppeViolationTypeChart",
    "slaResponseTimeChart",
    "branchEventComparisonChart",
    "securityHourlyChart",
    "lprHourlyChart",
    "aiModelAccuracyChart",
    "aiModelSpeedChart",
    "eventOverviewChart",
    "virtualFenceChart",
    "fireAlertChart",
    "warehouseOilSpillChart",
    "vehicleOilSpillChart",
    "lprChart",
  ];

  chartsToDestroy.forEach((id) => {
    const ctx = document.getElementById(id);
    if (ctx && ctx.chart) {
      ctx.chart.destroy();
    }
  });

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.remove("active");
  });

  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add("active");
  }
  const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (targetNav) {
    targetNav.classList.add("active");
  }

  // SỬA: Logic gọi hàm init chính xác (dùng setTimeout 0)
  setTimeout(() => {
    if (tabId === "dashboard-operation") {
      initDashboardOperation();
      initDashboardAdminCharts();
    } else if (tabId === "ai-box-list") {
      renderAIBoxTable(1);
    }
    // else if (tabId === "dashboard-admin") {
    // }
    else if (tabId === "report-event") {
      // Gộp SLA
      initReportEventSLACharts();
    } else if (tabId === "report-ppe") {
      initReportPPECharts();
    } else if (tabId === "report-aicloud-health") {
      initReportHealthCharts(); // SỬA: Gọi hàm mới
    } else if (tabId === "report-branch") {
      initReportBranchCharts();
    } else if (tabId === "report-security") {
      initReportSecurityCharts();
    } else if (tabId === "report-lpr") {
      initReportLPRCharts();
    } else if (tabId === "report-sla") {
      initReportSLACharts(); // Sửa lỗi gộp/tách
    } else if (tabId === "event-charts-overview") {
      // Init sự kiện an toàn lao động
      const select = document.getElementById("eventOverviewSelect");
      if (select && typeof loadEventOverviewChart === "function") {
        loadEventOverviewChart(select.value || "month");
        renderDetailTable(detailData["Tuần 1"] || []);
      }
    } else if (tabId === "event-charts-type") {
      // Init hàng rào ảo
      const select = document.getElementById("virtualFenceSelect");
      if (select && typeof loadVirtualFenceChart === "function") {
        loadVirtualFenceChart(select.value || "month");
        renderVirtualFenceDetailTable(virtualFenceDetailData["Tuần 1"] || []);
      }
    } else if (tabId === "event-charts-detail") {
      // Init báo cháy
      const select = document.getElementById("fireAlertSelect");
      if (select && typeof loadFireAlertChart === "function") {
        loadFireAlertChart(select.value || "month");
        renderFireAlertDetailTable(fireAlertDetailData["Tuần 1"] || []);
      }
    } else if (tabId === "event-charts-view") {
      // Init tràn dầu kho
      const select = document.getElementById("warehouseOilSpillSelect");
      if (select && typeof loadWarehouseOilSpillChart === "function") {
        loadWarehouseOilSpillChart(select.value || "month");
        renderWarehouseOilSpillDetailTable(
          warehouseOilSpillDetailData["Tuần 1"] || []
        );
      }
    } else if (tabId === "event-charts-viewcar") {
      // Init tràn dầu xe tra nạp
      const select = document.getElementById("vehicleOilSpillSelect");
      if (select && typeof loadVehicleOilSpillChart === "function") {
        loadVehicleOilSpillChart(select.value || "month");
        renderVehicleOilSpillDetailTable(
          vehicleOilSpillDetailData["Tuần 1"] || []
        );
      }
    } else if (tabId === "event-charts-viewoto") {
      // Init biển số xe
      const select = document.getElementById("lprSelect");
      if (select && typeof loadLprChart === "function") {
        loadLprChart(select.value || "month");
        renderLprDetailTable(lprDetailData["Tuần 1"] || []);
      }
    }
    // report-ai-model đã chuyển vào dashboard-operation
  }, 0); // <-- Thêm timeout 0

  // Sau khi tab được kích hoạt và các hàm init chạy, đảm bảo các Chart.js
  // được resize/update để tránh render bị 0x0 khi canvas ban đầu bị ẩn.
  setTimeout(() => {
    try {
      document.querySelectorAll("canvas").forEach((c) => {
        try {
          const chart =
            c.chart ||
            (window.Chart && typeof Chart.getChart === "function"
              ? Chart.getChart(c)
              : null);
          if (chart && typeof chart.resize === "function") {
            chart.resize();
            if (typeof chart.update === "function") chart.update();
          }
        } catch (innerErr) {
          // ignore individual canvas errors
        }
      });
    } catch (err) {
      console.warn("refreshVisibleCharts error", err);
    }
  }, 120);

  // Xử lý đóng dropdown thông báo khi click Xem tất cả
  const dropdown = document.getElementById("notificationDropdown");
  if (dropdown) dropdown.style.display = "none";

  // SỬA: Logic tự động mở/đóng dropdown
  // const dashboardHeader = document.getElementById("dashboardHeader");
  // const dashboardLinks = document.getElementById("dashboardLinksContainer");

  // SỬA: Bỏ logic tự động đóng
  // if (tabId.startsWith("dashboard-")) {
  //   dashboardHeader.classList.add("active");
  //   dashboardLinks.classList.add("active-section");
  // }
};

// Hàm xử lý việc chuyển đổi trạng thái menu sidebar (Click)
const setupSidebarToggle = () => {
  const dashboardHeader = document.getElementById("dashboardHeader");
  const dashboardLinks = document.getElementById("dashboardLinksContainer");

  const toggleSection = (header, links) => {
    header.classList.toggle("active");
    links.classList.toggle("active-section");
    const arrow = header.querySelector(".arrow-icon");
    if (header.classList.contains("active")) {
      arrow.textContent = "▼";
    } else {
      arrow.textContent = "▶";
    }
  };

  if (dashboardHeader) {
    dashboardHeader.addEventListener("click", () =>
      toggleSection(dashboardHeader, dashboardLinks)
    );
  }
};

// SỬA: Hàm cập nhật Biểu đồ (Tuần/Tháng/Năm)
function updateAdminMainChart(period) {
  const ctx = document.getElementById("adminEventTimeChart");
  if (!ctx) return;

  // Hủy biểu đồ cũ
  if (ctx.chart) ctx.chart.destroy();

  let dataToShow;
  if (period === "week") {
    dataToShow = weeklyEventChartData;
  } else if (period === "month") {
    dataToShow = monthlyEventChartData;
  } else {
    // year
    dataToShow = yearlyEventChartData;
  }

  // Vẽ biểu đồ mới
  ctx.chart = new Chart(ctx, {
    type: "bar",
    data: dataToShow,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
    },
  });
}

// SỬA: Logic cho Modal (Cửa sổ chi tiết)
const modalOverlay = document.getElementById("eventModalOverlay");

function showEventDetails(eventIndex) {
  const eventData = eventFeedData[eventIndex];
  if (!eventData) return;

  document.getElementById("modalEventId").textContent = eventData.id;
  document.getElementById("modalEventTime").textContent = eventData.time;
  document.getElementById("modalEventType").textContent = eventData.type;
  document.getElementById("modalEventLocation").textContent =
    eventData.location;
  document.getElementById("modalEventSeverity").textContent =
    eventData.severity;
  document.getElementById("modalEventStatus").textContent = eventData.status;
  document.getElementById("modalEventImage").src = eventData.imageUrl;

  modalOverlay.style.display = "block";
}

function closeEventModal() {
  modalOverlay.style.display = "none";
}
// Hết Logic Modal

// SỬA: Logic cho Modal AIBox
const aiBoxModalOverlay = document.getElementById("aiBoxModalOverlay");
const aiBoxForm = document.getElementById("aiBoxEditForm");

function openAIBoxEditModal(event, aiboxId) {
  event.stopPropagation(); // Ngăn click vào hàng

  // Tìm data (trong thế giới thực, bạn sẽ fetch data này)
  const item = AIBoxMockData.find((box) => box.id === aiboxId);
  if (!item) return;

  // Đổ data vào form
  document.getElementById(
    "aiBoxModalTitle"
  ).textContent = `Chỉnh sửa AIBox (${item.id})`;
  document.getElementById("modalAiboxId").value = item.id;
  document.getElementById("modalAiboxName").value = item.ten;
  document.getElementById("modalAiboxLocation").value = item.vitri;
  document.getElementById("modalAiboxLocation").value = item.camera;
  document.getElementById("modalAiboxBranch").value = item.chinhanh;

  aiBoxModalOverlay.style.display = "block";
}

function closeAIBoxModal() {
  aiBoxModalOverlay.style.display = "none";
}

if (aiBoxForm) {
  aiBoxForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    alert("Đã lưu dữ liệu (xem Console): \n" + JSON.stringify(data));
    console.log("Dữ liệu đã lưu:", data);
    closeAIBoxModal();
    // (Trong thế giới thực, bạn sẽ gọi API và render lại bảng)
  });
}
// Hết Logic Modal AIBox

const handleQuickNotificationClick = (event, item, eventIndex) => {
  event.stopPropagation(); // Ngăn click lan ra

  // Chỉ thực hiện nếu nó CHƯA được đọc
  if (!item.classList.contains("read")) {
    // Đánh dấu đã đọc (thay đổi giao diện)
    item.classList.add("read");

    // Cập nhật số lượng chưa đọc (logic đếm)
    const unreadCountElement = document.getElementById("unreadCount");
    let currentCount = parseInt(unreadCountElement.textContent);

    // Mục Quick View: chỉ giảm nếu chưa từng được click
    if (!item.hasAttribute("data-read")) {
      currentCount = Math.max(0, currentCount - 1);
      unreadCountElement.textContent = currentCount;
      item.setAttribute("data-read", "true"); // Đánh dấu đã click
    }
  }

  // Mở Modal
  showEventDetails(eventIndex);

  // Đóng dropdown
  const dropdown = document.getElementById("notificationDropdown");
  if (dropdown) dropdown.style.display = "none";
};

// SỬA: Logic cho Live Search Bảng Sự kiện Vận hành
function filterEventTable() {
  const input = document.getElementById("eventSearchBox");
  const filter = input.value.toUpperCase();
  const tableBody = document.getElementById("eventFeedTableBody");
  const tr = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const tdId = tr[i].getElementsByTagName("td")[0];
    const tdType = tr[i].getElementsByTagName("td")[1];
    const tdLocation = tr[i].getElementsByTagName("td")[2];

    if (tdId || tdType || tdLocation) {
      const txtValue =
        (tdId.textContent || tdId.innerText) +
        (tdType.textContent || tdType.innerText) +
        (tdLocation.textContent || tdLocation.innerText);

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Logic để lọc Notifications (giả lập)
const filterNotifications = () => {
  const container = document.getElementById("notificationListContainer");
  const filter = document.getElementById("notificationBranchFilter").value;

  container.querySelectorAll(".notification-item").forEach((item) => {
    const branch = item.getAttribute("data-branch");
    if (filter === "all" || branch === filter) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

function handleNotificationClick(element, index) {
  // Đánh dấu đã đọc như bạn đang làm
  element.classList.add("read");

  // === Lưu ID đã click ===
  clickedIds.add(index);

  // === Đổi màu item ===
  element.classList.add("clicked-item");

  // Gọi modal chi tiết
  showNotificationDetails(index);
}

// Khởi chạy khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  const bell = document.getElementById("quickViewBell");
  const dropdown = document.getElementById("notificationDropdown");
  const viewAllLink = document.querySelector(".view-all-link");
  const notificationBranchFilter = document.getElementById(
    "notificationBranchFilter"
  );

  setupSidebarToggle(); // Cài đặt chức năng thu gọn/mở rộng menu sidebar

  // LOGIC DROPDOWN CHUông
  if (bell && dropdown) {
    bell.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });
  }

  document.addEventListener("click", (e) => {
    if (
      dropdown &&
      dropdown.style.display === "block" &&
      !dropdown.contains(e.target) &&
      e.target !== bell
    ) {
      dropdown.style.display = "none";
    }

    // SỬA RESPONSIVE: Đóng menu khi click ra ngoài
    const sidebarMenu = document.getElementById("sidebarMenu");
    const hamburgerButton = document.getElementById("hamburgerButton");
    if (
      sidebarMenu &&
      sidebarMenu.classList.contains("show") &&
      !sidebarMenu.contains(e.target) &&
      e.target !== hamburgerButton
    ) {
      sidebarMenu.classList.remove("show");
    }
  });

  if (viewAllLink) {
    viewAllLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("notifications");
    });
  }

  // GỌI HÀM LỌC CHO TAB NOTIFICATIONS
  if (notificationBranchFilter) {
    notificationBranchFilter.addEventListener("change", filterNotifications);
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = item.getAttribute("data-tab");
      switchTab(tabId);

      // SỬA RESPONSIVE: Tự động đóng menu khi chọn 1 mục
      const sidebarMenu = document.getElementById("sidebarMenu");
      if (sidebarMenu && sidebarMenu.classList.contains("show")) {
        // SỬA: Chỉ đóng nếu click KHÔNG PHẢI là dropdown
        if (!item.closest(".report-links")) {
          sidebarMenu.classList.remove("show");
        }
      }
    });
  });

  // SỬA RESPONSIVE: Gắn sự kiện cho nút Hamburger
  const hamburgerButton = document.getElementById("hamburgerButton");
  const sidebarMenu = document.getElementById("sidebarMenu");
  if (hamburgerButton && sidebarMenu) {
    hamburgerButton.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebarMenu.classList.toggle("show");
    });
  }

  // Mở tab Dashboard Vận hành mặc định khi tải trang
  switchTab("dashboard-operation");
});

// Hàm hiển thị Toast
function showToast(type, icon, title, message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" onclick="closeToast(this)">×</button>
            <div class="toast-progress"></div>
        `;

  container.appendChild(toast);

  setTimeout(() => {
    closeToast(toast.querySelector(".toast-close"));
  }, 30000);
}

// Hàm đóng Toast
function closeToast(btn) {
  const toast = btn.closest(".toast");
  if (!toast) return;

  toast.classList.add("hiding");
  setTimeout(() => {
    toast.remove();
  }, 300);
}

// Cấu hình các loại thông báo
const notificationTemplates = [
  {
    type: "error",
    icon: '<i class="fa-solid fa-bell"></i>',
    iconClass: "icon-event-crash",
    severity: "severity-high",
    title: "Phát hiện lửa",
    camera: "CAM_001",
    locations: [
      "Chi nhánh Hà Nội",
      "Chi nhánh Đà Nẵng",
      "Chi nhánh Tp Hồ Chí Minh",
    ],
  },
  {
    type: "warning",
    icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
    iconClass: "icon-event-offline",
    severity: "severity-medium",
    title: "Xâm nhập khu vực cấm",
    camera: "CAM_001",
    locations: [
      "Chi nhánh Hà Nội",
      "Chi nhánh Đà Nẵng",
      "Chi nhánh Tp Hồ Chí Minh",
    ],
  },
  {
    type: "info",
    icon: '<i class="fa-solid fa-user"></i>',
    iconClass: "icon-event-ppe",
    severity: "severity-low",
    title: "Không mặc áo phản quang",
    camera: "CAM_001",
    locations: ["Nhân viên ID 1024", "Nhân viên ID 2048", "Nhân viên ID 3001"],
  },
];

// Biến đếm để tạo eventIndex unique
let autoNotificationCounter = 1000;

// Hàm tạo thông báo mới
function createNewNotification() {
  // 1. Chọn template và location ngẫu nhiên
  const template =
    notificationTemplates[
      Math.floor(Math.random() * notificationTemplates.length)
    ];
  const location =
    template.locations[Math.floor(Math.random() * template.locations.length)];

  // 2. Lấy thời gian hiện tại
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  // 3. TĂNG SỐ ĐẾM +1
  const unreadCountEl = document.getElementById("unreadCount");
  const unreadTextEl = document.getElementById("unreadText");

  if (unreadCountEl) {
    let count = parseInt(unreadCountEl.textContent) || 0;
    count++;
    unreadCountEl.textContent = count;

    if (unreadTextEl) {
      unreadTextEl.textContent = count;
    }
  }

  // 4. Hiển thị Toast
  showToast(
    template.type,
    template.icon,
    template.title,
    `${location} | ${timeStr}`
  );

  // 5. Thêm vào dropdown
  addNewNotificationToDropdown(template, location, timeStr);

  console.log("🔔 Thông báo mới:", template.title, "-", location);
}

// Hàm thêm thông báo vào dropdown
function addNewNotificationToDropdown(template, location, timeStr) {
  const list = document.getElementById("notificationList");
  if (!list) return;

  autoNotificationCounter++;

  const newItem = document.createElement("div");
  newItem.className = `quick-notification-item ${template.severity}`;
  newItem.onclick = function (e) {
    // Gọi hàm handleQuickNotificationClick CỦA BẠN
    handleQuickNotificationClick(e, this, autoNotificationCounter);
  };

  newItem.innerHTML = `
            <span class="event-icon ${template.iconClass}"></span>
            <span><strong>${template.title}:</strong> ${location} | ${timeStr}</span>
        `;

  // Thêm vào đầu danh sách
  list.insertBefore(newItem, list.firstChild);

  // Giới hạn 5 thông báo
  while (list.children.length > 5) {
    list.removeChild(list.lastChild);
  }
}

// ==========================================
// TỰ ĐỘNG MỖI 2 PHÚT
// ==========================================
setInterval(() => {
  createNewNotification();
}, 120000); // 120000ms = 2 phút

console.log("✅ Hệ thống thông báo tự động đã kích hoạt");
console.log("⏰ Gửi thông báo mỗi 2 phút");
console.log("🧪 Test: gọi createNewNotification() trong Console");

function showEventDetails(btn) {
  const row = btn.closest("tr");
  const table = row.closest("table");

  // Lấy tất cả tiêu đề (th) của bảng hiện tại
  const headers = [...table.querySelectorAll("thead th")].map((th) =>
    th.innerText.trim()
  );

  const cells = row.querySelectorAll("td");
  let detailHtml = "";

  headers.forEach((title, i) => {
    // Bỏ cột “Hành động” vì trong td có nút button
    if (cells[i] && title !== "Hành động") {
      detailHtml += `
                <div style="margin-bottom:8px;">
                    <strong>${title}:</strong> ${cells[i].innerText.trim()}
                </div>
            `;
    }
  });

  document.getElementById("modal-content-body").innerHTML = detailHtml;
  document.getElementById("details-modal").style.display = "flex";
}

// Đóng modal
function closeModal() {
  document.getElementById("details-modal").style.display = "none";
}

// Dữ liệu mẫu
const oilSpillData = [
  {
    id: "SK-2024-001",
    warehouse: "Kho 01 - Xăng",
    camera: "CAM-K01-03",
    aibox: "AIB-001",
    branch: "Hồ Chí Minh",
    time: "2025-11-17 08:23",
    severity: "critical",
    status: "pending",
  },
  {
    id: "SK-2024-002",
    warehouse: "Kho 02 - Dầu Diesel",
    camera: "CAM-K02-01",
    aibox: "AIB-002",
    branch: "Hà Nội",
    time: "2025-11-17 07:45",
    severity: "serious",
    status: "processed",
  },
  {
    id: "SK-2024-003",
    warehouse: "Kho 03 - Dầu DO",
    camera: "CAM-K03-02",
    aibox: "AIB-003",
    branch: "Đà Nẵng",
    time: "2025-11-17 06:12",
    severity: "moderate",
    status: "processed",
  },
];

let oilChartsInitialized = false;

// Khởi tạo biểu đồ
function initOilCharts() {
  if (oilChartsInitialized) return;

  const severityCanvas = document.getElementById("oilSeverityChart");
  const timelineCanvas = document.getElementById("oilTimelineChart");

  if (!severityCanvas || !timelineCanvas || typeof Chart === "undefined") {
    console.error("Canvas hoặc Chart.js không tìm thấy");
    return;
  }

  // Biểu đồ Doughnut
  new Chart(severityCanvas.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: ["Nhẹ", "Trung bình", "Nghiêm trọng", "Rất nghiêm trọng"],
      datasets: [
        {
          data: [20, 15, 9, 3],
          backgroundColor: ["#17a2b8", "#ffc107", "#fd7e14", "#dc3545"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: "70%",
    },
  });

  // Biểu đồ Line
  const hours = [];
  const values = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i + ":00");
    values.push(Math.floor(Math.random() * 5));
  }

  new Chart(timelineCanvas.getContext("2d"), {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: "Số vụ tràn",
          data: values,
          borderColor: "#20c997",
          backgroundColor: "rgba(32, 201, 151, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
        },
      },
    },
  });

  oilChartsInitialized = true;
}

let oilData = []; // QUAN TRỌNG: để ở đầu file

// function populateOilTable(data) {
//     oilData = data; // LƯU DATA CHO HÀM viewOilDetails

//     const tbody = document.getElementById('oilTableBody');
//     if (!tbody) return;

//     tbody.innerHTML = '';

//     const severityClass = {
//         light: 'oil-severity-light',
//         moderate: 'oil-severity-moderate',
//         serious: 'oil-severity-serious',
//         critical: 'Rất nghiêm trọng'
//     };

//     const severityText = {
//         light: 'Nhẹ',
//         moderate: 'Trung bình',
//         serious: 'Nghiêm trọng',
//         critical: 'Rất nghiêm trọng'
//     };

//     data.forEach(item => {

//         const statusText = item.status === "processed" ? "Đã xử lý" : "Chưa xử lý";
//         const statusClass = item.status === "processed" ? "oil-status-processed" : "oil-status-pending";

//         tbody.innerHTML += `
//             <tr>
//                 <td><strong>${item.id}</strong></td>
//                 <td>${item.warehouse}</td>
//                 <td>${item.camera}</td>
//                 <td>${item.aibox}</td>
//                 <td>${item.branch}</td>
//                 <td>${item.time}</td>
//                 <td><span class="oil-severity-badge ${severityClass[item.severity]}">${severityText[item.severity]}</span></td>
//                 <td>${item.area}</td>
//                 <td><span class="oil-status-badge ${statusClass}">${statusText}</span></td>

//                 <td style="display:flex; gap:8px;">
//                     <button class="oil-view-btn" onclick="viewOilDetails('${item.id}')">
//                         <i class="fa-solid fa-eye"></i>
//                     </button>

//                     <button class="oil-delete-btn" onclick="deleteOil('${item.id}')">
//                         <i class="fa-solid fa-trash"></i>
//                     </button>
//                 </td>
//             </tr>
//         `;
//     });
// }

// Áp dụng bộ lọc
function applyOilFilters() {
  console.log("Áp dụng bộ lọc");
  populateOilTableOil(oilSpillData);
}

function viewOilDetails(id) {
  const item = oilData.find((x) => x.id === id);
  const severityText = {
    light: "Nhẹ",
    moderate: "Trung bình",
    serious: "Nghiêm trọng",
    critical: "Rất nghiêm trọng",
  };
  if (!item) return;
  document.getElementById("oilDetailModal").style.display = "block";
  document.getElementById("oilDetailBody").innerHTML = `
        <div><strong>Mã:</strong> ${item.id}</div>
        <div><strong>Kho:</strong> ${item.warehouse}</div>
        <div><strong>Camera:</strong> ${item.camera}</div>
        <div><strong>AICam:</strong> ${item.aibox}</div>
        <div><strong>Chi nhánh:</strong> ${item.branch}</div>
        <div><strong>Thời gian:</strong> ${item.time}</div>
        <div><strong>Mức độ:</strong> ${severityText[item.severity]}</div>
        <div><strong>Khu vực:</strong> ${item.area}</div>
        <div><strong>Trạng thái:</strong> ${item.status}</div>
    `;

  document.getElementById("oilDetailModal").style.display = "flex";
}

window.onclick = function (e) {
  const modal = document.getElementById("oilDetailModal");
  if (e.target === modal) modal.style.display = "none";
};

function closeOilDetailModal() {
  document.getElementById("oilDetailModal").style.display = "none";
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.style.display = "none";
    });

    const tabId = this.getAttribute("data-tab");
    const tabToShow = document.getElementById(tabId);
    if (tabToShow) {
      tabToShow.style.display = "block"; // 🔥 Quan trọng: MutationObserver sẽ bắt được
    }
  });
});

// ======================================================
//  OIL SPILL MODULE - KHÔNG ẢNH HƯỞNG JS KHÁC
// ======================================================
(function () {
  // ================================
  // 1. DATA MẪU
  // ================================
  const oilSpillData = [
    {
      id: "SK-2024-001",
      warehouse: "Kho 01 - Xăng",
      camera: "CAM-K01-03",
      aibox: "AIB-001",
      branch: "Hồ Chí Minh",
      time: "2025-11-17 08:23",
      severity: "critical",
      area: 12.5,
      status: "Đã xử lý",
    },
    {
      id: "SK-2024-002",
      warehouse: "Kho 02 - Dầu Diesel",
      camera: "CAM-K02-01",
      aibox: "AIB-002",
      branch: "Hà Nội",
      time: "2025-11-17 07:45",
      severity: "serious",
      area: 8.2,
      status: "Đang xử lý",
    },
    {
      id: "SK-2024-003",
      warehouse: "Kho 03 - Dầu DO",
      camera: "CAM-K03-02",
      aibox: "AIB-003",
      branch: "Đà Nẵng",
      time: "2025-11-17 06:12",
      severity: "moderate",
      area: 5.4,
      status: "Chưa xử lý",
    },
    {
      id: "SK-2024-004",
      warehouse: "Kho 01 - Xăng",
      camera: "CAM-K01-01",
      aibox: "AIB-001",
      branch: "Hồ Chí Minh",
      time: "2025-11-17 05:33",
      severity: "light",
      area: 2.1,
      status: "Chưa xử lý",
    },
  ];

  // ================================
  // 2. HIỂN THỊ BẢNG
  // ================================
  function populateOilTableOil(data) {
    oilData = data; // <-- BẮT BUỘC CÓ DÒNG NÀY
    const tbody = document.getElementById("oilTableBody");
    if (!tbody) return;

    tbody.innerHTML = "";

    const severityText = {
      light: "Nhẹ",
      moderate: "Trung bình",
      serious: "Nghiêm trọng",
      critical: "Rất nghiêm trọng",
    };

    data.forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td><strong>${item.id}</strong></td>
                <td>${item.warehouse}</td>
                <td>${item.camera}</td>
                <td>${item.aibox}</td>
                <td>${item.branch}</td>
                <td>${item.time}</td>
                <td>${severityText[item.severity]}</td>
                <td>${item.status}</td>
                <td>

                <div class="action-group">
                    <button data-oil-id="${
                      item.id
                    }" class="oil-view-btn" onclick="viewOilDetails('${
        item.id
      }')">
                    <i class="fa-solid fa-eye"></i>
                    </button>

                    <button class="oil-delete-btn" onclick="deleteOil('${
                      item.id
                    }')">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                </td>
            `;
      tbody.appendChild(row);
    });

    // attach event click detail
    // document.querySelectorAll(".oil-view-btn").forEach(btn => {
    //     btn.addEventListener("click", () => {
    //         alert("Xem chi tiết sự kiện: " + btn.dataset.oilId);
    //     });
    // });
  }

  // ================================
  // 3. BỘ LỌC
  // ================================
  function applyOilFilters() {
    const branch = document.getElementById("oilBranchFilter")?.value || "";
    const warehouse =
      document.getElementById("oilWarehouseFilter")?.value || "";
    const status = document.getElementById("oilStatusFilter")?.value || "";
    const severity = document.getElementById("oilSeverityFilter")?.value || "";
    const dateFrom = document.getElementById("oilDateFrom")?.value || "";
    const dateTo = document.getElementById("oilDateTo")?.value || "";

    let filtered = oilSpillData.filter((item) => {
      return (
        (!branch || item.branch.includes(branch)) &&
        (!warehouse || item.warehouse.includes(warehouse)) &&
        (!status || item.status === status) &&
        (!severity || item.severity === severity) &&
        item.time >= dateFrom &&
        item.time <= dateTo
      );
    });

    populateOilTable(filtered);
  }

  // ================================
  // 4. TÌM KIẾM
  // ================================
  function setupSearch() {
    const searchInput = document.getElementById("oilSearchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", function (e) {
      const term = e.target.value.toLowerCase();

      const filtered = oilSpillData.filter(
        (item) =>
          item.id.toLowerCase().includes(term) ||
          item.camera.toLowerCase().includes(term) ||
          item.warehouse.toLowerCase().includes(term)
      );

      populateOilTable(filtered);
    });
  }

  // ================================
  // 5. BIỂU ĐỒ
  // ================================
  let oilChartsInitialized = false;

  function initOilCharts() {
    if (oilChartsInitialized) return;

    const ctx1 = document.getElementById("oilSeverityChart");
    const ctx2 = document.getElementById("oilTimelineChart");
    if (!ctx1 || !ctx2) return;

    new Chart(ctx1.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: ["Nhẹ", "Trung bình", "Nghiêm trọng", "Rất nghiêm trọng"],
        datasets: [
          {
            data: [20, 15, 9, 3],
            backgroundColor: ["#17a2b8", "#ffc107", "#fd7e14", "#dc3545"],
            borderWidth: 0,
          },
        ],
      },
      options: { cutout: "70%", plugins: { legend: { display: false } } },
    });

    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const values = hours.map(() => Math.floor(Math.random() * 6));

    new Chart(ctx2.getContext("2d"), {
      type: "line",
      data: {
        labels: hours,
        datasets: [{ data: values, borderColor: "#20c997", fill: true }],
      },
      options: { plugins: { legend: { display: false } } },
    });

    oilChartsInitialized = true;
  }

  // ================================
  // 6. MUTATION - Chỉ chạy khi tab mở
  // ================================
  function watchTab() {
    const target = document.getElementById("oil-spill-page");
    if (!target) return;

    const observer = new MutationObserver(() => {
      if (target.style.display !== "none" && !oilChartsInitialized) {
        setTimeout(() => {
          initOilCharts();
          populateOilTableOil(oilSpillData);
          setupSearch();
        }, 150);
      }
    });

    observer.observe(target, { attributes: true, attributeFilter: ["style"] });
  }

  // ================================
  // 7. AUTO INIT
  // ================================
  document.addEventListener("DOMContentLoaded", () => {
    watchTab();
  });
})();

// Sample data
const sampleData = [
  {
    id: "SK001",
    plate: "51A-12345",
    camera: "CAM-01",
    aibox: "AIB-001",
    branch: "Chi nhánh HCM",
    time: "18/11/2025 08:30",
    severity: "Nghiêm trọng",
    status: "Chưa xử lý",
  },
  {
    id: "SK002",
    plate: "59B-67890",
    camera: "CAM-02",
    aibox: "AIB-002",
    branch: "Chi nhánh Hà Nội",
    time: "18/11/2025 09:15",
    severity: "Trung bình",
    status: "Đã xử lý",
  },
  {
    id: "SK003",
    plate: "43C-11223",
    camera: "CAM-03",
    aibox: "AIB-001",
    branch: "Chi nhánh Đà Nẵng",
    time: "18/11/2025 10:00",
    severity: "Nhẹ",
    status: "Đã xử lý",
  },
  {
    id: "SK004",
    plate: "51A-33445",
    camera: "CAM-01",
    aibox: "AIB-003",
    branch: "Chi nhánh HCM",
    time: "18/11/2025 11:20",
    severity: "Rất nghiêm trọng",
    status: "Chưa xử lý",
  },
];

// Render table
function renderTable(data) {
  const tbody = document.getElementById("tableBody");
  if (!tbody) return; // Bảo vệ nếu tab chưa active

  tbody.innerHTML = "";

  data.forEach((item) => {
    const severityClass = {
      Nhẹ: "severity-light",
      "Trung bình": "severity-medium",
      "Nghiêm trọng": "severity-serious",
      "Rất nghiêm trọng": "severity-critical",
    }[item.severity];

    const statusClass =
      item.status === "Đã xử lý" ? "status-resolved" : "status-pending";

    const row = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.plate}</td>
                    <td>${item.camera}</td>
                    <td>${item.aibox}</td>
                    <td>${item.branch}</td>
                    <td>${item.time}</td>
                    <td>${item.severity}</td>
                    <td>${item.status}</td>
                <td style="white-space: nowrap;">
                    <!-- Nút xem chi tiết -->
                    <button 
                        onclick="viewDetail('${item.id}')"
                        style="
                            background: none !important;
                            background-color: #28a745 !important;
                            border: none !important;
                            width: 35px !important;
                            height: 35px !important;
                            border-radius: 6px !important;
                            cursor: pointer !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            margin-right: 6px !important;
                        "
                    >
                        <i class="fas fa-eye" style="color: #fff !important; font-size: 18px;"></i>
                    </button>



                    <!-- Nút xóa -->
                    <button 
                        onclick="deleteItem('${item.id}')"
                        style="
                            background: none !important;
                            background-color: #dc3545 !important;
                            border: none !important;
                            width: 35px !important;
                            height: 35px !important;
                            border-radius: 6px !important;
                            cursor: pointer !important;
                            display: inline-flex ;
                            align-items: center !important;
                            justify-content: center !important;
                        "
                    >
                        <i class="fas fa-trash" style="color: #fff !important; font-size: 18px;"></i>
                    </button>


                </td>

                </tr>
            `;
    tbody.innerHTML += row;
  });
}

// View detail function (Global access required if called from HTML onclick)
window.viewDetail = function (id) {
  const item = sampleData.find((d) => d.id === id);
  if (item) {
    alert(
      `Chi tiết sự kiện ${id}:\n\nBiển số: ${item.plate}\nCamera: ${item.camera}\nAIBox: ${item.aibox}\nChi nhánh: ${item.branch}\nThời điểm: ${item.time}\nMức độ: ${item.severity}\nTrạng thái: ${item.status}`
    );
  }
};

// Filter function (Global access required for event listeners)
window.applyFilters = function () {
  let filtered = [...sampleData];

  const branchSelect = document.getElementById("branchFilter");
  const statusSelect = document.getElementById("statusFilter");
  const severitySelect = document.getElementById("severityFilter");
  const plateInput = document.getElementById("plateSearch");
  const tableSearchInput = document.getElementById("tableSearch");

  // Kiểm tra sự tồn tại của các phần tử trước khi sử dụng
  if (
    !branchSelect ||
    !statusSelect ||
    !severitySelect ||
    !plateInput ||
    !tableSearchInput
  )
    return;

  const branch = branchSelect.value;
  const status = statusSelect.value;
  const severity = severitySelect.value;
  const plate = plateInput.value.toLowerCase();
  const search = tableSearchInput.value.toLowerCase();

  if (branch !== "Tất cả chi nhánh") {
    filtered = filtered.filter((item) => item.branch === branch);
  }

  if (status !== "Tất cả trạng thái") {
    filtered = filtered.filter((item) => item.status === status);
  }

  if (severity !== "Tất cả mức độ") {
    filtered = filtered.filter((item) => item.severity === severity);
  }

  if (plate) {
    filtered = filtered.filter((item) =>
      item.plate.toLowerCase().includes(plate)
    );
  }

  if (search) {
    filtered = filtered.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search)
      )
    );
  }

  renderTable(filtered);
  updateCharts(filtered); // Cập nhật biểu đồ theo dữ liệu lọc
};

// Hàm cập nhật biểu đồ
let donutChart, lineChart;
function updateCharts(data) {
  // Cập nhật Donut Chart
  const severityCounts = data.reduce((acc, item) => {
    acc[item.severity] = (acc[item.severity] || 0) + 1;
    return acc;
  }, {});

  if (donutChart) {
    donutChart.data.datasets[0].data = [
      severityCounts["Nhẹ"] || 0,
      severityCounts["Trung bình"] || 0,
      severityCounts["Nghiêm trọng"] || 0,
      severityCounts["Rất nghiêm trọng"] || 0,
    ];
    donutChart.update();
  }

  // Cập nhật Line Chart (Đơn giản hóa cho ví dụ)
  // Trong môi trường thực tế, bạn sẽ tính toán số lượng theo giờ từ dữ liệu.
  // Tạm thời giữ nguyên dữ liệu mẫu để tránh phức tạp hóa.
  // if (lineChart) { lineChart.update(); }
}

// Initialize Charts (Chỉ tạo Chart một lần)
function initializeCharts() {
  const donutCtx = document.getElementById("donutChart");
  const lineCtx = document.getElementById("lineChart");

  if (donutCtx && !donutChart) {
    donutChart = new Chart(donutCtx.getContext("2d"), {
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
  }

  if (lineCtx && !lineChart) {
    lineChart = new Chart(lineCtx.getContext("2d"), {
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
  }
}

// Setup function to be called when the tab is switched to
window.setupOilSpillMonitor = function () {
  if (!document.getElementById("oil-spill-monitor")) return;

  // Add event listeners (Đảm bảo chỉ thêm 1 lần)
  document
    .getElementById("branchFilter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("statusFilter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("severityFilter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("areaFilter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("plateSearch")
    .addEventListener("input", applyFilters);
  document
    .getElementById("tableSearch")
    .addEventListener("input", applyFilters);

  // Initialize charts
  initializeCharts();
  // Initial render
  renderTable(sampleData);

  // Set default date range (last 7 days)
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const endDate = document.getElementById("endDate");
  const startDate = document.getElementById("startDate");
  if (endDate) endDate.valueAsDate = today;
  if (startDate) startDate.valueAsDate = lastWeek;
};
// Tự động setup khi trang load nếu không có cơ chế chuyển tab
// setupOilSpillMonitor();

// Oil Spill Monitor JS
const initChartshandler = function () {
  // Sample data for table
  const sampleData = [
    {
      id: "SK001",
      plate: "59A-12345",
      camera: "CAM-A01",
      aibox: "AIBOX-01",
      branch: "HCM",
      time: "19/11/2025 14:23",
      severity: "serious",
      severityText: "Nghiêm trọng",
      amount: "2.5L",
      status: "pending",
      statusText: "Chưa xử lý",
    },
    {
      id: "SK002",
      plate: "30G-67890",
      camera: "CAM-B02",
      aibox: "AIBOX-02",
      branch: "Hà Nội",
      time: "19/11/2025 13:45",
      severity: "moderate",
      severityText: "Trung bình",
      amount: "1.2L",
      status: "resolved",
      statusText: "Đã xử lý",
    },
    {
      id: "SK003",
      plate: "51F-11111",
      camera: "CAM-C03",
      aibox: "AIBOX-03",
      branch: "Đà Nẵng",
      time: "19/11/2025 12:30",
      severity: "light",
      severityText: "Nhẹ",
      amount: "0.5L",
      status: "resolved",
      statusText: "Đã xử lý",
    },
  ];

  // Render table
  function renderTable(data) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = data
      .map(
        (item) => `
            <tr>
                <td>${item.id}</td>
                <td>${item.plate}</td>
                <td>${item.camera}</td>
                <td>${item.aibox}</td>
                <td>${item.branch}</td>
                <td>${item.time}</td>
                <td><span class="badge badge-${item.severity}">${
          item.severityText
        }</span></td>
                <td>${item.amount}</td>
                <td><span class="badge badge-${item.status}">${
          item.statusText
        }</span></td>
                <td>
                    <button class="btn btn-view" onclick="viewDetail('${
                      item.id
                    }')">Xem</button>
                    ${
                      item.status === "pending"
                        ? `<button class="btn btn-action" onclick="handleAction('${item.id}')">Xử lý</button>`
                        : ""
                    }
                </td>
            </tr>
        `
      )
      .join("");
  }

  // Initialize charts
  function initCharts() {
    // Donut Chart
    const donutCtx = document.getElementById("donutChart").getContext("2d");
    new Chart(donutCtx, {
      type: "doughnut",
      data: {
        labels: ["Nhẹ", "Trung bình", "Nghiêm trọng", "Rất nghiêm trọng"],
        datasets: [
          {
            data: [15, 25, 35, 25],
            backgroundColor: ["#3b82f6", "#fbbf24", "#f97316", "#ef4444"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { padding: 15, font: { size: 12 } },
          },
        },
      },
    });

    // Line Chart
    const lineCtx = document.getElementById("lineChart").getContext("2d");
    new Chart(lineCtx, {
      type: "line",
      data: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
        datasets: [
          {
            label: "Số vụ tràn",
            data: [2, 3, 5, 4, 6, 3],
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
      },
    });
  }

  // Search functionality
  document
    .getElementById("tableSearch")
    .addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      const filteredData = sampleData.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchTerm)
        )
      );
      renderTable(filteredData);
    });

  // Global functions
  window.viewDetail = function (id) {
    alert(`Xem chi tiết sự kiện: ${id}`);
  };

  window.handleAction = function (id) {
    if (confirm(`Xác nhận xử lý sự kiện ${id}?`)) {
      alert('Đã chuyển trạng thái sang "Đang xử lý"');
    }
  };

  // Initialize
  renderTable(sampleData);
  initCharts();
};
initChartshandler();

function showDataWindow() {
  document.getElementById("dataWindow").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeDataWindow() {
  document.getElementById("dataWindow").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function downloadPDF() {
  // Code xử lý download PDF của bạn ở đây
  alert("Đang tải file PDF...");
  // window.location.href = 'path/to/your/file.pdf';
}

function downloadExcel() {
  // Code xử lý download Excel của bạn ở đây
  alert("Đang tải file Excel...");
  // window.location.href = 'path/to/your/file.xlsx';
}

function toggleData(tableId) {
  const table = document.getElementById(tableId);
  const button = event.target.closest("button");

  if (table.style.display === "none") {
    table.style.display = "block";
    button.innerHTML = '<i class="fas fa-chart-line"></i> Ẩn dữ liệu';
  } else {
    table.style.display = "none";
    button.innerHTML = '<i class="fas fa-table"></i> Xem dữ liệu';
  }
}

function updateCharts() {
  // Logic cập nhật biểu đồ khi thay đổi bộ lọc
  console.log("Đang cập nhật biểu đồ...");
}

function toggleReportSection(element) {
  // toggle class active cho header
  element.classList.toggle("active");

  // element kế tiếp phải là .report-links
  const links = element.nextElementSibling;
  if (links && links.classList.contains("report-links")) {
    links.classList.toggle("active-section");
  }
}
