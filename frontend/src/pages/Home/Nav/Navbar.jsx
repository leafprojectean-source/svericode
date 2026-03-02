import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export default function Navbar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/logo.jpeg" alt="S-Vericode Logo" className="logo-img" />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/problems">Problems</NavLink>
          <NavLink to="/contests">Contests</NavLink>
          <NavLink to="/playground">Playground</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </div>

        {/* Right Section */}
        <div className="nav-right">
          <input
            type="text"
            placeholder="Search problems..."
            className="search"
          />

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/signup" className="signup">
                Sign Up
              </Link>
            </>
          ) : (
            <div className="profile-wrapper">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="profile-btn"
              >
                👤
              </button>
              {profileOpen && (
                <div className="dropdown">
                  <Link to="/profile">My Profile</Link>
                  <Link to="/submissions">Submissions</Link>
                  <Link to="/settings">Settings</Link>
                  <button className="logout">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-drawer">
          <NavLink to="/problems">Problems</NavLink>
          <NavLink to="/contests">Contests</NavLink>
          <NavLink to="/playground">Playground</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </div>
      )}
    </nav>
  );
}
