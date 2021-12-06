import React, { useState } from "react";

export default function TableRow({ id, nama, umur, kelas, handleDelete }) {
  const [updateOn, setUpdateOn] = useState(false);
  const [updateData, setUpdateData] = useState([]);

  const updateValue = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <tr>
        <td>{id} </td>
        <td>{nama}</td>
        <td>{umur}</td>
        <td>{kelas}</td>
        <td>
          <button
            className="btn btn-warning mx-1"
            onClick={() => setUpdateOn(!updateOn)}
          >
            update
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={() => handleDelete(id)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
}
