import React, {useContext} from "react";

import TodoItem from "./ToDoItem/ToDoItem";

const  ToDoList = ({todos}) =>{

    const context = useContext(todos)
    console.log("context ", context);
    return(
        <ul>
            {todos.map(item => <TodoItem key={item.id} {...item} />)}
        </ul>
    )
}

export default ToDoList;