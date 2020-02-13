import React from 'react';
import useCount from '../hooks/useCounter';

function Counter(){
    const { count, onIncrease, onDecrease, onIncreaseBy } = useCount();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={()=>onIncreaseBy(5)}>+5</button>
        </div>
        
    )
}

export default Counter;
