import React, { Component } from "react";
import TodoCard from "../../component/TodoCard";

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
      newTask: { ...this.state.newTask, [e.target.name]: e.target.value },
    });
  };

  handleNewValue = () => {
    this.setState({
      newTask: {
        id: 0,
        title: "",
        completed: false,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    let data = this.state.data.find(
      (item) => item.id === this.state.newTask.id
    );
    console.log(this.state.newTask);
    console.log(data);
    if (data) {
      let prevData = this.state.data.map((item) =>
        item.id === this.state.newTask.id ? this.state.newTask : item
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
      console.log(newData);
      this.setState({
        data: [...this.state.data, newData],
      });
      console.log(this.state.data);
      console.log("kesini diaa");
    }
  };

  handleEdit = (id) => {
    let prevData = this.state.data.find((item) => item.id === id);
    this.setState({
      newTask: prevData,
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
        <div className="m-3 p-3">
          <button
            class="btn btn-success float-end px-4"
            value="0"
            name="id"
            onClick={() => this.handleNewValue()}
          >
            +
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div class="d-flex m-4 px-5" style={{ width: "100%" }}>
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
