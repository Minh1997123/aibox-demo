const cableTunnel = document.getElementById("cable-tunnel");
const historyData = document.getElementById("history-data");
const deviceList = document.getElementById("device-list");
const categoryManagement = document.getElementById("category-management");
const contentBody = document.getElementsByClassName("content-body")[0];
// data
const cableTunnelDataList = [
  {
    ham_id: 1,
    current_sensors: [
      {
        current_chn1: 22,
        current_chn2: 25,
        current_chn3: 21,
        current_chn1_total: 68,
        firmware_version: "v1.0.0",
        device_status: 1,
      },
      {
        current_chn1: 31,
        current_chn2: 29,
        current_chn3: 33,
        current_chn1_total: 93,
        firmware_version: "v1.0.1",
        device_status: 1,
      },
    ],
    water_sensor: {
      battery: 98,
      temperature: 26.1,
      distance: 1850,
      position: "normal",
      device_status: "on",
      firmware_version: "v1.0.0",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H1-T1",
        battery: 96,
        temperature: 27.4,
        device_status: "on",
        firmware_version: "v1.2.0",
      },
      {
        temp_sensor_id: "H1-T2",
        battery: 94,
        temperature: 28.0,
        device_status: "on",
        firmware_version: "v1.2.0",
      },
    ],
  },
  {
    ham_id: 2,
    current_sensors: [
      {
        current_chn1: 40,
        current_chn2: 41,
        current_chn3: 39,
        current_chn1_total: 120,
        firmware_version: "v1.0.2",
        device_status: 1,
      },
      {
        current_chn1: 44,
        current_chn2: 42,
        current_chn3: 46,
        current_chn1_total: 132,
        device_status: 1,
        firmware_version: "v1.1.0",
      },
    ],
    water_sensor: {
      battery: 88,
      temperature: 27.9,
      distance: 1300,
      position: "normal",
      device_status: "on",
      firmware_version: "v1.0.1",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H2-T1",
        battery: 89,
        temperature: 30.2,
        device_status: "on",
        firmware_version: "v1.1.1",
      },
      {
        temp_sensor_id: "H2-T2",
        battery: 87,
        temperature: 29.7,
        device_status: "on",
        firmware_version: "v1.1.1",
      },
    ],
  },
  {
    ham_id: 3,
    current_sensors: [
      {
        current_chn1: 12,
        current_chn2: 14,
        current_chn3: 11,
        current_chn1_total: 37,
        device_status: 1,
        firmware_version: "v1.0.0",
      },
      {
        current_chn1: 18,
        current_chn2: 19,
        current_chn3: 17,
        current_chn1_total: 54,
        device_status: 0,
        firmware_version: "v1.0.0",
      },
    ],
    water_sensor: {
      battery: 70,
      temperature: 25.8,
      distance: 2400,
      position: "normal",
      device_status: "off",
      firmware_version: "v1.0.2",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H3-T1",
        battery: 72,
        temperature: 25.5,
        device_status: "on",
        firmware_version: "v1.0.0",
      },
      {
        temp_sensor_id: "H3-T2",
        battery: 69,
        temperature: 26.1,
        device_status: "on",
        firmware_version: "v1.0.0",
      },
    ],
  },
  {
    ham_id: 4,
    current_sensors: [
      {
        current_chn1: 55,
        current_chn2: 52,
        current_chn3: 57,
        current_chn1_total: 164,
        device_status: 1,
        firmware_version: "v1.0.3",
      },
      {
        current_chn1: 61,
        current_chn2: 59,
        current_chn3: 62,
        current_chn1_total: 182,
        device_status: 1,
        firmware_version: "v1.1.0",
      },
    ],
    water_sensor: {
      battery: 93,
      temperature: 28.3,
      distance: 1100,
      position: "normal",
      device_status: "on",
      firmware_version: "v1.0.0",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H4-T1",
        battery: 90,
        temperature: 31.1,
        device_status: "on",
        firmware_version: "v1.2.1",
      },
      {
        temp_sensor_id: "H4-T2",
        battery: 88,
        temperature: 30.5,
        device_status: "on",
        firmware_version: "v1.2.1",
      },
    ],
  },
  {
    ham_id: 5,
    current_sensors: [
      {
        current_chn1: 7,
        current_chn2: 6,
        current_chn3: 8,
        current_chn1_total: 21,
        device_status: 1,
        firmware_version: "v1.0.0",
      },
      {
        current_chn1: 11,
        current_chn2: 10,
        current_chn3: 12,
        current_chn1_total: 33,
        device_status: 1,
        firmware_version: "v1.0.0",
      },
    ],
    water_sensor: {
      battery: 99,
      temperature: 26.5,
      distance: 3000,
      position: "normal",
      device_status: "on",
      firmware_version: "v1.0.2",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H5-T1",
        battery: 97,
        temperature: 27.2,
        device_status: "on",
        firmware_version: "v1.2.0",
      },
      {
        temp_sensor_id: "H5-T2",
        battery: 96,
        temperature: 27.9,
        device_status: "on",
        firmware_version: "v1.2.0",
      },
    ],
  },
  {
    ham_id: 6,
    current_sensors: [
      {
        current_chn1: 33,
        current_chn2: 32,
        current_chn3: 35,
        current_chn1_total: 100,
        device_status: 1,
        firmware_version: "v1.0.1",
      },
      {
        current_chn1: 36,
        current_chn2: 34,
        current_chn3: 37,
        current_chn1_total: 107,
        device_status: 1,
        firmware_version: "v1.0.2",
      },
    ],
    water_sensor: {
      battery: 80,
      temperature: 27.5,
      distance: 1500,
      position: "tilted",
      device_status: "on",
      firmware_version: "v1.0.0",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H6-T1",
        battery: 82,
        temperature: 29.1,
        device_status: "on",
        firmware_version: "v1.1.5",
      },
      {
        temp_sensor_id: "H6-T2",
        battery: 80,
        temperature: 29.6,
        device_status: "on",
        firmware_version: "v1.1.5",
      },
    ],
  },
  {
    ham_id: 7,
    current_sensors: [
      {
        current_chn1: 50,
        current_chn2: 48,
        current_chn3: 49,
        current_chn1_total: 147,
        device_status: 1,
        firmware_version: "v1.2.0",
      },
      {
        current_chn1: 52,
        current_chn2: 53,
        current_chn3: 51,
        current_chn1_total: 156,
        device_status: 1,
        firmware_version: "v1.2.1",
      },
    ],
    water_sensor: {
      battery: 90,
      temperature: 27.2,
      distance: 1400,
      position: "normal",
      device_status: "on",
      firmware_version: "v1.0.1",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H7-T1",
        battery: 92,
        temperature: 30.1,
        device_status: "on",
        firmware_version: "v1.3.0",
      },
      {
        temp_sensor_id: "H7-T2",
        battery: 91,
        temperature: 29.8,
        device_status: "on",
        firmware_version: "v1.3.0",
      },
    ],
  },
  {
    ham_id: 8,
    current_sensors: [
      {
        current_chn1: 16,
        current_chn2: 18,
        current_chn3: 17,
        current_chn1_total: 51,
        device_status: 0,
        firmware_version: "v1.0.0",
      },
      {
        current_chn1: 20,
        current_chn2: 21,
        current_chn3: 22,
        current_chn1_total: 63,
        device_status: 1,
        firmware_version: "v1.0.2",
      },
    ],
    water_sensor: {
      battery: 74,
      temperature: 25.7,
      distance: 2500,
      position: "normal",
      device_status: "off",
      firmware_version: "v1.0.0",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H8-T1",
        battery: 70,
        temperature: 24.8,
        device_status: "on",
        firmware_version: "v1.0.0",
      },
      {
        temp_sensor_id: "H8-T2",
        battery: 69,
        temperature: 25.3,
        device_status: "on",
        firmware_version: "v1.0.0",
      },
    ],
  },
  {
    ham_id: 9,
    current_sensors: [
      {
        current_chn1: 60,
        current_chn2: 62,
        current_chn3: 63,
        current_chn1_total: 185,
        device_status: 1,
        firmware_version: "v1.2.1",
      },
      {
        current_chn1: 67,
        current_chn2: 65,
        current_chn3: 66,
        current_chn1_total: 198,
        device_status: 1,
        firmware_version: "v1.3.0",
      },
    ],
    water_sensor: {
      battery: 95,
      temperature: 28.0,
      distance: 900,
      position: "normal",
      device_status: "on",
      firmware_version: "v1.0.3",
    },
    temp_sensors: [
      {
        temp_sensor_id: "H9-T1",
        battery: 93,
        temperature: 31.2,
        device_status: "on",
        firmware_version: "v1.2.4",
      },
      {
        temp_sensor_id: "H9-T2",
        battery: 92,
        temperature: 30.9,
        device_status: "on",
        firmware_version: "v1.2.4",
      },
    ],
  },
];
const historyDataList = [
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN1-T12",
    ten_lo: "HN1 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "31.5°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN1-T12",
    ten_lo: "HN1 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "32.1°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN2-T12",
    ten_lo: "HN2 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "30.8°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN2-T12",
    ten_lo: "HN2 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "31.2°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN3-T12",
    ten_lo: "HN3 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "32.3°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN3-T12",
    ten_lo: "HN3 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "32.6°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN4-T12",
    ten_lo: "HN4 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "29.4°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN4-T12",
    ten_lo: "HN4 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "29.9°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN5-T12",
    ten_lo: "HN5 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "30.1°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN5-T12",
    ten_lo: "HN5 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "30.6°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN6-T12",
    ten_lo: "HN6 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "33.2°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN6-T12",
    ten_lo: "HN6 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "33.7°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN7-T12",
    ten_lo: "HN7 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "28.9°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN7-T12",
    ten_lo: "HN7 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "29.3°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN8-T12",
    ten_lo: "HN8 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "32.0°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN8-T12",
    ten_lo: "HN8 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "32.4°C",
    thoi_gian: "2025-11-27 12:00:02",
  },

  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN9-T12",
    ten_lo: "HN9 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "30.4°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
  {
    tuyen:
      "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M",
    ten_ham: "HN9-T12",
    ten_lo: "HN9 T12 - 18T11.4-E1.30",
    ten_thiet_bi: "Cảm biến nhiệt độ",
    tinh_trang: "Hoạt động",
    gia_tri: "30.9°C",
    thoi_gian: "2025-11-27 12:00:02",
  },
];

