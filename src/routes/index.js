import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Completed from '../views/Completed';
import All from '../views/All';

export default function Routes({ todos, setTodos, setEditItem }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          compontent={() => (
            <Home todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
          )}
        />
        <Route
          exact
          path="/completed"
          component={() => (
            <Completed todos={todos} setTodos={setTodos} />
          )}
        />
        <Route
          exact
          path="/all"
          component={() => (
            <All todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.ojbect).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
