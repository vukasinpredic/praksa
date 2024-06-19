import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="todo">
      <h1 className="header">To Do</h1>
      <div className="grid-container">
        {todos.slice(0, 9).map(todo => (
          <div key={todo.id} className="grid-item">
            <p className="text">{todo.title}</p>
            <p className="text">{todo.completed ? '✅' : '❌'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;


