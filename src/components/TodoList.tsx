import React from 'react';
// import { Todo } from '../modules/todo';
import TodoItem  from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList() {
    const todo = useTodos();
    
    if (todo.length === 0) return <p>등록된 항목이 없습니다!</p>

    return (
        <ul>
            {
                todo.map(todo => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))
            }
        </ul>
    )
}

export default TodoList;
