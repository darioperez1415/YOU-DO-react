import React, { useEffect, useState } from 'react';
import { getAllTodos, deleteAnyTodo } from '../api/data/todoData';

export default function All() {
  const [allTodos, setallTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setallTodos);
  }, []);

  const handleClick = (firebaseKey) => {
    deleteAnyTodo(firebaseKey).then(setallTodos);
  };

  return (
    <div>
      {allTodos.map((allTodo) => (
        <div
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          {allTodo.name}
           <button onClick={() => handleClick(allTodo.firebaseKey)} className="btn btn-button" type="button">
           DELETE
          </button>
        </div>
      ))}
    </div>
  );
}
