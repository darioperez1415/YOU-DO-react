import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { deleteTodos } from '../api/data/todoData';

export default function Todo({ todo, setTodos }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodos(todo.firbaseKey).then(setTodos);
    }
  };

  return (
    <>
      <Alert color="light">
        <button className="btn btn-success" type="button">
          COMPLETE
        </button>
        {todo.name}
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </Alert>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firbaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
};
