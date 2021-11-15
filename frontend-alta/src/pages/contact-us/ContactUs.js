import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../component/Navbar";
import "./ContactUs.css";

export default function ContactUs() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nationality: "indonesia",
    message: "",
  });

  const history = useHistory();
  const pushHistory = () => {
    history.push({
      pathname: "/reviewMessage",
      state: data,
    });
  };

  const changeValue = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <Navbar page="contactus" />
      <hr style={{ padding: 0, margin: 0 }} />
      <div className="d-flex flex-wrap">
        <div class="background" id="bgColor">
          <img src="asset/img/logo-ALTA-v2.png" alt="logo-ALTA" id="logo" />
        </div>
        <div class="p-5" style={{ width: "50rem" }}>
          <form class="need-validate" novalidate>
            <div class="p-5 font">
              <h3>Contact Us</h3>
              <div class="mb-3">
                <label for="fullName" class="form-label"></label>
                <b>
                  Full Name<span class="red">*</span>
                </b>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="insert your fullname here"
                  required
                  onChange={(e) => changeValue(e)}
                />
                <div class="invalid-feedback">Full Name cannot be empty</div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  <b>
                    Email Address<span class="red">*</span>
                  </b>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="example@domain.com"
                  required
                  onChange={(e) => changeValue(e)}
                />
                <div class="invalid-feedback">
                  Email Address cannot be empty
                </div>
              </div>
              <div class="mb-3">
                <label for="phoneNumber" class="form-label">
                  <b>
                    Phone Number<span class="red">*</span>
                  </b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="phoneNumber"
                  placeholder="087278XXXXXXXX"
                  required
                  onChange={(e) => changeValue(e)}
                />
                <div class="invalid-feedback">Phone number cannot be empty</div>
              </div>
              <div class="mb-3">
                <label for="nationality" class="form-label">
                  <b>Nationality</b>
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="nationality"
                  onChange={(e) => changeValue(e)}
                >
                  <option selected value="indonesia">
                    Indonesia
                  </option>
                  <option value="inggris">Inggris</option>
                  <option value="korea">Korea</option>
                  <option value="jepang">Jepang</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  <b>Message</b>
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  onChange={(e) => changeValue(e)}
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn-orange border p-2 px-4"
                onClick={() => pushHistory()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
