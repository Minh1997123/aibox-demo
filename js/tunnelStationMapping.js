// Tunnel and Station Mapping Configuration
// Hard-coded tunnel definitions with coordinates and station mappings

const TUNNEL_DEFINITIONS = [
  {
    id: "HN1-T12",
    name: "Hầm 1 - T12",
    coordinates: [20.9811, 105.7871], // Hà Đông area, Hanoi
    stations: [
      { id: "HN1-T12-ST01", name: "HN1 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN1-T12-ST02", name: "HN1 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN2-T12",
    name: "Hầm 2 - T12",
    coordinates: [20.9821, 105.7881],
    stations: [
      { id: "HN2-T12-ST01", name: "HN2 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN2-T12-ST02", name: "HN2 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN3-T12",
    name: "Hầm 3 - T12",
    coordinates: [20.9831, 105.7891],
    stations: [
      { id: "HN3-T12-ST01", name: "HN3 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN3-T12-ST02", name: "HN3 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN4-T12",
    name: "Hầm 4 - T12",
    coordinates: [20.9841, 105.7901],
    stations: [
      { id: "HN4-T12-ST01", name: "HN4 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN4-T12-ST02", name: "HN4 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN5-T12",
    name: "Hầm 5 - T12",
    coordinates: [20.9851, 105.7911],
    stations: [
      { id: "HN5-T12-ST01", name: "HN5 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN5-T12-ST02", name: "HN5 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN6-T12",
    name: "Hầm 6 - T12",
    coordinates: [20.9861, 105.7921],
    stations: [
      { id: "HN6-T12-ST01", name: "HN6 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN6-T12-ST02", name: "HN6 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN7-T12",
    name: "Hầm 7 - T12",
    coordinates: [20.9871, 105.7931],
    stations: [
      { id: "HN7-T12-ST01", name: "HN7 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN7-T12-ST02", name: "HN7 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN8-T12",
    name: "Hầm 8 - T12",
    coordinates: [20.9881, 105.7941],
    stations: [
      { id: "HN8-T12-ST01", name: "HN8 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN8-T12-ST02", name: "HN8 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  },
  {
    id: "HN9-T12",
    name: "Hầm 9 - T12",
    coordinates: [20.9891, 105.7951],
    stations: [
      { id: "HN9-T12-ST01", name: "HN9 T12 - 18T11.4-E1.30", offset: [0.001, 0.001] },
      { id: "HN9-T12-ST02", name: "HN9 T12 - 18T11.4-E1.31", offset: [0.002, 0.001] }
    ]
  }
];

// Get tunnel by ID
function getTunnelById(tunnelId) {
  return TUNNEL_DEFINITIONS.find(t => t.id === tunnelId);
}

// Get station coordinates (tunnel coordinates + offset)
function getStationCoordinates(tunnelId, stationId) {
  const tunnel = getTunnelById(tunnelId);
  if (!tunnel) return null;
  
  const station = tunnel.stations.find(s => s.id === stationId);
  if (!station) return tunnel.coordinates;
  
  return [
    tunnel.coordinates[0] + station.offset[0],
    tunnel.coordinates[1] + station.offset[1]
  ];
}

// Get all stations for a tunnel
function getStationsByTunnel(tunnelId) {
  const tunnel = getTunnelById(tunnelId);
  return tunnel ? tunnel.stations : [];
}

// Get all tunnels
function getAllTunnels() {
  return TUNNEL_DEFINITIONS;
}

// Find tunnel by station ID
function getTunnelByStationId(stationId) {
  for (const tunnel of TUNNEL_DEFINITIONS) {
    const station = tunnel.stations.find(s => s.id === stationId);
    if (station) return tunnel;
  }
  return null;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TUNNEL_DEFINITIONS,
    getTunnelById,
    getStationCoordinates,
    getStationsByTunnel,
    getAllTunnels,
    getTunnelByStationId
  };
}

// Export for global use in browser
if (typeof window !== 'undefined') {
  window.TUNNEL_DEFINITIONS = TUNNEL_DEFINITIONS;
  window.getTunnelById = getTunnelById;
  window.getStationCoordinates = getStationCoordinates;
  window.getStationsByTunnel = getStationsByTunnel;
  window.getAllTunnels = getAllTunnels;
  window.getTunnelByStationId = getTunnelByStationId;
}

