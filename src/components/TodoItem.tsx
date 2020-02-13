import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todo';
import useTodoActions  from '../hooks/useTodoActions';

export type TodoProps = {
    todo : Todo
}
function TodoItem( { todo } : TodoProps ) {
    const { onToggle, onRemove } = useTodoActions(todo.id);
    return (
        <div>
            <li className={`TodoItem ${todo.done ? 'done' : ''}`} onClick={onToggle}>
                <span className='text'>{todo.text}</span>
                <span className='remove' onClick={onRemove}>(X)</span>
            </li>
        </div>
    )
}

export default TodoItem;
