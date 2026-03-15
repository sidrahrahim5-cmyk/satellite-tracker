function Footer() {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-dot"></span>
            <span className="footer-logo-text">SatTracker</span>
          </div>
          <p className="footer-desc">
            Real-time satellite tracking for everyone.
            Know exactly when ISS passes over your sky.
          </p>
          <div className="footer-status">
            <span className="footer-status-dot"></span>
            <span>All systems operational</span>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="footer-col">
          <h4 className="footer-col-title">Features</h4>
          <ul className="footer-links">
            <li><a href="#">Live Tracking</a></li>
            <li><a href="#">Pass Predictions</a></li>
            <li><a href="#">Sky Map</a></li>
            <li><a href="#">Notifications</a></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="footer-col">
          <h4 className="footer-col-title">Resources</h4>
          <ul className="footer-links">
            <li><a href="#">NASA API</a></li>
            <li><a href="#">N2YO API</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4 className="footer-col-title">Get Pass Alerts</h4>
          <p className="footer-newsletter-desc">
            Get notified when ISS is visible from your location.
          </p>
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="your@email.com"
              className="footer-input"
            />
            <button className="footer-btn">Notify Me</button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 SatTracker. Built with React, Node.js & ❤️
        </p>
        <div className="footer-badges">
          <span className="footer-badge">🛸 ISS Live</span>
          <span className="footer-badge">🌍 NASA Data</span>
          <span className="footer-badge">⚡ Real-time</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer