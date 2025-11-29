const cableTunnel = document.getElementById("cable-tunnel");
const historyData = document.getElementById("history-data");
const deviceList = document.getElementById("device-list");
const waterLevel = document.getElementById("water-level");
const categoryManagement = document.getElementById("category-management");
const contentBody = document.getElementsByClassName("content-body")[0];
// data
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
// template
const templateSensorsList = [
  {
    tempSensors: [
      {
        temp_sensor_id: "H1-T1",
        temperature: 27.4,
        battery: 98,
        device_status: "on",
      },
      {
        temp_sensor_id: "H1-T2",
        temperature: 28.0,
        battery: 97,
        device_status: "on",
      },
    ],
    time: "11-27 00",
  },

  {
    tempSensors: [
      {
        temp_sensor_id: "H1-T1",
        temperature: 27.7,
        battery: 97,
        device_status: "on",
      },
      {
        temp_sensor_id: "H1-T2",
        temperature: 28.2,
        battery: 96,
        device_status: "on",
      },
    ],
    time: "11-27 03",
  },

  {
    tempSensors: [
      {
        temp_sensor_id: "H1-T1",
        temperature: 28.0,
        battery: 96,
        device_status: "on",
      },
      {
        temp_sensor_id: "H1-T2",
        temperature: 28.4,
        battery: 95,
        device_status: "on",
      },
    ],
    time: "11-27 06",
  },

  {
    tempSensors: [
      {
        temp_sensor_id: "H1-T1",
        temperature: 28.2,
        battery: 95,
        device_status: "on",
      },
      {
        temp_sensor_id: "H1-T2",
        temperature: 28.6,
        battery: 94,
        device_status: "on",
      },
    ],
    time: "11-27 09",
  },

  {
    tempSensors: [
      {
        temp_sensor_id: "H1-T1",
        temperature: 28.5,
        battery: 94,
        device_status: "on",
      },
      {
        temp_sensor_id: "H1-T2",
        temperature: 28.8,
        battery: 93,
        device_status: "on",
      },
    ],
    time: "11-27 12",
  },
];
// dong dien
const currentSensoreList = [
  {
    ham_id: 1,
    current_sensors: {
      sensor_id: "H1-C1",
      current_chn1: 22,
      current_chn2: 25,
      current_chn3: 21,
      current_total: 68,
    },
    time: "11-27 00",
  },
  {
    ham_id: 1,
    current_sensors: {
      sensor_id: "H1-C1",
      current_chn1: 23,
      current_chn2: 26,
      current_chn3: 22,
      current_total: 71,
    },
    time: "11-27 03",
  },
  {
    ham_id: 1,
    current_sensors: {
      sensor_id: "H1-C1",
      current_chn1: 24,
      current_chn2: 27,
      current_chn3: 23,
      current_total: 74,
    },
    time: "11-27 06",
  },
  {
    ham_id: 1,
    current_sensors: {
      sensor_id: "H1-C1",
      current_chn1: 25,
      current_chn2: 27,
      current_chn3: 24,
      current_total: 76,
    },
    time: "11-27 09",
  },

  {
    ham_id: 1,
    current_sensors: {
      sensor_id: "H1-C1",
      current_chn1: 26,
      current_chn2: 28,
      current_chn3: 25,
      current_total: 79,
    },
    time: "11-27 12",
  },
];
// muc nuoc
const waterSensorList = [
  {
    ham_id: 1,
    water_sensor: {
      sensor_id: "H1-W1",
      distance: 1850,
      battery: 98,
      temperature: 26.1,
      device_status: "on",
    },
    time: "11-27 00",
  },
  {
    ham_id: 1,
    water_sensor: {
      sensor_id: "H1-W1",
      distance: 1846,
      battery: 97,
      temperature: 26.2,
      device_status: "on",
    },
    time: "11-27 03",
  },
  {
    ham_id: 1,
    water_sensor: {
      sensor_id: "H1-W1",
      distance: 1843,
      battery: 97,
      temperature: 26.3,
      device_status: "on",
    },
    time: "11-27 06",
  },
  {
    ham_id: 1,
    water_sensor: {
      sensor_id: "H1-W1",
      distance: 1839,
      battery: 96,
      temperature: 26.5,
      device_status: "on",
    },
    time: "11-27 09",
  },
  {
    ham_id: 1,
    water_sensor: {
      sensor_id: "H1-W1",
      distance: 1836,
      battery: 95,
      temperature: 26.7,
      device_status: "on",
    },
    time: "11-27 12",
  },
];
// muc canh bao muc nuoc
const waterLevelList = [
  {
    device_type: "hầm nối cáp - cảm biến nhiệt độ",
    value_from: 2000,
    value_to: 1800,
    deltaT: 30,
    color_code: "#4CAF50",
    alert_level: 1,
  },
  {
    device_type: "hầm nối cáp - cảm biến nhiệt độ",
    value_from: 1799,
    value_to: 1500,
    deltaT: 30,
    color_code: "#FFC107",
    alert_level: 2,
  },
  {
    device_type: "hầm nối cáp - cảm biến nhiệt độ",
    value_from: 1499,
    value_to: 1200,
    deltaT: 20,
    color_code: "#FF9800",
    alert_level: 3,
  },
  {
    device_type: "hầm nối cáp - cảm biến nhiệt độ",
    value_from: 1199,
    value_to: 800,
    deltaT: 15,
    color_code: "#F44336",
    alert_level: 4,
  },
  {
    device_type: "hầm nối cáp - cảm biến nhiệt độ",
    value_from: 799,
    value_to: 0,
    deltaT: 10,
    color_code: "#B71C1C",
    alert_level: 4,
  },
];
console.log(templateSensorsList.map((item) => item.tempSensors[0].temperature));
// nội dung html
// html cho tab cable tunnel

