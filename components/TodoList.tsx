import * as React from 'react';
import Card from './Card';
export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className="card-wrapper">
      <Card title="Todo" todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
