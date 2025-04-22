import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './ToDoSlice';

const ToDoApp = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>📝 Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Thêm việc cần làm..."
      />
      <button onClick={handleAdd}>Thêm</button>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: 10,
              }}
            >
              {todo.id}. {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
