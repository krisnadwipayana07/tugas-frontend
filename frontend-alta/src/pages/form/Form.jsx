import Navbar2 from "../../component/Navbar2";
import React, { useRef, useState } from "react";
import { baseData } from "./BaseData";

export default function Form() {
  const [data, setData] = useState(baseData);
  const suratKesungguhan = useRef(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errorAvaliable, setErrorAvaliable] = useState(false);

  const textOnlyRegex = /^[A-Za-z]*$/;

  const handleReset = () => {
    setData(baseData);
    setErrorMessage([]);
    setErrorAvaliable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage([]);
    if (suratKesungguhan.current.files[0] === "") {
      setErrorMessage([...errorMessage, { error: "surat kesungguhan Kosong" }]);
    }
    if (!textOnlyRegex.test(data.nama)) {
      setErrorMessage([
        ...errorMessage,
        { error: "Nama Lengkap Harus Berupa Hurup" },
      ]);
    }
    if (errorMessage.length < 1) {
      alert('data Pendaftar "' + data.nama + '" Berhasil Diterima');
    } else {
      setErrorAvaliable(true);
      console.log(errorMessage);
      alert("data Pendaftar Tidak Sesuai");
    }
  };
  return (
    <div>
      <Navbar2 title="Pendaftaran Peserta Coding Bootcamp" />
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="mb-3">
            <label class="form-label">Nama Lengkap:</label>
            <input
              type="text"
              class="form-control"
              name="nama"
              aria-describedby="emailHelp"
              value={data.nama}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              No Handphone
            </label>
            <input
              type="text"
              minLength="9"
              maxLength="14"
              class="form-control"
              name="noHandphone"
              value={data.noHandphone}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <p>Latar Belakang Pendidikan : </p>
          <div className="d-inline-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pendidikan"
                value="IT"
                onChange={(e) => handleChange(e)}
                required
              />
              <label class="form-check-label" for="exampleRadios1">
                IT
              </label>
            </div>
            <div class="form-check mx-3">
              <input
                class="form-check-input"
                type="radio"
                name="pendidikan"
                value="Non IT"
                onChange={(e) => handleChange(e)}
              />
              <label class="form-check-label" for="exampleRadios2">
                Non IT
              </label>
            </div>
          </div>
          <p className="mt-3">Kelas Coding yang dipilih :</p>
          <select
            class="form-select"
            aria-label="Default select example"
            name="kelas"
            onChange={(e) => handleChange(e)}
            required
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
            <input
              type="file"
              class="form-control"
              id="inputGroupFile02"
              ref={suratKesungguhan}
              accept="image/*"
              required
            />
          </div>
          <div class="mb-3">
            <label>Harapan Untuk Coding Bootcamp ini :</label>
            <textarea
              class="form-control"
              name="harapan"
              rows="3"
              value={data.harapan}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <ul>
            {errorMessage.map((item, i) => (
              <li key={i}>{item.error} </li>
            ))}{" "}
          </ul>
          <button type="submit" class="btn btn-success mt-3 px-4">
            Submit
          </button>
          <button class="btn btn-danger mt-3 mx-3 px-4" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
