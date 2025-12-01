// Sensor Station Management
// Parses device message payloads and manages sensor station data

// Alert thresholds configuration
const SENSOR_THRESHOLDS = {
  temperature: {
    normal: { min: 20, max: 35 },
    low: { min: 15, max: 20 },
    medium: { min: 35, max: 45 },
    high: { min: 45, max: 100 }
  },
  humidity: {
    normal: { min: 40, max: 70 },
    low: { min: 0, max: 40 },
    medium: { min: 70, max: 85 },
    high: { min: 85, max: 100 }
  },
  waterLevel: {
    normal: { min: 1500, max: 2000 },
    low: { min: 1200, max: 1500 },
    medium: { min: 800, max: 1200 },
    high: { min: 0, max: 800 }
  },
  gas: {
    normal: { min: 0, max: 50 },
    low: { min: 50, max: 100 },
    medium: { min: 100, max: 200 },
    high: { min: 200, max: 1000 }
  },
  current: {
    normal: { min: 0, max: 5 },
    low: { min: 5, max: 10 },
    medium: { min: 15, max: 25 },
    high: { min: 25, max: 1000 }
  }
};

// Station data storage
let stationDataMap = new Map();

// Debug function to check map state
function debugStationDataMap() {
  console.log('stationDataMap debug:', {
    size: stationDataMap.size,
    keys: Array.from(stationDataMap.keys()),
    values: Array.from(stationDataMap.values())
  });
  return stationDataMap;
}

// Parse device message payload (Bản tin thiết bị)
function parseDeviceMessage(payload) {
  try {
    // Handle JSON string or object
    const data = typeof payload === 'string' ? JSON.parse(payload) : payload;
    
    // Extract sensor values - flexible parsing for different formats
    const station = {
      stationId: data.stationId || data.station_id || data.deviceId || data.device_id || 'UNKNOWN',
      stationName: data.stationName || data.station_name || data.name || '',
      tunnelId: data.tunnelId || data.tunnel_id || extractTunnelId(data.stationId || ''),
      timestamp: data.timestamp || data.time || data.updatedAt || new Date().toISOString(),
      
      // Sensor readings
      temperature: parseFloat(data.temperature || data.temp || data.t || 0),
      humidity: parseFloat(data.humidity || data.hum || data.h || 0),
      waterLevel: parseFloat(data.waterLevel || data.water_level || data.wl || data.w || 0),
      gas: parseFloat(data.gas || data.gasLevel || data.g || 0),
      
      // Additional sensors
      currentCh1: parseFloat(data.currentCh1 || data.current_chn1 || data.c1 || 0),
      currentCh2: parseFloat(data.currentCh2 || data.current_chn2 || data.c2 || 0),
      currentCh3: parseFloat(data.currentCh3 || data.current_chn3 || data.c3 || 0),
      
      // Status
      status: data.status || 'active',
      rawData: data
    };
    
    // Calculate alert levels
    station.temperatureAlert = getAlertLevel(station.temperature, SENSOR_THRESHOLDS.temperature);
    station.humidityAlert = getAlertLevel(station.humidity, SENSOR_THRESHOLDS.humidity);
    station.waterLevelAlert = getAlertLevel(station.waterLevel, SENSOR_THRESHOLDS.waterLevel);
    station.gasAlert = getAlertLevel(station.gas, SENSOR_THRESHOLDS.gas);
    
    // Overall station status (worst alert level)
    station.overallStatus = getOverallStatus(station);
    
    return station;
  } catch (error) {
    console.error('Error parsing device message:', error);
    return null;
  }
}

// Extract tunnel ID from station ID (e.g., "HN1-T12-ST01" -> "HN1-T12")
function extractTunnelId(stationId) {
  const match = stationId.match(/^(HN\d+-T\d+)/);
  return match ? match[1] : '';
}

// Get alert level for a sensor value
function getAlertLevel(value, thresholds) {
  if (value >= thresholds.high.min && value <= thresholds.high.max) return 'high';
  if (value >= thresholds.medium.min && value <= thresholds.medium.max) return 'medium';
  if (value >= thresholds.low.min && value <= thresholds.low.max) return 'low';
  if (value >= thresholds.normal.min && value <= thresholds.normal.max) return 'normal';
  
  // Out of range - default to high alert
  if (value < thresholds.normal.min || value > thresholds.normal.max) return 'high';
  return 'normal';
}

// Get overall station status (worst alert)
function getOverallStatus(station) {
  const alerts = [
    station.temperatureAlert,
    station.humidityAlert,
    station.waterLevelAlert,
    station.gasAlert
  ];
  
  if (alerts.includes('high')) return 'high';
  if (alerts.includes('medium')) return 'medium';
  if (alerts.includes('low')) return 'low';
  return 'normal';
}

// Update station data
function updateStationData(stationData) {
  if (!stationData || !stationData.stationId) {
    console.warn('updateStationData: Invalid station data', stationData);
    return;
  }
  
  stationDataMap.set(stationData.stationId, {
    ...stationData,
    lastUpdated: new Date()
  });
  
  // Trigger update event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('stationDataUpdated', {
      detail: stationData
    }));
  }
}

// Get station data
function getStationData(stationId) {
  return stationDataMap.get(stationId);
}

// Get all station data
function getAllStationData() {
  const data = Array.from(stationDataMap.values());
  // Only log if map is empty (for debugging)
  if (stationDataMap.size === 0 && console.warn) {
    // Suppress repeated warnings - only log once per session
    if (!getAllStationData._warned) {
      console.warn('getAllStationData: Map is empty - no stations loaded yet');
      getAllStationData._warned = true;
    }
  }
  return data;
}

// Get stations by tunnel
function getStationsByTunnel(tunnelId) {
  return getAllStationData().filter(s => s.tunnelId === tunnelId);
}

// Get stations with alerts
function getStationsWithAlerts(alertLevel = null) {
  const all = getAllStationData();
  if (!alertLevel) {
    return all.filter(s => s.overallStatus !== 'normal');
  }
  return all.filter(s => s.overallStatus === alertLevel);
}

// Format timestamp for display
function formatTimestamp(timestamp) {
  if (!timestamp) return 'N/A';
  
  try {
    const date = new Date(timestamp);
    return date.toLocaleString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  } catch (error) {
    return timestamp;
  }
}

// Check if value is abnormal
function isAbnormal(value, sensorType) {
  const thresholds = SENSOR_THRESHOLDS[sensorType];
  if (!thresholds) return false;
  
  const alert = getAlertLevel(value, thresholds);
  return alert !== 'normal';
}

// Export functions
if (typeof window !== 'undefined') {
  window.SensorStationManager = {
    parseDeviceMessage,
    updateStationData,
    getStationData,
    getAllStationData,
    getStationsByTunnel,
    getStationsWithAlerts,
    formatTimestamp,
    isAbnormal,
    debugStationDataMap,
    SENSOR_THRESHOLDS
  };
  
  // Also expose the map directly for debugging
  window.SensorStationManager._stationDataMap = stationDataMap;
}

