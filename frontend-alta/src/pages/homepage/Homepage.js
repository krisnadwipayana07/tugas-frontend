import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import "./Homepage.css";

import { Link } from "react-router-dom";

export default function Homepage() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }, []);
  return (
    <div style={{ color: "#19345e" }}>
      <Navbar page="home" />
      <div className="" style={{ height: "100%" }}>
        <div className="float-end px-5">
          <h3>{clock.toLocaleTimeString()} </h3>
        </div>
        <div className="p-5 bgImage">
          <div className="p-5 d-flex">
            <img
              src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
              alt="profile-pic"
              width="350px"
              height="350px"
              className="border"
            />
            <div className="m-5">
              <h4>Hi, my name is</h4>
              <h1 className="fontSetting">Anne Sullivan</h1>
              <h3 className="my-4">I build things for the web</h3>
              {/* <button
                className="btn-orange border p-2 px-4"
                onclick="location.href='/contactus'"
              >
                Get in Touch
              </button> */}
              <Link className="btn-orange border p-2 px-4" to="/contactus">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
