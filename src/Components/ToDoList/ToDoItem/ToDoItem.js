import React, {useContext} from "react";
import { Context } from "../../../context";
import "./ToDoItem.css";
const TodoItem = ({id, title, completed}) => {

    const {dispach} = useContext(Context);


    return(
        <li className="todo">
            <label>
                <input type="checkbox" defaultChecked={completed} onChange={() => dispach({
                        type: "checked",
                        payload: id
                    })} 
                />
                <span>{title}</span>
            </label>
        </li>
    )
}

export default TodoItem;