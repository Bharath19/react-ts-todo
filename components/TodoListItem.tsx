import * as React from 'react';

export default function TodoListItem({ todoItem, deleteTodo }) {
  const todo = todoItem;
  function deleteHandler(e, todo) {
    deleteTodo(todo);
  }

  return (
    <div className="todo-list-item">
      <span className="todo-list-item__content">{todoItem.content}</span>
      <button
        type="button"
        title="delete"
        className="delete-btn"
        onClick={(e) => deleteHandler(e, todo)}
      >
        delete
      </button>
    </div>
  );
}
