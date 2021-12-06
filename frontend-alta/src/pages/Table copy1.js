import React, { Component } from "react";
import Navbar2 from "../component/Navbar2";
// import { tableData } from "./TableData";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          nama: "krisna",
          umur: 0,
          kelas: "a",
        },
        {
          id: 2,
          nama: "krisna",
          umur: 0,
          kelas: "b",
        },
      ],
    };
  }
  onDelete = (id) => {
    let temp = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: temp,
    });
  };

  render() {
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
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(({ id, nama, kelas, umur }) => (
                <tr>
                  <th scope="row">{id} </th>
                  <td>{nama}</td>
                  <td>{umur}</td>
                  <td>{kelas}</td>
                  <td>
                    <button onClick={this.onDelete(id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Table;
