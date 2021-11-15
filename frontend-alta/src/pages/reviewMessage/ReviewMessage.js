import React, { useState } from "react";
import "./review.css";

export default function ReviewMessage(props) {
  //   const [data, setData] = useState(props.location.state.data);
  const data = props.location.state || {};
  return (
    <div>
      <div className="contain">
        <h6>
          Full Name : <span id="fullName">{data.fullName} </span>
        </h6>
        <h6>
          Email Address : <span id="email">{data.email} </span>
        </h6>
        <h6>
          Phone Number : <span id="phoneNumber">{data.phoneNumber} </span>
        </h6>
        <h6>
          Nationality : <span id="nationality">{data.nationality} </span>
        </h6>
        <br />
        <p id="message">{data.message} </p>
        <hr width="50%" style={{ marginLeft: "auto", marginRight: "auto" }} />
        <h4>Thanks For Contacting us!</h4>
        <h4>We will be in touch with you shortly.</h4>
        <a
          href="/"
          className="btn btnOrange text-white px-4"
          style={{ backgroundColor: "#f47522", borderRadius: "100px" }}
        >
          Home
        </a>
      </div>
      <div id="dots"></div>
      <div id="footerCol"></div>
    </div>
  );
}
