import * as React from 'react';

export default function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = React.useState('');

  function handleChange(e: { target: HTMLInputElement }) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    addTodo({ content: newTodo, status: 'todo' });
    setNewTodo('');
  }

  return (
    <form>
      <div className="input-wrapper">
        <input
          name="newtodo"
          type="text"
          value={newTodo}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" className="add-button" onClick={handleSubmit}>
          Add Todo
        </button>
      </div>
    </form>
  );
}