// const tunnelDatahandler = function () {
//   let htmltunnel = ``;
//   historyDataList.forEach((item) => {
//     htmltunnel =
//       htmltunnel + `<option value="${item.ham_id}">hầm ${item.ham_id}</option>`;
//   });
//   return htmltunnel;
// };
const htmlCableTunnel = `<div class="cable-tunnel tab-content" id="cableTunnelTab">
                            <div class="card">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <h3 class="header" style="border: none; margin: 0;">cảm biến dòng điện</h3>
                                    <div>
                                      <select id="adminEventTimeSelect" style="padding: 5px;">
                                        <option value="1">hầm 1</option>
                                      </select>
                                      <select id="TunnelSelect" style="padding: 5px;">
                                          <option value="week">Theo tuần (7 ngày)</option>
                                          <option value="month">Theo tháng (4 tuần)</option>
                                          <option value="year" selected>Theo năm (12 tháng)</option>
                                      </select>
                                    </div>
                                </div>
                                <div style="position: relative; flex: 1;">
                                    <canvas id="adminChartCurrentSensors"></canvas>
                                </div>
                            </div>
                              <div class="card">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <h3 class="header" style="border: none; margin: 0;">Cảm biến mực nước</h3>
                                    <div>
                                      <select id="adminEventTimeSelect" style="padding: 5px;">
                                        <option value="1">hầm 1</option>
                                      </select>
                                      <select id="TunnelSelect" style="padding: 5px;">
                                          <option value="week">Theo tuần (7 ngày)</option>
                                          <option value="month">Theo tháng (4 tuần)</option>
                                          <option value="year" selected>Theo năm (12 tháng)</option>
                                      </select>
                                    </div>
                                </div>
                                <div style="position: relative; flex: 1;">
                                    <canvas id="adminChartWaterSensor"></canvas>
                                </div>
                            </div>
                              <div class="card">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <h3 class="header" style="border: none; margin: 0;">Cảm biến nhiệt độ</h3>
                                    <div>
                                      <select id="adminEventTimeSelect" style="padding: 5px;">
                                        <option value="1">hầm 1</option>
                                      </select>
                                      <select id="TunnelSelect" style="padding: 5px;">
                                          <option value="week">Theo tuần (7 ngày)</option>
                                          <option value="month">Theo tháng (4 tuần)</option>
                                          <option value="year" selected>Theo năm (12 tháng)</option>
                                      </select>
                                    </div>
                                </div>
                                <div style="position: relative; flex: 1;">
                                    <canvas id="adminChartTempSensors"></canvas>
                                </div>
                            </div>
                        </div >`;
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
const htmlHistoryData = `<div class="history_data tab-content" id="historyDataTab">
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
// html cho tab device list
const deviceListDataTableBodyHandler = function () {
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
const htmlDeviceList = `<div class="device_list tab-content" id="deviceListTab">
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
                        ${deviceListDataTableBodyHandler()}
                        </tbody>
                    </table>
</div > `;

// html cho tab thiet lap muc nuoc
const waterLevelDataTableBodyHandler = function () {
  let row = "";
  waterLevelList.forEach((item) => {
    const rowCurrent = `
                      <tr>
                        <td>${item.device_type}</td>
                        <td>${item.value_from}</td>
                        <td>${item.value_to}</td>
                        <td>${item.deltaT}</td>
                        <td><div style="display: flex;justify-content: space-between;width:50%;">
                        ${item.color_code} <div style="background-color:${item.color_code}; height: 1rem ;aspect-ratio:1/1;"></div></td>
                        </div>
                        <td>Mức ${item.alert_level}</td>
                        <td>
                        <button class="ai-action-btn edit" 
                                style="background:#f1c40f; color:white; padding:6px 10px; border:none; border-radius:4px;">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="ai-action-btn delete" 
                                style="background:#e74c3c; color:white; padding:6px 10px; border:none; border-radius:4px; ">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        </td>
                      </tr>
                        `;
    row = row + rowCurrent;
  });
  return row;
};
const htmlWaterLevelList = `<div class="water-Level tab-content" id="water-Level">
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
                            <tr><th>Loại thiết bị</th><th>Giá trin từ</th><th>Giá trị Đến</th><th>DELTA T</th><th>Mã màu</th><th>Mức cảnh báo</th><th>Chức năng</th></tr>
                        </thead>
                        <tbody id=historyDataTableBody">
                        ${waterLevelDataTableBodyHandler()}
                        </tbody>
                    </table>
