import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteTodos, updateTodo } from '../api/data/todoData';

const ButtonStyle = styled.div`
display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;

  h5 {
    margin: auto 20px;
    flex-grow: 1.5; 
  }

  button {
    color: white;
  }
  .btn-danger {
    margin-left: 5px;
  }

  .btn-sucess {
    margin-left: 5px;

  .btn-info {
    margin-left: 5px;
  }    
  }
`;
export default function Todo({ todo, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodos(todo.firebaseKey).then(setTodos);
    } else {
      updateTodo({ ...todo, complete: true }).then(setTodos);
    }
  };

  return (
    <ButtonStyle className="alert alert-light" role="alert">
      <h5>{todo.name}</h5>
      {todo.complete ? (
        <button
          className="btn btn-success"
          type="button"
          disabled
        >
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
      <button
        onClick={() => setEditItem(todo)}
        className="btn btn-info"
        type="button"
      >
        EDIT
      </button>
      <button
        onClick={() => handleClick('delete')}
        className="btn btn-danger"
        type="button"
      >
        DELETE
      </button>
    </ButtonStyle>
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
