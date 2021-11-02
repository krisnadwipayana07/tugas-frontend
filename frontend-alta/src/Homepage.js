import React from "react";
import Navbar from "./component/Navbar";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div class="bgImage p-5">
        <div class="p-5 gathering">
          <img
            src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
            alt="profile-pic"
            width="350px"
            height="350px"
            className="border"
          />
          <div class="m-5 font500">
            <h4>Hi, my name is</h4>
            <h1 className="fontSetting">Anne Sullivan</h1>
            <h3 class="my-4">I build things for the web</h3>
            <button
              type="button"
              class="btn bgOrange text-white px-4 gambarPic border"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
