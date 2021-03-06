import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function All({ todos, setTodos, setEditItem }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllTodos(todos).then((todoArray) => {
      if (isMounted) setAllTodos(todoArray);
    });
    return () => {
      isMounted = false;
    };
  }, [todos]);

  return (
    <div>
      {allTodos.map((todo) => (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ))}
    </div>
  );
}

All.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
