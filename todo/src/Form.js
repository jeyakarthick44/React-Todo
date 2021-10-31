import React from 'react';

function App() {
  return (
    <div>
      <form>
        <input type="text" className="todo-input"/>
        <button className="todo-button"><i class="fas fa-plus"></i></button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>

  );
}

export default App;
