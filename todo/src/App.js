import React from 'react'
import './App.css';
import Form from './Form'
import TodoList from './TodoList'

function App() {
    return (
      <div>
         <header>
          <h1>JK TODO LIST</h1>
        </header>
        <Form />
        <TodoList />
      </div>
    );
  }
  
  export default App;