</div>`;
// thêm html vào thẻ html content body
contentBody.innerHTML =
  contentBody.innerHTML +
  htmlHistoryData +
  htmlCableTunnel +
  htmlDeviceList +
  htmlWaterLevelList;
// hien thi dong dien
const chartCurrentSensorsHandler = function () {
  // bieu do 1
  const adminChartCurrentSensors = document.getElementById(
    "adminChartCurrentSensors"
  );
  new Chart(adminChartCurrentSensors, {
    type: "line",
    data: {
      labels: currentSensoreList.map((item) => item.time),
      datasets: [
        {
          label: "Pha 1(current_chn1)",
          data: currentSensoreList.map(
            (item) => item.current_sensors.current_chn1
          ),
          borderColor: "rgb(75, 192, 192)",
        },
        {
          label: "Pha 2(current_chn2)",
          data: currentSensoreList.map(
            (item) => item.current_sensors.current_chn2
          ),
          borderColor: "yellow",
        },
        {
          label: "Pha 3(current_chn3)",
          data: currentSensoreList.map(
            (item) => item.current_sensors.current_chn3
          ),
          borderColor: "green",
        },
        {
          label: "Ngưỡng cảnh báo (100)",
          data: currentSensoreList.map(() => 100),
          borderColor: "red",
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Thời gian (giờ)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Dòng điện(A)",
          },
        },
      },
    },
  });
};
// hien thi cam bien nhiet do
const chartTempSensorsHandler = function () {
  // bieu do 2
  const adminChartTempSensors = document.getElementById(
    "adminChartTempSensors"
  );
  new Chart(adminChartTempSensors, {
    type: "line",
    data: {
      labels: templateSensorsList.map((item) => item.time),
      datasets: [
        {
          label: "Cảm biến 1",
          data: templateSensorsList.map(
            (item) => item.tempSensors[0].temperature
          ),
          borderColor: "rgb(75, 192, 192)",
        },
        {
          label: "Cảm biến 2",
          data: templateSensorsList.map(
            (item) => item.tempSensors[1].temperature
          ),
          borderColor: "yellow",
        },
        {
          label: "Ngưỡng cảnh báo",
          data: templateSensorsList.map(() => 41),
          borderColor: "red",
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Thời gian (giờ)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Nhiều độ(°C)",
          },
        },
      },
    },
  });
};
// hien thi muc nuoc
const chartWaterSensorHandler = function () {
  // bieu do 3
  const adminChartWaterSensor = document.getElementById(
    "adminChartWaterSensor"
  );
  new Chart(adminChartWaterSensor, {
    type: "line",
    data: {
      labels: waterSensorList.map((item) => item.time),
      datasets: [
        {
          label: "Cảm biến 1",
          data: waterSensorList.map((item) => item.water_sensor.distance),
          borderColor: "rgb(75, 192, 192)",
        },
        {
          label: "Cảm biến 2",
          data: waterSensorList.map(() => 2500),
          borderColor: "yellow",
        },
        {
          label: "Ngưỡng cảnh báo",
          data: waterSensorList.map(() => 2200),
          borderColor: "red",
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Thời gian (giờ)",
          },
        },
        y: {
          title: {
            display: true,
            text: "khoảng cách từ cảm biến (mm) (khoảng cách thấp = mực nước cao)",
          },
        },
      },
    },
  });
};
cableTunnel.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.remove("active");
  });
  // hien thi tab cable tunnel
  const historyDataTab = document.getElementById("cableTunnelTab");
  historyDataTab.style.display = "block";
  // hien thi bieu do
  chartCurrentSensorsHandler();
  chartWaterSensorHandler();
  chartTempSensorsHandler();
});
// hieenr thi tab history data
historyData.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.remove("active");
  });
  const historyDataTab = document.getElementById("historyDataTab");
  historyDataTab.style.display = "block";
});
// hien thi device list
deviceList.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.remove("active");
  });
  const deviceListTab = document.getElementById("deviceListTab");
  deviceListTab.style.display = "block";
});
// hien thi thiet lap muc canh bao nuoc
waterLevel.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.remove("active");
  });
  const waterLevel = document.getElementById("water-Level");
  waterLevel.style.display = "block";
});
