import * as React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style.css';

export default function App() {
  const [todos, setTodos] = React.useState([
    { content: 'newTodo', status: 'todo' },
  ]);

  function addTodo(newTodo) {
    setTodos((preValue) => [...preValue, newTodo]);
  }

  function deleteTodo(todo) {
    setTodos((preValue) =>
      preValue.filter((record) => record.content != todo.content)
    );
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
