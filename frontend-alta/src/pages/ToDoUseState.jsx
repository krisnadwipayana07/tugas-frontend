import React, { useState } from "react";
import TodoCard from "../component/TodoCard";
import { todoData } from "./ToDoData";

export default function ToDoUseState() {
  const [data, setData] = useState(todoData);
  const [dataBaru, setDataBaru] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  const handleCheck = (id) => {
    let newData = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setData(newData);
  };

  const handleDelete = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const changeValue = (e) => {
    setDataBaru({ ...dataBaru, [e.target.name]: e.target.value });
  };

  const handleNewValue = () => {
    let last = data.length;
    let lastId = data[last - 1].id + 1;
    setDataBaru({
      id: lastId,
      title: "",
      completed: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    let same = data.find((item) => item.id === dataBaru.id);
    console.log(dataBaru);
    console.log(data);
    if (same) {
      let newData = data.map((item) =>
        item.id === dataBaru.id ? dataBaru : item
      );
      setData(newData);
    } else {
      //   let last = data.length;
      //   let lastId = data[last - 1].id;
      //   setDataBaru({ ...dataBaru, id: lastId });
      //   console.log(dataBaru);
      setData(...data, dataBaru);
      console.log(data);
      console.log("kesini diaa");
    }
  };

  const handleEdit = (id) => {
    let prevData = data.find((item) => item.id === id);
    setDataBaru(prevData);
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
      <div className="m-3 p-3">
        <button
          class="btn btn-success float-end px-4"
          value="0"
          name="id"
          onClick={() => handleNewValue()}
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="input-group m-4 px-5" style={{ width: "100%" }}>
          <input
            type="text"
            class="form-control"
            placeholder="Add To Do.."
            name="title"
            value={dataBaru.title}
            onChange={(e) => changeValue(e)}
            required
          />
          <button class="btn btn-outline-secondary" type="submit" id="button">
            Submit
          </button>
        </div>
      </form>
      <div className="container-fluid">
        {data.map(({ id, title, completed }) => (
          <TodoCard
            id={id}
            title={title}
            completed={completed}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
