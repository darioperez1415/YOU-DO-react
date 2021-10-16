import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

const ContainerStyle = styled.div`
  width: 700px;
  margin: auto;
  padding: 50px 0;
  h1 {
    color: white;
    text-align: center;
    font-size: 64px;
    font-weight: normal;
  }
  h3,
  h4 {
    color: white;
    margin-top: 20px;
  }
`;

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <ContainerStyle>
      <Navigation/>
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
    </ContainerStyle>
  );
}

export default Initialize;
