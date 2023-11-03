import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../toolkit/todoSlice"

const Todo = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    return (
        <form
            style={{display: "flex", justifyContent: "space-between"}}
            onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(e.target.todo.value));
                setTodo("")
            }}
        >
            <input 
                name="todo" 
                placeholder="enter your todo here..."
                value={todo}
                onChange={e => setTodo(e.target.value)}
                style={{marginRight: "15px"}}
            />
            <button type="submit">add todo</button>
        </form>
    )
};

export default Todo