import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Todo({ todo }) {
  return (
    <>
      <Alert color="light">
        <button className="btn btn-success" type="button">
          COMPLETE
        </button>
        {todo.name}
        <button className="btn btn-danger" type="button">
          DELETE
        </button>
      </Alert>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    // the object name: .shape is a method that defines what is inside of the object with what datatypes they are.
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired, // in order for the Todo component to work it IS required, do you put .isRequired.
};
