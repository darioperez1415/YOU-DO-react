import React from 'react';
import PropTypes from 'prop-types';
import { deleteTodos, updateTodo } from '../api/data/todoData';

export default function Todo({ todo, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodos(todo.firebaseKey).then(setTodos);
    } else {
      updateTodo({ ...todo, complete: true }).then(setTodos);
    }
  };

  return (
    <div className="alert alert-light" role="alert">
      {todo.complete ? (
        <button className="btn btn-success" type="button" disabled>
          <i className="fas fa-check-circle fa-2x" />
        </button>
      ) : (
        <button
          onClick={() => handleClick('complete')}
          className="btn btn-success"
          type="button"
        >
          COMPLETE
        </button>
      )}
      <h5>{todo.name}</h5>
      <div>
        {!todo.complete && (
          <button
            onClick={() => setEditItem(todo)}
            className="btn btn-info"
            type="button"
          >
            EDIT
          </button>
        )}
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
