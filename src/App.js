import React, {useState, useEffect} from "react";
import { v4 as uuid } from 'uuid';
import './App.css';

// ToDoList
import ToDoList from "./Components/ToDoList/ToDoList";

const App = () => {

  // state = {
  //   todos: 
  //   [
  //     {id: uuid, title: "Learn react", completed: false },
  //     {id: uuid, title: "Learn english", completed: false },
  //     {id: uuid, title: "infotime", completed: false },
  //   ]
  
  // }

    // const [todos, setTodos] = useState([
    //   {id: uuid, title: "Learn react", completed: false },
    //    {id: uuid, title: "Learn english", completed: false },
    //    {id: uuid, title: "infotime", completed: false },
    // ])

    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState("")

    const AppContext = React.createContext(todos);

    useEffect(() => {
      const todosArr = localStorage.getItem("todos") || [];
      setTodos(JSON.parse(todosArr))
    }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])



    const addTodo = event => {
      if (event.key === "Enter"){
        setTodos([
          ...todos,
          {
            id: uuid(),
            title: todoTitle,
            completed: false
          }
        ])
        setTodoTitle("");
      }
    }

    // const { todos } = this.state;
    console.log("AppContex App.js ", AppContext);
    return (
      <AppContext.Provider value={todos}>
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
          <ToDoList todos={todos} />
        </div>
      </AppContext.Provider>
    );
    
}

export default App;
