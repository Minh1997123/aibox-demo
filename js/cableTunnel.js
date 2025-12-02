const cableTunnel = document.getElementById("cable-tunnel");
const historyData = document.getElementById("history-data");
const deviceList = document.getElementById("device-list");
const waterLevel = document.getElementById("water-level");
const categoryManagement = document.getElementById("category-management");
const contentBody = document.getElementsByClassName("content-body")[0];

// ngay gio hien thi
const labelMap = {
  0: "11-27 00",
  1: "11-27 03",
  2: "11-27 06",
  3: "11-27 09",
  4: "11-27 12",
  5: "11-27 15",
  6: "11-27 18",
};
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
    toa_do: "21°01'41.88\"N 105°51'15.12\"E",
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
    toa_do: "10°46'35.40\"N 106°42'03.24\"E",
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
    toa_do: "16°02'49.56\"N 108°12'24.48\"E",
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
    toa_do: "20°58'16.68\"N 107°02'41.28\"E",
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
    toa_do: "12°14'19.68\"N 109°11'48.12\"E",
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
    toa_do: "12°14'19.68\"N 109°11'48.12\"E",
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
    toa_do: "20°58'16.68\"N 107°02'41.28\"E",
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
    toa_do: "10°46'35.40\"N 106°42'03.24\"E",
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
    toa_do: "20°58'16.68\"N 107°02'41.28\"E",
  },
];
// template
const templateSensorsList = {
  temperature1: [
    { x: 0, y: 22.5 },
    { x: 0.3, y: 27.3 },
    { x: 1, y: 27.3 },
    { x: 1.1, y: 22.5 },
    { x: 2, y: 23.1 },
    { x: 3, y: 28.7 },
    { x: 3.3, y: 23.1 },
    { x: 4, y: 24.4 },
    { x: 5, y: 26.9 },
    { x: 5.4, y: 28.7 },
    { x: 5.7, y: 24.4 },
    { x: 6, y: 21.8 },
  ],
  temperature2: [
    { x: 0, y: 29.4 },
    { x: 0.8, y: 29.4 },
    { x: 1, y: 23.9 },
    { x: 2, y: 27.8 },
    { x: 2.6, y: 26.9 },
    { x: 3, y: 22.5 },
    { x: 3.7, y: 21.8 },
    { x: 4, y: 27.3 },
    { x: 4.3, y: 27.8 },
    { x: 5, y: 23.1 },
    { x: 5.9, y: 23.9 },
    { x: 6, y: 28.7 },
  ],
};
// dong dien
const currentSensoreList = [
  {
    x: 1,
    y: { current_chn1: 18, current_chn2: 29, current_chn3: 24 },
  },
  {
    x: 1.5,
    y: { current_chn1: 19, current_chn2: 27, current_chn3: 22 },
  },
  {
    x: 2,
    y: { current_chn1: 30, current_chn2: 22, current_chn3: 27 },
  },
  {
    x: 3,
    y: { current_chn1: 25, current_chn2: 31, current_chn3: 19 },
  },
  {
    x: 3.5,
    y: { current_chn1: 31, current_chn2: 24, current_chn3: 29 },
  },
  {
    x: 4,
    y: { current_chn1: 33, current_chn2: 26, current_chn3: 28 },
  },
  {
    x: 5,
    y: { current_chn1: 21, current_chn2: 34, current_chn3: 23 },
  },
  {
    x: 5.5,
    y: { current_chn1: 28, current_chn2: 33, current_chn3: 21 },
  },
  {
    x: 6,
    y: { current_chn1: 29, current_chn2: 20, current_chn3: 30 },
  },
  {
    x: 7,
    y: { current_chn1: 32, current_chn2: 28, current_chn3: 18 },
  },
];
// muc nuoc
const waterSensorList = [
  { x: 0, y: 1850 },
  { x: 1, y: 1780 },
  { x: 2, y: 1925 },
  { x: 3, y: 1700 },
  { x: 4, y: 1830 },
  { x: 5, y: 1755 },
  { x: 6, y: 1905 },
];
// muc canh bao
const waterLevelList = [
  // === CẢM BIẾN NHIỆT ĐỘ (°C) ===
  {
    device_type: "Cảm biến nhiệt độ",
    value_from: 20,
    value_to: 35,
    deltaT: 30,
    color_code: "#4CAF50",
    alert_level: "Bình thường",
  },
  {
    device_type: "Cảm biến nhiệt độ",
    value_from: 15,
    value_to: 20,
    deltaT: 30,
    color_code: "#FFC107",
    alert_level: "Thấp",
  },
  {
    device_type: "Cảm biến nhiệt độ",
    value_from: 35,
    value_to: 45,
    deltaT: 20,
    color_code: "#FF9800",
    alert_level: "Cao",
  },
  {
    device_type: "Cảm biến nhiệt độ",
    value_from: 45,
    value_to: 100,
    deltaT: 15,
    color_code: "#F44336",
    alert_level: "Nguy hiểm",
  },

  // === CẢM BIẾN DÒNG ĐIỆN (A) ===
  {
    device_type: "Cảm biến dòng điện",
    value_from: 0,
    value_to: 5,
    deltaT: 30,
    color_code: "#4CAF50",
    alert_level: "Bình thường",
  },
  {
    device_type: "Cảm biến dòng điện",
    value_from: 5,
    value_to: 10,
    deltaT: 30,
    color_code: "#FFC107",
    alert_level: "Thấp",
  },
  {
    device_type: "Cảm biến dòng điện",
    value_from: 15,
    value_to: 25,
    deltaT: 20,
    color_code: "#FF9800",
    alert_level: "Cao",
  },
  {
    device_type: "Cảm biến dòng điện",
    value_from: 25,
    value_to: 1000,
    deltaT: 15,
    color_code: "#F44336",
    alert_level: "Nguy hiểm",
  },

  // === CẢM BIẾN MỰC NƯỚC (mm) ===
  {
    device_type: "Cảm biến mực nước",
    value_from: 1500,
    value_to: 2000,
    deltaT: 30,
    color_code: "#4CAF50",
    alert_level: "Bình thường",
  },
  {
    device_type: "Cảm biến mực nước",
    value_from: 1200,
    value_to: 1500,
    deltaT: 30,
    color_code: "#FFC107",
    alert_level: "Thấp",
  },
  {
    device_type: "Cảm biến mực nước",
    value_from: 800,
    value_to: 1200,
    deltaT: 20,
    color_code: "#FF9800",
    alert_level: "Cao",
  },
  {
    device_type: "Cảm biến mực nước",
    value_from: 0,
    value_to: 800,
    deltaT: 15,
    color_code: "#F44336",
    alert_level: "Nguy hiểm",
  },
];

