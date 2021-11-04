import React, { Component } from "react";
import Navbar2 from "../component/Navbar2";
import { tableData } from "./TableData";

class Table extends Component {
  constructor(){
    super()
    this.state = {
      penumpang: {
        nama: "",
        umur: 0,
        kelas: "",
      },
    }
  }
  render() {
    return (
      
    );
  }
}

export default function Tables() {
  return (
    <>
      <Navbar2 title="Daftar Penumpang" />
      <div className="container p-2">
        <h2 className="text-center">Stasiun Gubeng</h2>
        <table class="table m-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Umur</th>
              <th scope="col">Kelas</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ nama, kelas, umur }, key) => (
              <tr>
                <th scope="row">{key + 1} </th>
                <td>{nama}</td>
                <td>{umur}</td>
                <td>{kelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
