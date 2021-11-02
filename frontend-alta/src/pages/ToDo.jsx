import React from "react";
import Navbar2 from "../component/Navbar2";
import TodoCard from "../component/TodoCard";
import { todoData } from "./ToDoData";

export default function ToDo() {
  return (
    <div className="m-auto">
      <Navbar2 title="To Do App" />
      <div
        className="container-fluid gathering center"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {todoData.map(({ id, title, completed }, key) => (
          <TodoCard key={id} title={title} completed={completed} />
        ))}
      </div>
    </div>
  );
}
