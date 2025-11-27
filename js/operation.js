const notification = document.getElementById("notification");
console.log(notification);
const notificationOperationData = [
  {
    number: 12,
    text: "Sự kiện nghiêm trọng",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
  {
    number: 12,
    text: "Chưa xử lý",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
  {
    number: 12,
    text: "Đang xử lý",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
  {
    number: 12,
    text: "Đã xử lý ",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
];
let htmlElements = "";
notificationOperationData.forEach((item) => {
  const htmlElementsCurrent = `<div class="col-4">
                                      <div class="card card-full-height" style="padding: 20px;">
                                          <h3 class="header" style="margin-bottom: 16px;">${item.text}</h3>
          
                                          <div 
                                              style="
                                                  display: flex;
                                                  align-items: center;
                                                  gap: 55px; /* TĂNG KHOẢNG CÁCH TẠI ĐÂY */
                                                  padding: 20px;
                                                  background: linear-gradient(to bottom, #f8fbff, #ffffff);
                                                  border-radius: 16px;
                                              "
                                          >   
                                              <div
                                                  style="
                                                      width: 60px;
                                                      height: 60px;
                                                      background: #ffe5e5;
                                                      border-radius: 16px;
                                                      display: flex;
                                                      justify-content: center;
                                                      align-items: center;
                                                      flex-shrink: 0;
                                                  "
                                              >
                                                  <i 
                                                      class="${item.icon}"
                                                      style="font-size: 28px; color: #ff4d4f;"
                                                  ></i>
                                              </div>
          
                                          
                                              <div>
                                                  <div 
                                                      id="unprocessedEvents" 
                                                      style="font-size: 32px; font-weight: 700; margin-bottom: 6px;"
                                                  >
                                                      ${item.number}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div> `;
  htmlElements = htmlElements + htmlElementsCurrent;
});
notification.innerHTML = htmlElements;
console.log(notification);
