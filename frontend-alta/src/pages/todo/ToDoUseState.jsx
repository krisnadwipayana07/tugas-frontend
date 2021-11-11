import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoCard from "../../component/TodoCard";
import {
  handleCheck,
  hapusTodo,
  tambahDanEditTodo,
} from "../../store/todoSlice";
// import { todoData } from "./ToDoData";

export default function ToDoUseState(props) {
  const data = useSelector((state) => state.todo.todos);
  const dispacth = useDispatch();

  const [dataBaru, setDataBaru] = useState({
    id: null,
    title: "",
    completed: false,
  });

  const changeValue = (e) => {
    setDataBaru({ ...dataBaru, [e.target.name]: e.target.value });
  };

  const handleNewValue = () => {
    setDataBaru({
      id: null,
      title: "",
      completed: false,
    });
  };

  const handleEdit = (id, title, completed) => {
    setDataBaru({
      id: id,
      title: title,
      completed: completed,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(tambahDanEditTodo(dataBaru));
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
            handleDelete={() => dispacth(hapusTodo(id))}
            handleCheck={() => dispacth(handleCheck(id))}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
