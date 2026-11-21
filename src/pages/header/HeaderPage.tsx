import React from "react";
import "./HeaderStyle.css";

function HeaderPage() {
  return (
    <>
      <div id="main-header" className="wrap nav-in">
        <div className="logo-wrap">
          <a className="logo" data-go="home" aria-label="Seeking Guru home">
            <span className="logo-mark">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3l2.6 5.6L20 9.5l-4 4 1 5.5-5-2.7-5 2.7 1-5.5-4-4 5.4-.9z"></path>
              </svg>
            </span>
            Seeking Guru
          </a>
        </div>
        <div className="menu-wrap">
          <nav className="nav-links" aria-label="Main navigation" id="navLinks">
            <a className="nav-link" data-go="home" aria-current="page">
              Home
            </a>
            <a className="nav-link" data-go="explore">
              Explore
            </a>
            <a className="nav-link" data-go="bookings">
              My bookings
            </a>
            <a className="nav-link" data-go="messages">
              Messages
            </a>
          </nav>
        </div>
        <div class="nav-spacer"></div>
        <div className="nav-role">
          <span className="seg-label">Preview as</span>
          <div className="seg" role="group" aria-label="Preview as">
            <button id="roleLearner" aria-pressed="true">
              Learner
            </button>
            <button id="roleGuru" aria-pressed="false">
              Guru
            </button>
          </div>
        </div>
        <div className="w-20"></div>
      </div>
    </>
  );
}

export default HeaderPage;
