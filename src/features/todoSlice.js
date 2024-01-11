// nanoid to create uniqe id
import { createSlice, nanoid } from "@reduxjs/toolkit";

// At the very start
const initialState = {
    todos: [
        {
            id: 1,
            todo: "demo-todo",
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo", // rtk compulsary
    initialState,
    //properties and fxns
    reducers: {
        // state and action are given bydefault by rtk
        // state -- gives props of initialState
        // action -- gives the values when we calling fxn
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload, // payload is a object
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; // export to maintain store
