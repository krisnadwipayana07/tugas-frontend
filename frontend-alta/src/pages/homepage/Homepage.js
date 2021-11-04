import React from "react";
import Navbar from "../../component/Navbar";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="bgImage">
      <Navbar />
      <div className="p-5">
        <div className="p-5 gathering">
          <img
            src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
            alt="profile-pic"
            width="350px"
            height="350px"
            className="border"
          />
          <div className="m-5 ms-4 font500">
            <h4>Hi, my name is</h4>
            <h1 className="fontSetting">Anne Sullivan</h1>
            <h3 className="my-4">I build things for the web</h3>
            <button
              type="submit"
              class="btn-orange border p-2 px-4"
              onclick="location.href='/contactus'"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