// nội dung html
// html cho tab cable tunnel
const htmlCableTunnelNotifi = `<div class="row card-group-height-2" style="flex-direction: column;">
                    <div class="col-4">
                        <div class="card card-full-height" style="padding: 20px;">
                            <h3 class="header" style="margin-bottom: 16px;">Số sự kiện vượt ngưỡng của cảm biến điện áp</h3>
                            <div style="
                                        display: flex;
                                        align-items: center;
                                        gap: 55px;
                                        padding: 20px;
                                        background: linear-gradient(to bottom, #f8fbff, #ffffff);
                                        border-radius: 16px;
                                    ">
                                <div style="
                                            width: 60px;
                                            height: 60px;
                                            background: #ffe5e5;
                                            border-radius: 16px;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            flex-shrink: 0;
                                        ">
                                    <i class="bi bi-lightning-charge-fill"
                                        style="font-size: 28px; color: #ff4d4f;"></i>
                                </div>
                          
                                <div>
                                    <div id="unprocessedEvents"
                                        style="font-size: 32px; font-weight: 700; margin-bottom: 6px;">
                                        45
                                    </div>
                                    <p style="color: #666; margin: 0; font-size: 15px;">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card card-full-height" style="padding: 20px;">
                            <h3 class="header" style="margin-bottom: 16px;">Số lần vượt ngưỡng của cảm biến mực nước</h3>
                            <div style="
                                        display: flex;
                                        align-items: center;
                                        gap: 55px; /* TĂNG KHOẢNG CÁCH TẠI ĐÂY */
                                        padding: 20px;
                                        background: linear-gradient(to bottom, #f8fbff, #ffffff);
                                        border-radius: 16px;
                                    ">
                                <div style="
                                            width: 60px;
                                            height: 60px;
                                            background: #e5fffeff;
                                            border-radius: 16px;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            flex-shrink: 0;
                                        ">
                                    <i class="bi bi-droplet-fill" style="font-size: 28px; color: #2980b9;"></i>
                                </div>
                                <div>
                                    <div id="unprocessedEvents"
                                        style="font-size: 32px; font-weight: 700; margin-bottom: 6px;">
                                        9
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card card-full-height" style="padding: 20px;">
                            <h3 class="header" style="margin-bottom: 16px;">Số lần vượt ngưỡng của cảm biến nhiệt độ</h3>
                            <div style="
                                        display: flex;
                                        align-items: center;
                                        gap: 55px; 
                                        padding: 20px;
                                        background: linear-gradient(to bottom, #f8fbff, #ffffff);
                                        border-radius: 16px;
                                    ">
                                <div style="
                                            width: 60px;
                                            height: 60px;
                                            background: #ffffe5;
                                            border-radius: 16px;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            flex-shrink: 0;
                                        ">
                                    <i class="bi bi-thermometer-high" style="font-size: 28px; color: #ff4d4f;"></i>
                                </div>
                
                                <div>
                                    <div id="unprocessedEvents"
                                        style="font-size: 32px; font-weight: 700; margin-bottom: 6px;">
                                        8
                                    </div>
                                    <p style="color: #666; margin: 0; font-size: 15px;">
               
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
const htmlCableTunnel = `<div class="cable-tunnel tab-content" id="cableTunnelTab">
                            <!-- Map Display Section -->
                            <div style="display: flex; gap:10px">
                            <div class="card" style="flex:1;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                    <h3 class="header" style="border: none; margin: 0;">Bản đồ trạm cảm biến</h3>
                                    <div style="display: flex; gap: 8px; align-items: center;">
                                        <span id="realtimeConnectionStatus" class="status-disconnected">Đang kết nối...</span>
                                        <button id="refreshMapBtn" class="map-refresh-btn" onclick="window.MapDisplay.refreshMap()">
                                            <i class="fa-solid fa-rotate"></i> Làm mới
                                        </button>
                                    </div>
                                </div>
                                <div id="sensorMap" style="height: 500px; width: 100%; border-radius: 8px; overflow: hidden;"></div>
                                </div>
                                ${htmlCableTunnelNotifi}
                              </div>
                            <!-- Sensor Stations Grid -->
                            <div class="card">
                                <h3 class="header" style="margin-bottom: 16px;">Danh sách trạm cảm biến</h3>
                                <div id="sensorStationsGrid" class="sensor-stations-grid">
                                    <!-- Stations will be dynamically loaded here -->
                                </div>
                            </div>
                            
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
                        <td>${item.toa_do}</td>
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
                            <tr><th>Tuyến</th><th>Tên Hầm</th><th>Tên Lộ</th><th>Tọa độ</th><th>Tên thiết bị cảm biến</th><th>Tình trạng</th><th>giá trị</th><th>Thời gian</th></tr>
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
                        <td>${item.toa_do}</td>
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
                            <tr><th>Tuyến</th><th>Tên Hầm</th><th>Tên Lộ</th><th>Tọa độ1</th><th>Tên thiết bị cảm biến</th><th>Tình trạng</th><th>giá trị</th><th>Thời gian</th></tr>
                        </thead>
                        <tbody>
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
  htmlCableTunnel +
  htmlHistoryData +
  htmlDeviceList +
  htmlWaterLevelList;

