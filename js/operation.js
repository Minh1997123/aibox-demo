const notification = document.getElementById("notification");
const notificationOperationData = [
  {
    number: 8,
    text: "Sự kiện nghiêm trọng",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ffffff",
    bgColor: "#ff4d4f",
    cardBgColor: "linear-gradient(135deg, #ff6b6b 0%, #ff4d4f 100%)",
  },
  {
    number: 15,
    text: "Chưa xử lý",
    icon: "fa-solid fa-clock",
    iconColor: "#ffffff",
    bgColor: "#ff6b6b",
    cardBgColor: "linear-gradient(135deg, #ff9a8b 0%, #ff6b6b 100%)",
  },
  {
    number: 23,
    text: "Đang xử lý",
    icon: "fa-solid fa-hourglass-half",
    iconColor: "#ffffff",
    bgColor: "#ffa500",
    cardBgColor: "linear-gradient(135deg, #ffc371 0%, #ff9500 100%)",
  },
  {
    number: 54,
    text: "Đã xử lý ",
    icon: "fa-solid fa-circle-check",
    iconColor: "#ffffff",
    bgColor: "#4caf50",
    cardBgColor: "linear-gradient(135deg, #66bb6a 0%, #43a047 100%)",
  },
];
let htmlElements = "";
notificationOperationData.forEach((item) => {
  const htmlElementsCurrent = `<div class="col-4">
                                      <div class="card card-full-height" style="padding: 20px; background: ${item.cardBgColor}; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
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
                                                      style="font-size: 32px; font-weight: 700; margin-bottom: 6px; color: #ffffff;"
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
