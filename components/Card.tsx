import * as React from 'react';
import TodoListItem from './TodoListItem';

export default function Card({ title, todos, deleteTodo }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">
        <ul>
          {todos &&
            todos.map((record) => (
              <TodoListItem
                todoItem={record}
                deleteTodo={deleteTodo}
              ></TodoListItem>
            ))}
        </ul>
      </div>
    </div>
  );
}