// Chart instances storage
let chartInstances = {
  currentSensors: null,
  waterSensor: null,
  tempSensors: null,
};

// hien thi dong dien
const chartCurrentSensorsHandler = function () {
  // bieu do 1
  const adminChartCurrentSensors = document.getElementById(
    "adminChartCurrentSensors"
  );
  if (!adminChartCurrentSensors) return;

  // Destroy existing chart
  if (chartInstances.currentSensors) {
    chartInstances.currentSensors.destroy();
  }

  chartInstances.currentSensors = new Chart(adminChartCurrentSensors, {
    type: "line",
    data: {
      labels: currentSensoreList.map((item) => item.time),
      datasets: [
        {
          label: "Pha 1(current_chn1)",
          data: currentSensoreList.map((item) => {
            return { x: item.x - 1, y: item.y.current_chn1 };
          }),

          pointRadius: 5,
          pointBackgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
        },
        {
          label: "Pha 2(current_chn2)",
          data: currentSensoreList.map((item) => {
            return { x: item.x - 1, y: item.y.current_chn2 };
          }),
          pointRadius: 5,
          pointBackgroundColor: "yellow",
          borderColor: "yellow",
        },
        {
          label: "Pha 3(current_chn3)",
          data: currentSensoreList.map((item) => {
            return { x: item.x - 1, y: item.y.current_chn3 };
          }),
          pointRadius: 5,
          pointBackgroundColor: "green",
          borderColor: "green",
        },
        {
          label: "Ngưỡng cảnh báo (100)",
          data: [
            { x: 0, y: 29 },
            { x: 1, y: 29 },
            { x: 2, y: 29 },
            { x: 3, y: 29 },
            { x: 4, y: 29 },
            { x: 5, y: 29 },
            { x: 6, y: 29 },
          ],
          borderColor: "red",
          pointRadius: 0,
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          title: {
            type: "linear",
            ticks: {
              stepSize: 5,
            },
            display: true,
            text: "Thời gian (giờ)",
          },
          ticks: {
            callback: function (value) {
              return labelMap[value] ?? "";
            },
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
  if (!adminChartTempSensors) return;

  // Destroy existing chart
  if (chartInstances.tempSensors) {
    chartInstances.tempSensors.destroy();
  }

  chartInstances.tempSensors = new Chart(adminChartTempSensors, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Cảm biến 1",
          data: templateSensorsList.temperature1.map((item) => {
            return { x: item.x, y: item.y };
          }),
          pointRadius: 5,
          borderColor: "rgb(75, 192, 192)",
          pointBackgroundColor: "rgb(75, 192, 192)",
        },
        {
          label: "Cảm biến 2",
          data: templateSensorsList.temperature2.map((item) => {
            return { x: item.x, y: item.y };
          }),
          pointRadius: 5,
          pointBackgroundColor: "yellow",
          borderColor: "yellow",
        },
        {
          label: "Ngưỡng cảnh báo(50°C)",
          data: [
            { x: 0, y: 50 },
            { x: 1, y: 50 },
            { x: 2, y: 50 },
            { x: 3, y: 50 },
            { x: 4, y: 50 },
            { x: 5, y: 50 },
            { x: 6, y: 50 },
          ],
          borderColor: "red",
          pointRadius: 0,
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          ticks: {
            callback: function (value) {
              return labelMap[value] ?? "";
            },
          },
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
  if (!adminChartWaterSensor) return;

  // Destroy existing chart
  if (chartInstances.waterSensor) {
    chartInstances.waterSensor.destroy();
  }

  chartInstances.waterSensor = new Chart(adminChartWaterSensor, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Cảm biến 1",
          data: waterSensorList.map((item) => {
            return { x: item.x, y: item.y };
          }),
          pointRadius: 5,
          pointBackgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
        },
        {
          label: "Ngưỡng cảnh báo 1",
          data: [
            { x: 0, y: 2200 },
            { x: 1, y: 2200 },
            { x: 2, y: 2200 },
            { x: 3, y: 2200 },
            { x: 4, y: 2200 },
            { x: 5, y: 2200 },
            { x: 6, y: 2200 },
          ],
          borderColor: "yellow",
          pointRadius: 0,
          borderDash: [5, 5],
        },
        {
          label: "Ngưỡng cảnh báo 2",
          data: [
            { x: 0, y: 2500 },
            { x: 1, y: 2500 },
            { x: 2, y: 2500 },
            { x: 3, y: 2500 },
            { x: 4, y: 2500 },
            { x: 5, y: 2500 },
            { x: 6, y: 2500 },
          ],
          borderColor: "red",
          pointRadius: 0,
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          ticks: {
            callback: function (value) {
              return labelMap[value] ?? "";
            },
          },
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

  // Initialize map if not already initialized
  setTimeout(() => {
    // Load mock data first, then initialize map
    if (!window.MapDisplay || !window.MapDisplay.mapInstance) {
      // Load mock data first and wait for it to complete
      const loadedCount = loadMockSensorData();

      // Then initialize map (which will load stations from the data we just loaded)
      // Use longer delay to ensure data is fully processed
      setTimeout(() => {
        // Verify data is available before initializing map
        const allData = window.SensorStationManager
          ? window.SensorStationManager.getAllStationData()
          : [];
        console.log(
          "Initializing map with",
          allData.length,
          "stations available"
        );

        if (window.MapDisplay) {
          window.MapDisplay.initMap();
          // Force refresh after initialization
          setTimeout(() => {
            if (window.MapDisplay && window.MapDisplay.mapInstance) {
              window.MapDisplay.refreshMap();
            }
          }, 100);
        }
        // Load sensor stations display
        loadSensorStationsDisplay();
      }, 500); // Increased delay to ensure data is loaded
    } else if (window.MapDisplay) {
      // Map already exists, refresh data and map
      loadMockSensorData();
      setTimeout(() => {
        window.MapDisplay.refreshMap();
        loadSensorStationsDisplay();
      }, 300);
    }
  }, 100);

  // hien thi bieu do
  setTimeout(() => {
    chartCurrentSensorsHandler();
    chartWaterSensorHandler();
    chartTempSensorsHandler();
  }, 150);
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

  // // Load tunnel-station mapping display
  // setTimeout(() => {
  //   loadTunnelStationMapping();
  // }, 100);
});

// Load mock sensor data
function loadMockSensorData() {
  if (!window.SensorStationManager) {
    console.warn("SensorStationManager not available");
    return 0;
  }

  const tunnels = window.getAllTunnels ? window.getAllTunnels() : [];
  console.log("Loading mock data for", tunnels.length, "tunnels");

  if (tunnels.length === 0) {
    console.warn("No tunnels found!");
    return 0;
  }

  let loadedCount = 0;

  tunnels.forEach((tunnel) => {
    const stations = window.getStationsByTunnel
      ? window.getStationsByTunnel(tunnel.id)
      : [];

    // If getStationsByTunnel returns empty, try tunnel.stations directly
    let stationsToProcess = stations;
    if (
      stations.length === 0 &&
      tunnel.stations &&
      tunnel.stations.length > 0
    ) {
      stationsToProcess = tunnel.stations;
    }

    if (stationsToProcess.length === 0) {
      return; // Skip tunnels with no stations
    }

    stationsToProcess.forEach((station, index) => {
      // Create mock sensor data
      const mockData = {
        stationId: station.id,
        stationName: station.name,
        tunnelId: tunnel.id,
        timestamp: new Date().toISOString(),
        temperature: 25 + Math.random() * 10 + index * 2, // 25-35°C with variation
        humidity: 50 + Math.random() * 20 + index * 3, // 50-70%
        waterLevel: 1500 + Math.random() * 500 + index * 100, // 1500-2000mm
        gas: Math.random() * 30, // 0-30
        currentCh1: 20 + Math.random() * 10,
        currentCh2: 22 + Math.random() * 10,
        currentCh3: 21 + Math.random() * 10,
        status: "active",
      };

      const parsed = window.SensorStationManager.parseDeviceMessage(mockData);
      if (parsed) {
        window.SensorStationManager.updateStationData(parsed);
        loadedCount++;
      }
    });
  });

  console.log("Mock sensor data loaded:", loadedCount, "stations");

  // Trigger bulk data loaded event for map refresh after all data is loaded
  setTimeout(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("bulkStationDataLoaded"));
      // Also refresh map if it exists
      if (window.MapDisplay && window.MapDisplay.mapInstance) {
        window.MapDisplay.refreshMap();
      }
    }
  }, 100);

  // Update connection status
  const statusEl = document.getElementById("realtimeConnectionStatus");
  if (statusEl) {
    statusEl.textContent = "Đã kết nối";
    statusEl.className = "status-connected";
  }

  return loadedCount;
}

// Load tunnel-station mapping display
function loadTunnelStationMapping() {
  const tableBody = document.querySelector("#deviceListTab tbody");
  if (!tableBody) return;

  // Get all tunnels
  const tunnels = window.getAllTunnels ? window.getAllTunnels() : [];

  let html = "";

  tunnels.forEach((tunnel) => {
    // Get stations for this tunnel
    const stations = window.getStationsByTunnel
      ? window.getStationsByTunnel(tunnel.id)
      : [];

    // Get sensor data for stations
    const stationData = window.SensorStationManager
      ? window.SensorStationManager.getStationsByTunnel(tunnel.id)
      : [];

    // Create data map
    const dataMap = new Map();
    stationData.forEach((sd) => {
      dataMap.set(sd.stationId, sd);
    });

    // If no data, use mock data from historyDataList
    if (stations.length === 0 && stationData.length === 0) {
      // Use existing historyDataList entries for this tunnel
      const tunnelData = historyDataList.filter(
        (item) => item.ten_ham === tunnel.id
      );
      tunnelData.forEach((item) => {
        html += `
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
      });
    } else {
      // Render stations for this tunnel
      stations.forEach((station) => {
        const data = dataMap.get(station.id) || {};
        const tuyen =
          "Đoạn tuyến cáp ngầm DZ 181, 172, 177, 178 E1.4 Hà Đông Từ vị trí cột 7M đến cột 15M";

        html += `
          <tr>
            <td>${tuyen}</td>
            <td>${tunnel.id}</td>
            <td>${station.name}</td>
            <td>${data.ten_thiet_bi || "Cảm biến nhiệt độ"}</td>
            <td>${
              data.tinh_trang ||
              (data.overallStatus === "normal" ? "Hoạt động" : "Cảnh báo")
            }</td>
            <td>${
              data.temperature
                ? data.temperature.toFixed(1) + "°C"
                : data.gia_tri || "N/A"
            }</td>
            <td>${
              window.SensorStationManager
                ? window.SensorStationManager.formatTimestamp(data.timestamp)
                : data.thoi_gian || "N/A"
            }</td>
          </tr>
        `;
      });
    }
  });

  // If still no data, use all historyDataList
  if (!html) {
    historyDataList.forEach((item) => {
      html += `
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
    });
  }

  // If still no data, use all historyDataList
  if (!html) {
    historyDataList.forEach((item) => {
      html += `
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
    });
  }

  tableBody.innerHTML = html || '<tr><td colspan="7">Chưa có dữ liệu</td></tr>';
}

// Duplicate function removed - using the one at line 1099

// Make loadMockSensorData globally available
if (typeof window !== "undefined") {
  window.loadMockSensorData = loadMockSensorData;
}
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

// Load sensor stations display
function loadSensorStationsDisplay() {
  const grid = document.getElementById("sensorStationsGrid");
  if (!grid) return;

  // Get all tunnels
  const tunnels = window.getAllTunnels ? window.getAllTunnels() : [];

  let html = "";

  tunnels.forEach((tunnel) => {
    // Get stations for this tunnel
    const stations = window.SensorStationManager
      ? window.SensorStationManager.getStationsByTunnel(tunnel.id)
      : [];
    // If no station data, create placeholder from tunnel stations
    if (stations.length === 0 && window.getStationsByTunnel) {
      const tunnelStations = window.getStationsByTunnel(tunnel.id);
      tunnelStations.forEach((ts) => {
        stations.push({
          stationId: ts.id,
          stationName: ts.name,
          tunnelId: tunnel.id,
          temperature: 0,
          humidity: 0,
          waterLevel: 0,
          overallStatus: "normal",
          timestamp: new Date().toISOString(),
        });
      });
    }
    html += `
      <div class="tunnel-station-group">
        <h4 class="tunnel-group-header">
          <i class="fa-solid fa-building"></i> ${tunnel.name}
          <span class="station-count">(${stations.length} trạm)</span>
        </h4>
        <div class="stations-list">
          ${stations.map((station) => createStationCard(station)).join("")}
        </div>
      </div>
    `;
  });

  grid.innerHTML = html || "<p>Chưa có dữ liệu trạm cảm biến</p>";
}

// Create station card HTML
function createStationCard(station) {
  const status = station.overallStatus || "normal";
  const statusColor = getStationStatusColor(status);
  const statusText = getStationStatusText(status);
  const formatTime = window.SensorStationManager
    ? window.SensorStationManager.formatTimestamp(station.timestamp)
    : station.timestamp || "N/A";

  const tempClass =
    window.SensorStationManager &&
    window.SensorStationManager.isAbnormal(station.temperature, "temperature")
      ? "abnormal-value"
      : "";
  const humClass =
    window.SensorStationManager &&
    window.SensorStationManager.isAbnormal(station.humidity, "humidity")
      ? "abnormal-value"
      : "";
  const waterClass =
    window.SensorStationManager &&
    window.SensorStationManager.isAbnormal(station.waterLevel, "waterLevel")
      ? "abnormal-value"
      : "";

  return `
    <div class="station-card" data-station-id="${station.stationId}">
      <div class="station-card-header">
        <h5>${station.stationName || station.stationId}</h5>
        <span class="station-status-badge" style="background-color: ${statusColor};">
          ${statusText}
        </span>
      </div>
      <div class="station-card-body">
        <div class="sensor-reading">
          <span class="sensor-label"><i class="bi bi-thermometer-high" style="font-size: 28px; color: #ff4d4f;"></i></span>
          <span class="sensor-value ${tempClass}">${
    station.temperature.toFixed(2) || "N/A"
  }°C</span>
        </div>
        <div class="sensor-reading">
          <span class="sensor-label"><i class="bi bi-droplet-fill" style="font-size: 28px; color: #2980b9;"></i></span>
          <span class="sensor-value ${waterClass}">${
    station.waterLevel.toFixed(2) || "N/A"
  } mm</span>
        </div>
          <div class="sensor-reading">
          <span class="sensor-label"><i class="bi bi-lightning-charge-fill"style="font-size: 28px; color: #fed330;"></i></span>
          <span class="sensor-value ${waterClass}">380 V / 30 A</span>
        </div>
        <div class="sensor-reading">
          <span class="sensor-label">Cập nhật:</span>
          <span class="sensor-value">${formatTime}</span>
        </div>
      </div>
      <div class="station-card-footer">
        <button class="station-detail-btn" onclick="window.openStationDetail('${
          station.stationId
        }')">
          <i class="fa-solid fa-info-circle"></i> Chi tiết
        </button>
        <button class="station-map-btn" onclick="window.MapDisplay.focusTunnel('${
          station.tunnelId
        }')">
          <i class="fa-solid fa-map-marker-alt"></i> Xem bản đồ
        </button>
      </div>
    </div>
  `;
}

// Get station status color
function getStationStatusColor(status) {
  const colors = {
    normal: "#4CAF50",
    low: "#FFC107",
    medium: "#FF9800",
    high: "#F44336",
  };
  return colors[status] || colors.normal;
}

// Get station status text
function getStationStatusText(status) {
  const texts = {
    normal: "Bình thường",
    low: "Cảnh báo thấp",
    medium: "Cảnh báo trung bình",
    high: "Cảnh báo cao",
  };
  return texts[status] || "Không xác định";
}

// Listen for station data updates to refresh display
if (typeof window !== "undefined") {
  window.addEventListener("stationDataUpdated", () => {
    const tab = document.getElementById("cableTunnelTab");
    if (tab && tab.style.display === "block") {
      loadSensorStationsDisplay();
    }
  });
}
