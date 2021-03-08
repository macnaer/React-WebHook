import React from "react";
import { v4 as uuid } from 'uuid';
import './App.css';

// ToDoList
import ToDoList from "./Components/ToDoList/ToDoList";

class App extends React.Component {

  state = {
    todos: 
    [
      {id: uuid, title: "Learn react", completed: false },
      {id: uuid, title: "Learn english", completed: false },
      {id: uuid, title: "infotime", completed: false },
    ]
  
  }

  render(){
    const { todos } = this.state;
    return (
      <div className="container">
        <h1>Todo List</h1>
        <div className="form-group">
          <input type="text"  />
          <label>Add new todo</label>
        </div>
        <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;
