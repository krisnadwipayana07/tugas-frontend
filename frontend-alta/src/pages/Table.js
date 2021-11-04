import React, { useState } from "react";
import Navbar2 from "../component/Navbar2";
import { tableData } from "./TableData";

export default function Tables() {
  const [data, setData] = useState(tableData);
  const [dataBaru, setDataBaru] = useState([]);
  const [tambahOn, setTambahOn] = useState(false);

  const handleDelete = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const changeValue = (e) => {
    setDataBaru({ ...dataBaru, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar2 title="Stasiun Gubeng" />
      <div className="container p-2">
        <h2 className="text-center">Daftar Penumpang</h2>
        <table class="table m-2 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Umur</th>
              <th scope="col">Kelas</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, nama, kelas, umur }) => (
              <tr>
                <td>{id} </td>
                <td>{nama}</td>
                <td>{umur}</td>
                <td>{kelas}</td>
                <td>
                  <button className="btn btn-warning mx-1">update</button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDelete(id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-success d-flex container-fluid justify-content-center"
          onClick={() => setTambahOn(!tambahOn)}
        >
          Tambah
        </button>
        {tambahOn && (
          <div className="container-xxl">
            <Navbar2 title="Tambah Penumpang" />
            <form>
              <div class="mb-3 ">
                <label for="inputNama" class="form-label">
                  Nama Penumpang
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  aria-describedby="emailHelp"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div class="mb-3">
                <label for="inputNama" class="form-label">
                  Umur Penumpang
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  aria-describedby="emailHelp"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div class="mb-3">
                <label for="inputNama" class="form-label">
                  Kelas
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => changeValue(e)}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
