import React from 'react';
import Counter from './components/Couner'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Immer from './components/Immer'
import Sample from './components/Sample'

const App: React.FC = () => {
  return (
    <div>
      {/* <Immer></Immer> */}
      {/* <TodoInsert></TodoInsert>
      <TodoList></TodoList> */}
      {/* <Counter></Counter> */}
      <Sample></Sample>
    </div>
  );
}

export default App;
