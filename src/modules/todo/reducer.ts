import { createReducer } from "typesafe-actions";
import { TodoState, TodoActions } from "./types";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

const initailState: TodoState = [
    {id : 1, text : "타입스크립트 배우기", done : true},
    {id : 2, text : "리덕스 배우기", done : false},
    {id : 3, text : "리듀서 배우기", done : false}
];

const todos = createReducer<TodoState, TodoActions>(initailState, {
    [ADD_TODO] : (state, { payload : text }) => 
        state.concat({
            id: Math.max(0, ...state.map(todo => todo.id)) + 1,
            text,
            done: false
        }),
    [TOGGLE_TODO] : (state, {payload : id}) => 
        state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO] : (state, {payload : id}) =>
        state.filter(todo => todo.id !== id)
})
export default todos;