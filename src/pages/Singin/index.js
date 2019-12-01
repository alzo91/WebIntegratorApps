import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { FaAppStore } from 'react-icons/fa';

import { Container, Form, Button, Label } from './styles';
import  * as LoginActions from '../../Store/Actions/fnLogin';

export default function Singin() {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  function handleSubimit(e) {
    e.preventDefault();
    console.log(`email:${email} pass:${passw}`);
    dispatch(LoginActions.doLogin(email,passw));
  }

  return (
    <Container>
      <h1>
        <FaAppStore />
        Integrator Apps
      </h1>
      <h5>{user.loading === true ? "esta em verdade": "esta falso"}</h5>
      <Form onSubmit={handleSubimit}>
        <input
          type="email"
          placeholder="Usuário para acessar!"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        ></input>
        <input
          type="password"
          placeholder="Senha para acessar!"
          onChange={e => setPassw(e.target.value)}
          value={passw}
          required
        ></input>
        <Button>Acessar</Button>
      </Form>
      <Label to="/Singup">Ainda não possuie acesso, cadastre-se</Label>
    </Container>
  );
}
