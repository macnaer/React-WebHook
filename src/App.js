import React, {useState, useEffect, useReducer} from "react";
import { Context } from "./context";
import './App.css';

// ToDoList
import ToDoList from "./Components/ToDoList/ToDoList";
import reducer from "./reducer";

const App = () => {


    const [state, dispach] = useReducer(reducer, JSON.parse(localStorage.getItem("todos")))
    const [todoTitle, setTodoTitle] = useState("")

  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(state))
    }, [state])



    const addTodo = event => {
      if (event.key === "Enter"){
        dispach({
          type: "add",
          payload: todoTitle
        })
        setTodoTitle("");
      }
    }

    // const { todos } = this.state;
    console.log("Context App.js ", Context);
    return (
      <Context.Provider value={{dispach}}>
        <div className="container">
          <h1>Todo List</h1>
          <div className="form-group">
            <input type="text"
              value={todoTitle}
              onChange={event => setTodoTitle(event.target.value)}
              onKeyPress={addTodo}
            />
            <label>Add new todo</label>
          </div>
          <ToDoList todos={state} />
        </div>
      </Context.Provider>
    );
    
}

export default App;
