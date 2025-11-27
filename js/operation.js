const htmlElements = "";
const renderNotificationCards = function () {
  const htmlElementsCurrent = `<!-- <div class="col-4">
                                <div class="card card-full-height" style="padding: 20px;">
                                    <h3 class="header" style="margin-bottom: 16px;">${"Chưa xử lý"}</h3>
    
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
                                                class="${"fa-solid fa-triangle-exclamation"}"
                                                style="font-size: 28px; color: #ff4d4f;"
                                            ></i>
                                        </div>
    
                                    
                                        <div>
                                            <div 
                                                id="unprocessedEvents" 
                                                style="font-size: 32px; font-weight: 700; margin-bottom: 6px;"
                                            >
                                                ${12}
                                            </div>
    
                                        
                                        </div>
    
                                    </div>
                                </div>
                            </div> -->`;
};
const Notification = [
  {
    number: 12,
    text: "Sự kiện nghiêm trọng",
    icon: "fa-solid fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
  {
    number: 12,
    text: "Sự kiện nghiêm trọng",
    icon: "fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
  {
    number: 12,
    text: "Sự kiện nghiêm trọng",
    icon: "fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
  {
    number: 12,
    text: "Sự kiện nghiêm trọng",
    icon: "fa-triangle-exclamation",
    iconColor: "#ff4d4f",
    bgColor: "#ffe5e5",
  },
];
