import TodoForm from './components/TodoForm';
import Header from './components/Header';
import React from 'react';
import './App.css';
import Todos from './components/Todos';
function App() {
  return (
    <div>
   
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
