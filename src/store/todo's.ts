import { createSlice } from "@reduxjs/toolkit";
import Todo from "../moduls/todo";
let initialTodoArrState:{todoArr:Todo[],id:number}= {
    todoArr:[],
    id: 1,
}
const TodoSlice = createSlice({
    name: "todo's",
    initialState:initialTodoArrState,
    reducers: {
        addTodo(state, action) {
            const newTodo = action.payload;
            state.todoArr.push({
                id: state.id,
                title: newTodo.title,
                dueDate: newTodo.dueDate,
                description: newTodo.description
            });
            state.id = state.id + 1;
        },
        removeTodo(state, action) {
            const id = action.payload;
            state.todoArr = state.todoArr.filter(todo => todo.id !== id);
        }

    }
})
export default TodoSlice;
export const todoAction = TodoSlice.actions;