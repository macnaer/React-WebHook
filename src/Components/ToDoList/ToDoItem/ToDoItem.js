import React from "react";
import "./ToDoItem.css";
const TodoItem = ({title, completed}) => {
    return(
        <li className="todo">
            <label>
                <input type="checkbox" defaultChecked={false} />
                <span>{title}</span>
            </label>
        </li>
    )
}

export default TodoItem;