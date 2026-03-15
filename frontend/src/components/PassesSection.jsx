const passData = [
  {
    id: 1,
    badge: "Tonight",
    badgeClass: "badge-tonight",
    date: "Saturday, March 14",
    rise: "08:32 PM",
    set: "08:38 PM",
    duration: "6 min",
    elevation: "78°",
    direction: "SW → NE",
    visibility: "Excellent",
    visibilityClass: "vis-excellent",
    magnitude: "-3.8",
  },
  {
    id: 2,
    badge: "Tomorrow",
    badgeClass: "badge-tomorrow",
    date: "Sunday, March 15",
    rise: "07:15 AM",
    set: "07:19 AM",
    duration: "4 min",
    elevation: "45°",
    direction: "NW → SE",
    visibility: "Good",
    visibilityClass: "vis-good",
    magnitude: "-2.1",
  },
  {
    id: 3,
    badge: "In 2 Days",
    badgeClass: "badge-upcoming",
    date: "Monday, March 16",
    rise: "09:44 PM",
    set: "09:47 PM",
    duration: "3 min",
    elevation: "22°",
    direction: "N → S",
    visibility: "Average",
    visibilityClass: "vis-average",
    magnitude: "-1.2",
  },
]

function PassCard({ pass }) {
  return (
    <div className="pass-card">

      {/* Card Top */}
      <div className="card-top">
        <span className={`pass-badge ${pass.badgeClass}`}>
          {pass.badge}
        </span>
        <span className="pass-duration">{pass.duration}</span>
      </div>

      {/* Date */}
      <p className="pass-date">{pass.date}</p>

      {/* Divider */}
      <div className="card-divider"></div>

      {/* Pass Details */}
      <div className="pass-details">
        <div className="detail-row">
          <span className="detail-label">Rise Time</span>
          <span className="detail-value">{pass.rise}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Set Time</span>
          <span className="detail-value">{pass.set}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Max Elevation</span>
          <span className="detail-value highlight">{pass.elevation}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Direction</span>
          <span className="detail-value">{pass.direction}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Magnitude</span>
          <span className="detail-value">{pass.magnitude}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="card-divider"></div>

      {/* Visibility */}
      <div className={`visibility-bar ${pass.visibilityClass}`}>
        <span className="vis-dot"></span>
        <span>{pass.visibility} Visibility</span>
      </div>

      {/* Button */}
      <button className="card-btn">Set Reminder</button>

    </div>
  )
}

function PassesSection() {
  return (
    <section className="passes-section">

      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span>🛸</span>
          <span>Upcoming Passes</span>
        </div>
        <h2 className="section-title">
          Next ISS Passes
          <span className="section-title-sub"> Over Your Location</span>
        </h2>
        <p className="section-subtitle">
          Showing predicted passes for the next 7 days.
          Enter your city above for accurate results.
        </p>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        {passData.map(pass => (
          <PassCard key={pass.id} pass={pass} />
        ))}
      </div>

    </section>
  )
}

export default PassesSection