import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { todo: "", list: [],  };
  }

  Change = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Check the todo is empty or consists only of whitespace
  if (this.state.todo.trim() === "") {
    return (window.alert("enter data")); // Prevent adding empty todos and alert the user
  }

    this.setState((a) => {
      console.log("previous state :", a.list);
      return { list: [...a.list, a.todo], todo: "" }; //adds the new todo to the list with existing data
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="todo"
            type="text"
            placeholder="add day schedule"
            name="todo"
            onChange={this.Change}
            // value={this.state.todo}
          />
          <input type="submit" />
        </form>
        <ul>
          {this.state.list.map((a, b) => (
            <li key={b}>{a}<button>edit</button><button>remove</button></li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
