// Map Display Component
// Integrates Leaflet map for displaying sensor stations

let mapInstance = null;
let stationMarkers = new Map();
let tunnelMarkers = new Map();
let bulkDataPending = false;

// Initialize map
function initMap(
  containerId = "sensorMap",
  center = [20.9811, 105.7871],
  zoom = 13
) {
  // Check if Leaflet is loaded
  if (typeof L === "undefined") {
    console.error(
      "Leaflet library not loaded. Please include Leaflet CSS and JS."
    );
    return null;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Map container #${containerId} not found`);
    return null;
  }

  // Initialize map
  mapInstance = L.map(containerId, {
    center: center,
    zoom: zoom,
    zoomControl: true,
  });

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(mapInstance);

  // Wait a bit for data to be available, then load and plot stations
  setTimeout(() => {
    loadStationsOnMap();
  }, 100);

  return mapInstance;
}

// Load stations from sensor station manager and plot on map
function loadStationsOnMap() {
  if (!mapInstance) {
    console.warn("Cannot load stations: mapInstance not initialized");
    return;
  }

  // Clear existing markers
  clearAllMarkers();

  // Get all tunnels
  const tunnels = window.getAllTunnels ? window.getAllTunnels() : [];

  // Plot tunnels
  tunnels.forEach((tunnel) => {
    plotTunnel(tunnel);
  });

  // Get all station data
  const stations = window.SensorStationManager
    ? window.SensorStationManager.getAllStationData()
    : [];

  console.log("Loading stations on map:", stations.length, "stations found");

  if (stations.length === 0) {
    // Only warn once per session
    if (!loadStationsOnMap._warned) {
      console.warn(
        "No stations found in SensorStationManager. Attempting to load mock data..."
      );
      loadStationsOnMap._warned = true;
    }
    // Try to trigger data load if not already loaded
    if (
      window.loadMockSensorData &&
      typeof window.loadMockSensorData === "function"
    ) {
      window.loadMockSensorData();
      // Retry after a delay
      setTimeout(() => {
        const retryStations = window.SensorStationManager
          ? window.SensorStationManager.getAllStationData()
          : [];
        if (retryStations.length > 0) {
          console.log(
            "Loaded",
            retryStations.length,
            "stations after loading mock data"
          );
          retryStations.forEach((station) => plotStation(station));
          loadStationsOnMap._warned = false; // Reset warning flag on success
        }
      }, 500);
    }
    return;
  }

  // Plot stations
  stations.forEach((station) => {
    plotStation(station);
  });

  console.log("Map markers plotted:", stationMarkers.size, "station markers");
}

// Plot tunnel marker
function plotTunnel(tunnel) {
  if (!mapInstance || !tunnel || !tunnel.coordinates) return;

  const icon = L.divIcon({
    className: "tunnel-marker",
    html: `<div class="tunnel-marker-icon">
             <i class="fa-solid fa-building"></i>
             <span>${tunnel.name}</span>
           </div>`,
    iconSize: [120, 40],
    iconAnchor: [60, 20],
  });

  const marker = L.marker(tunnel.coordinates, { icon })
    .addTo(mapInstance)
    .bindPopup(createTunnelPopup(tunnel));

  tunnelMarkers.set(tunnel.id, marker);
}

