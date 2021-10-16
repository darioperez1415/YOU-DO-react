import React from 'react';
import PropTypes from 'prop-types';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function Home({ todos, setTodos, setEditItem }) {
  return (
    <div>
      <div className="mt-5">
        {getTodos.length ? (
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

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.ojbect).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
