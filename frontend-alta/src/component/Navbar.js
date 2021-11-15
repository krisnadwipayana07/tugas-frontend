import React, { useEffect } from "react";

const orange = {
  color: "#f47522",
};

export default function Navbar({ page }) {
  useEffect(() => {
    document.getElementById(page).style.color = "#f47522";
  }, [page]);
  return (
    <div>
      <nav
        className="
        navbar
        sticky-top
        navbar-expand-lg navbar-light
        bg-white
        px-5
        overflow-auto
      "
      >
        <div className="container-fluid">
          <a href="/">
            <img
              src="asset/img/logo-ALTA@2x.png"
              alt="logo"
              style={{ width: "100px", marginRight: "5px" }}
            />
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
                <a className="nav-link active font700" id="home" href="/">
                  HOME
                </a>
              </li>
              <li
                className="nav-item mx-2 font400"
                style={{ color: "#19345e" }}
              >
                <a className="nav-link" href="/" id="about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2 font400">
                <a className="nav-link" href="/news" id="news">
                  NEWS
                </a>
              </li>
              <li className="nav-item mx-2 font400">
                <a className="nav-link" href="/contactus" id="contactus">
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
