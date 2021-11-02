import React from "react";
import "./Navbar.css";

const orange = {
  color: "#f47522",
};

export default function Navbar() {
  const emptyURL = "";
  return (
    <div>
      <nav
        className="
        navbar
        sticky-top
        navbar-expand-lg navbar-light
        bg-white
        px-5
        navbar-nav-scroll
        overflow-auto
      "
      >
        <div className="container-fluid">
          <a href="file2.html">
            <img src="asset/img/logo-ALTA@2x.png" alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="mx-3">
                <a
                  className="nav-link active font700 color-orange"
                  style={orange}
                  href={emptyURL}
                >
                  HOME
                </a>
              </li>
              <li
                className="nav-item mx-2 font400"
                //   style="color: #19345e"
              >
                <a className="nav-link" href={emptyURL}>
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2 font400">
                <a className="nav-link" href={emptyURL}>
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item mx-2 font400">
                <a className="nav-link" href="/contactus">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
