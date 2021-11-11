import React from "react";
import "./TodoCard.css";

export default function TodoCard({
  id,
  title,
  completed,
  handleDelete,
  handleCheck,
  handleEdit,
}) {
  return (
    <div className="m-3 border p-3">
      <input
        class="form-check-input mx-2"
        type="checkbox"
        checked={completed}
        onClick={() => handleCheck(id)}
      />
      {completed ? <s>{title}</s> : <b>{title} </b>}
      <div className="float-end">
        <button
          className="btn btn-warning mx-2"
          style={{ borderRadius: "200px" }}
          onClick={() => handleEdit(id, title, completed)}
        >
          Edit
        </button>
        <button
          className="btn float-end btn-danger"
          style={{ borderRadius: "200px" }}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
