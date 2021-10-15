import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createTodo, updateTodo } from '../api/data/todoData';

// Itial state of the applications
const initialState = {
  name: '',
  complete: false,
  uid: '',
};
// Changes in State! From form passing to useState
export default function TodoForm({ obj, setTodos, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid: obj.uid,
      });
    }
  }, [obj]);
  // Restets to initial state and spreeds new obj
  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      // update the todo
      updateTodo(formInput).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            className="form-control form-control-lg me-1"
            type="text"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="ADD A TO-DO"
            required
          />
          <button className="btn btn-success" type="submit">
            {obj.firebaseKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  obj: {},
};
