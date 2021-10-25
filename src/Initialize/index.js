import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
        getTodos(false).then(setTodos);
      } else if (user || user === null) {
        setUser(false);
      }
    });
    // getTodos().then(setTodos);
  }, []);

  return (
    <ContainerStyle>
      {
        user ? (
          <>
            <Navigation />
            <h1>YOU-DO-React</h1>
            <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
            <Routes obj={todos} setTodos={setTodos} setEditItem={setEditItem} />
          </>
        ) : (
          <SignIn user={user} />
        )
        }
    </ContainerStyle>
  );
}

export default Initialize;