// Plot station marker
function plotStation(station) {
  if (!mapInstance || !station) {
    console.warn("Cannot plot station: mapInstance or station missing", {
      mapInstance: !!mapInstance,
      station,
    });
    return;
  }

  // Get coordinates from tunnel mapping
  let coordinates = null;
  if (window.getStationCoordinates && station.stationId) {
    const tunnelId =
      station.tunnelId || extractTunnelIdFromStation(station.stationId);
    coordinates = window.getStationCoordinates(tunnelId, station.stationId);
  }

  // Fallback to tunnel coordinates if station coordinates not found
  if (!coordinates && station.tunnelId && window.getTunnelById) {
    const tunnel = window.getTunnelById(station.tunnelId);
    if (tunnel) coordinates = tunnel.coordinates;
  }

  if (!coordinates) {
    console.warn(
      "No coordinates found for station:",
      station.stationId,
      "tunnel:",
      station.tunnelId
    );
    return;
  }

  // Get status color
  const status = station.overallStatus || "normal";
  const color = getStatusColor(status);

  // Create custom icon
  const icon = L.divIcon({
    className: "station-marker",
    html: `<div class="station-marker-icon" style="background-color: ${color};">
             <i class="fa-solid fa-sensor"></i>
           </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  const marker = L.marker(coordinates, { icon })
    .addTo(mapInstance)
    .bindPopup(createStationPopup(station))
    .on("click", () => {
      handleStationClick(station);
    });

  stationMarkers.set(station.stationId, marker);
}

// Create tunnel popup content
function createTunnelPopup(tunnel) {
  const stations = window.getStationsByTunnel
    ? window.getStationsByTunnel(tunnel.id)
    : [];

  return `
    <div class="map-popup">
      <h4>${tunnel.name}</h4>
      <p><strong>ID:</strong> ${tunnel.id}</p>
      <p><strong>Số trạm:</strong> ${stations.length}</p>
      <button onclick="focusTunnel('${tunnel.id}')" class="map-popup-btn">
        Xem chi tiết
      </button>
    </div>
  `;
}

// Create station popup content
function createStationPopup(station) {
  const formatTime = window.SensorStationManager
    ? window.SensorStationManager.formatTimestamp(station.timestamp)
    : station.timestamp;

  const statusText = getStatusText(station.overallStatus);
  const statusColor = getStatusColor(station.overallStatus);

  return `
    <div class="map-popup">
      <h4>${station.stationName || station.stationId}</h4>
      <p><strong>Trạng thái:</strong> 
        <span style="color: ${statusColor};">${statusText}</span>
      </p>
      <p><strong>Nhiệt độ:</strong> ${
        Number(station.temperature).toFixed(2) || "N/A"
      }°C</p>
      <p><strong>Dòng điện:</strong> ${"380 V / 30 A" || "N/A"}</p>
      <p><strong>Mực nước:</strong> ${
        Number(station.waterLevel).toFixed(2) || "N/A"
      }mm</p>
      <p><strong>Cập nhật:</strong> ${formatTime}</p>
      <button onclick="openStationDetail('${
        station.stationId
      }')" class="map-popup-btn">
        Xem chi tiết
      </button>
    </div>
  `;
}

// Get status color
function getStatusColor(status) {
  const colors = {
    normal: "#4CAF50",
    low: "#FFC107",
    medium: "#FF9800",
    high: "#F44336",
  };
  return colors[status] || colors.normal;
}

// Get status text
function getStatusText(status) {
  const texts = {
    normal: "Bình thường",
    low: "Cảnh báo thấp",
    medium: "Cảnh báo trung bình",
    high: "Cảnh báo cao",
  };
  return texts[status] || "Không xác định";
}

// Handle station click
function handleStationClick(station) {
  // Open station detail panel or modal
  if (window.openStationDetail) {
    window.openStationDetail(station.stationId);
  } else {
    console.log("Station clicked:", station);
  }
}

// Focus on tunnel
function focusTunnel(tunnelId) {
  if (!mapInstance) return;

  const tunnel = window.getTunnelById ? window.getTunnelById(tunnelId) : null;
  if (!tunnel || !tunnel.coordinates) return;

  mapInstance.setView(tunnel.coordinates, 15);

  // Open tunnel marker popup
  const marker = tunnelMarkers.get(tunnelId);
  if (marker) {
    marker.openPopup();
  }
}

// Open station detail
function openStationDetail(stationId) {
  // This will be handled by the main application
  console.log("Opening station detail for:", stationId);

  // Dispatch event for other components to handle
  window.dispatchEvent(
    new CustomEvent("stationDetailRequest", {
      detail: { stationId },
    })
  );
}

// Update station marker
function updateStationMarker(station) {
  const marker = stationMarkers.get(station.stationId);
  if (!marker) {
    plotStation(station);
    return;
  }

  // Update popup content
  marker.setPopupContent(createStationPopup(station));

  // Update icon color
  const status = station.overallStatus || "normal";
  const color = getStatusColor(status);

  const icon = L.divIcon({
    className: "station-marker",
    html: `<div class="station-marker-icon" style="background-color: ${color};">
             <i class="fa-solid fa-sensor"></i>
           </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  marker.setIcon(icon);
}

// Clear all markers
function clearAllMarkers() {
  stationMarkers.forEach((marker) => marker.remove());
  tunnelMarkers.forEach((marker) => marker.remove());
  stationMarkers.clear();
  tunnelMarkers.clear();
}

// Extract tunnel ID from station ID
function extractTunnelIdFromStation(stationId) {
  const match = stationId.match(/^(HN\d+-T\d+)/);
  return match ? match[1] : "";
}

// Refresh map (reload all stations)
function refreshMap() {
  loadStationsOnMap();
}

// Export functions
if (typeof window !== "undefined") {
  window.MapDisplay = {
    initMap,
    loadStationsOnMap,
    plotStation,
    plotTunnel,
    updateStationMarker,
    clearAllMarkers,
    refreshMap,
    focusTunnel,
    openStationDetail,
  };

  // Make functions globally available
  window.focusTunnel = focusTunnel;
  window.openStationDetail = openStationDetail;
}

// Listen for station data updates
if (typeof window !== "undefined") {
  window.addEventListener("stationDataUpdated", (event) => {
    const station = event.detail;
    if (station && station.stationId) {
      // If map exists, update or add marker
      if (mapInstance) {
        const existingMarker = stationMarkers.get(station.stationId);
        if (existingMarker) {
          updateStationMarker(station);
        } else {
          // Marker doesn't exist yet, plot it
          plotStation(station);
        }
      }
    }
  });

  // Also listen for bulk data updates
  window.addEventListener("bulkStationDataLoaded", () => {
    if (mapInstance) {
      console.log("Bulk station data loaded event received, refreshing map...");
      loadStationsOnMap();
    } else {
      // Map not ready yet - will be loaded when map initializes
      // Suppress repeated warnings - flag is handled at module level
      bulkDataPending = true;
      // Clear flag after map initializes
      setTimeout(() => {
        bulkDataPending = false;
      }, 5000);
    }
  });
}
