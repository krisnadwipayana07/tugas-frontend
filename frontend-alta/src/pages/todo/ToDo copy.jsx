import React, { useState } from "react";
import TodoCard from "../../component/TodoCard";

export default function ToDo() {
  const [data, setData] = useState([
    {
      nama: "Alterra",
      umur: 100,
      kelas: "A",
    },
    {
      nama: "Academy",
      umur: 10,
      kelas: "A",
    },
    {
      nama: "Krisna Dwipayana",
      umur: 20,
      kelas: "A",
    },
  ]);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="m-auto">
      <h2
        className="p-5 text-center"
        style={{
          color: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59);",
        }}
      >
        To Do App
      </h2>
      <div class="input-group border-white m-3 p-3" style={{ border: 0 }}>
        <input
          type="text"
          class="form-control"
          placeholder="Add To Do.."
          id="title"
          name="title"
          value=""
          onChange={(e) => this.changeValue(e)}
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Submit
        </button>
      </div>
      <div className="container-fluid">
        {data.map(({ id, title, completed }, key) => (
          <TodoCard
            id={id}
            title={title}
            completed={completed}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
