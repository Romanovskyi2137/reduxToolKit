const { createSlice } = require("@reduxjs/toolkit");


const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: ["create slice", "nake commit", "push commit"]
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo !== action.payload)
        }
    }
});

export default todoSlice.reducer;
export const {addTodo, removeTodo} = todoSlice.actions