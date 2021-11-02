import React from "react";
import "./TodoCard.css";

export default function TodoCard({ title, completed }) {
  return (
    <div className="m-3">
      <button type="submit" class="border p-2 px-4" onclick="getData()">
        {completed ? <b>{title}</b> : <s>{title} </s>}
      </button>
    </div>
  );
}
