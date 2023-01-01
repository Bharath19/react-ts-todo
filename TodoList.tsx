import * as React from 'react';
export default function TodoList({ todos }) {
  return (
    <ul>{todos && todos.map((record) => <li key={record}>{record}</li>)}</ul>
  );
}
