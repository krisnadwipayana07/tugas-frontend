import React, { Component } from "react";
import TodoCard from "../component/TodoCard";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: 2,
          title: "Unit Testing",
          completed: false,
        },

        {
          id: 3,
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: 4,
          title: "Deploy ke server",
          completed: false,
        },
      ],
      newTask: {
        id: 0,
        title: "",
        completed: false,
      },
    };
  }

  handleCheck = (id) => {
    let newData = this.state.data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    this.setState({ data: newData });
  };

  handleDelete = (id) => {
    let newData = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newData,
    });
  };

  changeValue = (e) => {
    this.setState({
      newTask: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { id } = this.state.newTask;
    let data = this.state.data.find((item) => item.id === id);
    console.log(data);
    if (data || data === undefined) {
      let prevData = this.state.data.map((item) =>
        item.id === id ? this.state.newTask : item
      );
      console.log(prevData);
      this.setState({
        data: prevData,
      });
      console.log(prevData);
    } else {
      let lastId = this.state.data.length;
      let newData = {
        ...this.state.newTask,
        id: this.state.data[lastId - 1].id + 1,
      };
      this.setState({
        data: [...this.state.data, newData],
      });
      console.log("kesini diaa");
    }
  };

  handleEdit = (id, title, completed) => {
    this.setState({
      newTask: {
        id: id,
        title: title,
        completed: completed,
      },
    });
  };
  render() {
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
        <form onSubmit={this.handleSubmit}>
          <div class="input-group m-4 px-5" style={{ width: "100%" }}>
            <input
              type="text"
              class="form-control"
              placeholder="Add To Do.."
              name="title"
              value={this.state.newTask.title}
              onChange={(e) => this.changeValue(e)}
              required
            />
            <button class="btn btn-outline-secondary" type="submit" id="button">
              Submit
            </button>
          </div>
        </form>
        <div className="container-fluid">
          {this.state.data.map(({ id, title, completed }) => (
            <TodoCard
              id={id}
              title={title}
              completed={completed}
              handleDelete={this.handleDelete}
              handleCheck={this.handleCheck}
              handleEdit={this.handleEdit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
