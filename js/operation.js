const notification = document.getElementById("notification");
const notificationOperationData = [
  {
    number: 8,
    text: "Tổng sự Kiện",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ff4d4f",
  },
  {
    number: 15,
    text: "Chưa xử lý",
    icon: "fa-solid fa-clock",
    iconColor: "#ff6b6b",
    bgColor: "#ff6b6b",
  },
  {
    number: 23,
    text: "Đang xử lý",
    icon: "fa-solid fa-hourglass-half",
    iconColor: "#ffa500",
    bgColor: "#ffa500",
  },
  {
    number: 54,
    text: "Đã xử lý ",
    icon: "fa-solid fa-circle-check",
    iconColor: "#4caf50",
    bgColor: "#4caf50",
  },
];
const moduleName = [
  "Hàng rào ảo",
  "Báo cháy",
  "Tràn dầu kho",
  "Tràn dầu xe tra nạp",
  "Biển số xe",
  "An toàn lao động",
];
const moduleColor = [
  "#59DEE0",
  "#F7E29C",
  "#C8EDF7",
  "#BEE58D",
  "#A0EDE8",
  "#F6C5C8",
];
const moduleIcon = [
  `<i class="bi bi-shield-fill"></i>`,
  `<i class="fa-solid fa-fire"></i>`,
  `<i class="fa-solid fa-droplet"></i>`,
  `<i class="fa-solid fa-truck"></i>`,
  `<i class="fas fa-id-card"></i></i>`,
  `<i class="fa-solid fa-helmet-safety"></i>`,
];
let htmlElements = "";
notificationOperationData.forEach((item, index) => {
  const htmlElementsCurrent = `<div class="col-4" style="background-color: transparent;" >
                                      <div class="card card-full-height" style="padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);border-radius: 0;>
                                          <h3 class="header" style="margin-bottom: 16px; color: #ffffff;">${item.text}</h3>
                                          <div 
                                              style="
                                                  display: flex;
                                                  align-items: center;
                                                  gap: 55px;
                                                  padding: 20px;
                                                  background: rgba(255, 255, 255, 0.2);
                                                  border-radius: 16px;
                                                  backdrop-filter: blur(10px);
                                              "
                                          >   
                                              <div
                                                  style="
                                                      width: 60px;
                                                      height: 60px;
                                                      background: rgba(255, 255, 255, 0.3);
                                                      border-radius: 16px;
                                                      display: flex;
                                                      justify-content: center;
                                                      align-items: center;
                                                      flex-shrink: 0;
                                                  "
                                              >
                                                  <i 
                                                      class="${item.icon}"
                                                      style="font-size: 28px; color: ${item.iconColor};"
                                                  ></i>
                                              </div>
                                              <div>
                                                  <div 
                                                      id="unprocessedEvents" 
                                                      style="font-size: 2rem; font-weight: 700; margin-bottom: 6px; "
                                                  >
                                                      ${item.number}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div> `;
  htmlElements = htmlElements + htmlElementsCurrent;
});
let notificationHtml = "";
moduleName.forEach((module, index) => {
  notificationHtml =
    notificationHtml +
    `<div class="notification-section" style="background-color:#C8EDF7">
    <header>
    ${moduleIcon[index]}
    <h2>${module}</h2>
    </header>
    ${htmlElements}
    </div>`;
});
notification.innerHTML = notificationHtml;
