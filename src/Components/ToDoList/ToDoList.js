import React from "react";

import TodoItem from "./ToDoItem/ToDoItem";

const  ToDoList = ({todos}) =>{
    return(
        <ul>
            {todos.map(item => <TodoItem key={item.id} {...item} />)}
        </ul>
    )
}

export default ToDoList;