import * as React from 'react';
import Form from './Form';
import './style.css';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodo(newTodo) {
    if (newTodo.length > 0) {
      setTodos((preValue) => [...preValue, newTodo]);
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
