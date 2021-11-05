import React, { useState } from "react";
import Navbar2 from "../component/Navbar2";
import TableRow from "../component/TableRow";
import { tableData } from "./TableData";

export default function Tables() {
  const [data, setData] = useState(tableData);
  const [dataBaru, setDataBaru] = useState({
    id: 0,
    nama: "",
    kelas: "",
    umur: "",
  });
  const [tambahOn, setTambahOn] = useState(false);
  const [editOn, setEditOn] = useState(false);

  const handleDelete = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const changeValue = (e) => {
    setDataBaru({ ...dataBaru, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let last = data.length;
    let lastId = data[last - 1].id + 1;
    console.log(lastId);

    setDataBaru({ ...dataBaru, id: lastId });
    console.log(dataBaru);
    setData([...data, dataBaru]);
    console.log(data);
  };
  return (
    <>
      <Navbar2 title="Stasiun Gubeng" />
      <div className="container p-2">
        <h2 className="text-center">Daftar Penumpang</h2>
        <button
          className="btn btn-success float-end"
          onClick={() => setTambahOn(!tambahOn)}
        >
          Tambah
        </button>
        {tambahOn && (
          <div className="container-xxl">
            <Navbar2 title="Tambah Penumpang" />
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="mb-3 ">
                <label for="inputNama" class="form-label">
                  Nama Penumpang
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="nama"
                  aria-describedby="emailHelp"
                  required
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div class="mb-3">
                <label for="inputUmur" class="form-label">
                  Umur Penumpang
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="umur"
                  required
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div class="mb-3">
                <label for="inputKelas" class="form-label">
                  Kelas
                </label>
                <select
                  class="form-select"
                  name="kelas"
                  aria-label="Default select example"
                  onChange={(e) => changeValue(e)}
                >
                  <option selected>Open this select menu</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
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
              <TableRow
                id={id}
                nama={nama}
                kelas={kelas}
                umur={umur}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
