import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// ISS Custom Icon
const issIcon = L.divIcon({
  className: '',
  html: `
    <div style="
      width: 40px;
      height: 40px;
      background: rgba(99,102,241,0.15);
      border: 2px solid #a78bfa;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 0 15px rgba(167,139,250,0.5);
    ">🛸</div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
})

// ISS Current Position (Static for now — baad mein real API se aayega)
const issPosition = [28.6139, 77.2090]

// Ground Track Path
const groundTrack = [
  [28.6139, 77.2090],
  [30.1234, 82.4321],
  [32.5678, 87.6543],
  [34.8901, 92.8765],
  [36.2345, 98.0987],
]

function LiveMap() {
  return (
    <section className="map-section">

      {/* Section Header */}
      <div className="map-header">
        <div className="section-badge">
          <span>🌍</span>
          <span>Live Tracking</span>
        </div>
        <h2 className="section-title">
          ISS Live
          <span className="section-title-sub"> Position</span>
        </h2>
        <p className="section-subtitle">
          Real-time International Space Station location on the globe.
        </p>
      </div>

      {/* ISS Info Bar */}
      <div className="iss-info-bar">
        <div className="iss-info-item">
          <span className="iss-info-label">Latitude</span>
          <span className="iss-info-value">28.61° N</span>
        </div>
        <div className="iss-info-divider"></div>
        <div className="iss-info-item">
          <span className="iss-info-label">Longitude</span>
          <span className="iss-info-value">77.20° E</span>
        </div>
        <div className="iss-info-divider"></div>
        <div className="iss-info-item">
          <span className="iss-info-label">Altitude</span>
          <span className="iss-info-value">408 km</span>
        </div>
        <div className="iss-info-divider"></div>
        <div className="iss-info-item">
          <span className="iss-info-label">Speed</span>
          <span className="iss-info-value">7.66 km/s</span>
        </div>
        <div className="iss-info-divider"></div>
        <div className="iss-info-item">
          <span className="iss-live-dot"></span>
          <span className="iss-info-value live-text">LIVE</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="map-wrapper">
        <MapContainer
          center={issPosition}
          zoom={3}
          className="leaflet-map"
          zoomControl={true}
          scrollWheelZoom={true}
        >
          {/* Dark Map Tiles */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          {/* ISS Marker */}
          <Marker position={issPosition} icon={issIcon}>
            <Popup className="iss-popup">
              <div style={{ background: '#0a0820', color: '#e2e8f0', padding: '8px', borderRadius: '8px' }}>
                <strong style={{ color: '#a78bfa' }}>🛸 ISS</strong>
                <br />
                Lat: 28.61° N
                <br />
                Lng: 77.20° E
                <br />
                Alt: 408 km
              </div>
            </Popup>
          </Marker>

          {/* Ground Track Line */}
          <Polyline
            positions={groundTrack}
            color="#a78bfa"
            weight={2}
            opacity={0.6}
            dashArray="6, 10"
          />

        </MapContainer>
      </div>

    </section>
  )
}

export default LiveMap