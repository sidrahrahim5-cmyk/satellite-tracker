function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT — Logo + Links */}
      <div className="navbar-left">

        <a href="#" className="logo">
          <span className="logo-dot"></span>
          <span className="logo-text">SatTracker</span>
        </a>

        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Live Map</a></li>
          <li><a href="#">My Passes</a></li>
          <li><a href="#">About</a></li>
        </ul>

      </div>

      {/* RIGHT — Status + Button + Avatar */}
      <div className="navbar-right">

        <div className="iss-status">
          <span className="status-dot"></span>
          <span className="status-text">ISS LIVE</span>
        </div>

        <button className="track-btn">Track Now</button>

        <div className="avatar">U</div>

      </div>

    </nav>
  )
}

export default Navbar;