// Realtime Notification Module
// Handles WebSocket/MQTT/SSE connections for realtime alerts

class RealtimeNotificationManager {
  constructor() {
    this.connection = null;
    this.connectionType = 'websocket'; // 'websocket', 'mqtt', 'sse'
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 3000;
    this.notificationHistory = [];
    this.filters = {
      alertType: null,
      station: null,
      tunnel: null
    };
    
    // WebSocket URL - update this with your actual endpoint
    this.wsUrl = 'ws://localhost:8080/ws/alerts'; // Default, should be configured
    this.mqttUrl = null; // MQTT broker URL if using MQTT
    this.sseUrl = null; // SSE endpoint if using SSE
  }

  // Initialize connection
  init(connectionType = 'websocket', url = null) {
    this.connectionType = connectionType;
    
    if (url) {
      if (connectionType === 'websocket') this.wsUrl = url;
      else if (connectionType === 'mqtt') this.mqttUrl = url;
      else if (connectionType === 'sse') this.sseUrl = url;
    }
    
    this.connect();
  }

  // Connect based on connection type
  connect() {
    if (this.isConnected) return;
    
    try {
      if (this.connectionType === 'websocket') {
        this.connectWebSocket();
      } else if (this.connectionType === 'mqtt') {
        this.connectMQTT();
      } else if (this.connectionType === 'sse') {
        this.connectSSE();
      }
    } catch (error) {
      console.error('Connection error:', error);
      this.handleReconnect();
    }
  }

  // WebSocket connection
  connectWebSocket() {
    try {
      this.connection = new WebSocket(this.wsUrl);
      
      this.connection.onopen = () => {
        console.log('WebSocket connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.onConnectionChange(true);
      };
      
      this.connection.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleAlert(data);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };
      
      this.connection.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.isConnected = false;
        this.onConnectionChange(false);
      };
      
      this.connection.onclose = () => {
        console.log('WebSocket closed');
        this.isConnected = false;
        this.onConnectionChange(false);
        this.handleReconnect();
      };
    } catch (error) {
      console.error('WebSocket connection failed:', error);
      this.handleReconnect();
    }
  }

  // MQTT connection (requires MQTT.js library)
  connectMQTT() {
    // This would require MQTT.js: <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
    if (typeof mqtt === 'undefined') {
      console.error('MQTT library not loaded');
      return;
    }
    
    try {
      this.connection = mqtt.connect(this.mqttUrl);
      
      this.connection.on('connect', () => {
        console.log('MQTT connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.onConnectionChange(true);
        
        // Subscribe to alerts topic
        this.connection.subscribe('alerts/#');
      });
      
      this.connection.on('message', (topic, message) => {
        try {
          const data = JSON.parse(message.toString());
          this.handleAlert(data);
        } catch (error) {
          console.error('Error parsing MQTT message:', error);
        }
      });
      
      this.connection.on('error', (error) => {
        console.error('MQTT error:', error);
        this.isConnected = false;
        this.onConnectionChange(false);
      });
      
      this.connection.on('close', () => {
        console.log('MQTT closed');
        this.isConnected = false;
        this.onConnectionChange(false);
        this.handleReconnect();
      });
    } catch (error) {
      console.error('MQTT connection failed:', error);
      this.handleReconnect();
    }
  }

  // Server-Sent Events connection
  connectSSE() {
    try {
      this.connection = new EventSource(this.sseUrl);
      
      this.connection.onopen = () => {
        console.log('SSE connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.onConnectionChange(true);
      };
      
      this.connection.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleAlert(data);
        } catch (error) {
          console.error('Error parsing SSE message:', error);
        }
      };
      
      this.connection.onerror = (error) => {
        console.error('SSE error:', error);
        this.isConnected = false;
        this.onConnectionChange(false);
        this.handleReconnect();
      };
    } catch (error) {
      console.error('SSE connection failed:', error);
      this.handleReconnect();
    }
  }

  // Handle incoming alert
  handleAlert(alertData) {
    // Apply filters
    if (!this.passesFilters(alertData)) return;
    
    // Add to history
    const notification = {
      id: Date.now(),
      timestamp: new Date(),
      ...alertData
    };
    
    this.notificationHistory.unshift(notification);
    
    // Keep only last 100 notifications
    if (this.notificationHistory.length > 100) {
      this.notificationHistory.pop();
    }
    
    // Show notification
    this.showNotification(notification);
    
    // Update station data if available
    if (alertData.stationData && window.SensorStationManager) {
      const parsed = window.SensorStationManager.parseDeviceMessage(alertData.stationData);
      if (parsed) {
        window.SensorStationManager.updateStationData(parsed);
      }
    }
    
    // Trigger custom event
    window.dispatchEvent(new CustomEvent('realtimeAlert', {
      detail: notification
    }));
  }

  // Check if alert passes filters
  passesFilters(alertData) {
    if (this.filters.alertType && alertData.alertType !== this.filters.alertType) {
      return false;
    }
    if (this.filters.station && alertData.stationId !== this.filters.station) {
      return false;
    }
    if (this.filters.tunnel && alertData.tunnelId !== this.filters.tunnel) {
      return false;
    }
    return true;
  }

  // Show notification toast/popup
  showNotification(notification) {
    // Use existing toast system if available
    if (window.showToast) {
      const severity = notification.severity || notification.alertLevel || 'info';
      const title = notification.title || `Cảnh báo từ ${notification.stationName || notification.stationId}`;
      const message = notification.message || notification.description || 'Có cảnh báo mới';
      
      window.showToast(title, message, severity);
    } else {
      // Fallback: console log
      console.log('Alert:', notification);
    }
  }

  // Set filters
  setFilters(filters) {
    this.filters = { ...this.filters, ...filters };
  }

  // Get notification history
  getNotificationHistory(limit = 50) {
    return this.notificationHistory.slice(0, limit);
  }

  // Reconnect logic
  handleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      return;
    }
    
    this.reconnectAttempts++;
    const delay = this.reconnectDelay * this.reconnectAttempts;
    
    console.log(`Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts})...`);
    
    setTimeout(() => {
      this.connect();
    }, delay);
  }

  // Connection status change callback
  onConnectionChange(connected) {
    // Update UI indicator if needed
    const indicator = document.getElementById('realtimeConnectionStatus');
    if (indicator) {
      indicator.textContent = connected ? 'Đã kết nối' : 'Đang kết nối...';
      indicator.className = connected ? 'status-connected' : 'status-disconnected';
    }
  }

  // Disconnect
  disconnect() {
    if (this.connection) {
      if (this.connectionType === 'websocket') {
        this.connection.close();
      } else if (this.connectionType === 'mqtt') {
        this.connection.end();
      } else if (this.connectionType === 'sse') {
        this.connection.close();
      }
    }
    this.isConnected = false;
    this.connection = null;
  }
}

// Initialize global instance
const realtimeNotificationManager = new RealtimeNotificationManager();

// Export for global use
if (typeof window !== 'undefined') {
  window.RealtimeNotificationManager = RealtimeNotificationManager;
  window.realtimeNotificationManager = realtimeNotificationManager;
}

