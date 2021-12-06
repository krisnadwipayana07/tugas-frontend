import Navbar2 from "../../component/Navbar2";
import React, { useRef, useState } from "react";
import { baseData } from "./BaseData";

export default function Form() {
  const [data, setData] = useState(baseData);
  const suratKesungguhan = useRef("");
  const errorMessage = [];
  return (
    <div>
      <Navbar2 title="Pendaftaran Peserta Coding Bootcamp" />
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Nama Lengkap:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              No Handphone
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <p>Latar Belakang Pendidikan : </p>
          <div className="d-inline-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Default radio
              </label>
            </div>
            <div class="form-check mx-3">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Second default radio
              </label>
            </div>
          </div>
          <p className="mt-3">Kelas Coding yang dipilih :</p>
          <select
            class="form-select"
            aria-label="Default select example"
            name="kelas"
          >
            <option selected value="blank">
              Pilih Salah Satu Program
            </option>
            <option value="Coding Backend with Golang">
              Coding Backend with Golang
            </option>
            <option value="Coding Frontend with ReactJS">
              Coding Frontend with ReactJS
            </option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
          <div class="my-3">
            <p>Foto surat kesungguhan :</p>
            <input type="file" class="form-control" id="inputGroupFile02" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Harapan Untuk Coding Bootcamp ini :
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-success mt-3 px-4">
            Submit
          </button>
          <button type="submit" class="btn btn-danger mt-3 mx-3 px-4">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