// thiết lập dữ liệu cho biểu đồ
const chartCurrentSensors = {
  type: "line",
  data: {},
};
const chartWaterSensor = {
  type: "line",
  data: {},
};
const chartTempSensors = {
  type: "line",
  data: {},
};
const chartCurrentSensorsHandler = function (data) {
  const newChart = new Chart();
};
const chartTempSensorsHandler = function (data) {
  const newChart = new Chart();
};
const chartWaterSensorHandler = function (data) {
  const newChart = new Chart();
};

// nội dung html
// html cho tab cable tunnel
const htmlCableTunnel = '<div classname="cable-tunnel"></div>';
// html cho tab history data
const historyDataTableBodyHandler = function () {
  let row = "";
  historyDataList.forEach((item) => {
    const rowCurrent = `
                        <tr>
                        <td>${item.tuyen}</td>
                        <td>${item.ten_ham}</td>
                        <td>${item.ten_lo}</td>
                        <td>${item.ten_thiet_bi}</td>
                        <td>${item.tinh_trang}</td>
                        <td>${item.gia_tri}</td>
                        <td>${item.thoi_gian}</td>
                        </tr>
                        `;
    row = row + rowCurrent;
  });
  return row;
};
const htmlHistoryData = `
<div class="history_data tab-content" id="historyDataTab">
        <div class="filter-section">
            <div class="filter-grid">
                <div class="filter-item">
                    <label>Chi nhánh:</label>
                    <select id="branchFilter">
                        <option value="">Tất cả chi nhánh</option>
                        <option value="hn">Hà Nội</option>
                        <option value="hcm">Hồ Chí Minh</option>
                        <option value="dn">Đà Nẵng</option>
                    </select>
                </div>

                <div class="filter-item">
                    <label>Khu vực:</label>
                    <select id="areaFilter">
                        <option value="">Tất cả khu vực</option>
                        <option value="warehouse">Kho hàng</option>
                        <option value="office">Văn phòng</option>
                        <option value="production">Sản xuất</option>
                        <option value="parking">Bãi đỗ xe</option>
                    </select>
                </div>

                <div class="filter-item">
                    <label>Mức độ:</label>
                    <select id="severityFilter">
                        <option value="">Tất cả mức độ</option>
                        <option value="warning">Cảnh báo</option>
                        <option value="danger">Nguy hiểm</option>
                        <option value="critical">Rất nguy hiểm</option>
                    </select>
                </div>

                <div class="filter-item">
                    <label>Khoảng thời gian:</label>
                    <div class="date-range">
                        <input type="date" id="startDate" value="2025-11-12">
                        <span>đến</span>
                        <input type="date" id="endDate" value="2025-11-19">
                    </div>
                </div>
            </div>
        </div>
                    <table>
                        <thead>
                            <tr><th>Tuyến</th><th>Tên Hầm</th><th>Tên Lộ</th><th>Tên thiết bị cảm biến</th><th>Tình trạng</th><th>giá trị</th><th>Thời gian</th></tr>
                        </thead>
                        <tbody id=historyDataTableBody">
                        ${historyDataTableBodyHandler()}
                        </tbody>
                    </table>
</div>`;
contentBody.innerHTML = contentBody.innerHTML + htmlHistoryData;
// html cho tab device list
const htmlDeviceList = '<div classname="device_list"></div>';
// html cho tab category management
const htmlCategoryManagement = '<div classname="category_management"></div>';

historyData.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.remove("active");
  });
  // hieenr thi tab history data
  const historyDataTab = document.getElementById("historyDataTab");
  historyDataTab.style.display = "block";
});
