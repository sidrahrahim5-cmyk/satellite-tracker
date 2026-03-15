function Hero() {
  return (
    <section className="hero">

      {/* Animated Stars Background */}
      <div className="stars"></div>
      <div className="stars2"></div>

      {/* Main Content */}
      <div className="hero-content">

        {/* Top Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Live Satellite Tracking</span>
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          Track Satellites
          <span className="hero-title-gradient"> Above You</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Find out exactly when ISS will pass over your location tonight.
          Real-time tracking, pass predictions & sky alerts.
        </p>

        {/* Search Box */}
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">📍</span>
            <input
              type="text"
              placeholder="Enter your city (e.g. Karachi, Lahore...)"
              className="search-input"
            />
            <button className="search-btn">Track Now</button>
          </div>
          <p className="search-hint">
            Try: Karachi · Lahore · Islamabad · Dubai
          </p>
        </div>

        {/* Stats Row */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">408</span>
            <span className="stat-unit">km</span>
            <span className="stat-label">Orbit Height</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">28,000</span>
            <span className="stat-unit">km/h</span>
            <span className="stat-label">ISS Speed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">15.5</span>
            <span className="stat-unit">x</span>
            <span className="stat-label">Orbits Per Day</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">6</span>
            <span className="stat-unit">min</span>
            <span className="stat-label">Avg Pass Time</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero