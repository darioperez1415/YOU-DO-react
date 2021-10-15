import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div>
      <h1>YOU-DO-React</h1>
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <div className="mt-5">
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.firebaseKey}
              todo={todo}
              setTodos={setTodos}
              setEditItem={setEditItem}
            />
          ))
        ) : (
          <h3>Add A To Do!</h3>
        )}
      </div>
    </div>
  );
}

export default Initialize;
