import { useDispatch, useSelector } from "react-redux";
import {v4} from "uuid";
import { removeTodo } from "../toolkit/todoSlice";


const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    return (
        <ul className="TodoList">
            {todos.map(todo => {
                return (
                    <li
                        style={{display: "flex", justifyContent: "space-between", marginBottom: "5px"}}
                        key={v4()}
                    >
                        <span>{todo}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo))}
                            style={{marginLeft: "5px"}}
                        >
                            delete
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};

export default TodoList