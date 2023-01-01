import * as React from 'react';

export default function Form({ addTodo }) {
  const [newTodo, setNewTodo] = React.useState('');

  function handleChange(e: { target: HTMLInputElement }) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form>
      <input
        name="newtodo"
        value={newTodo}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}
