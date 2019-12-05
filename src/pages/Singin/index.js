import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaAppStore, FaSpinner } from 'react-icons/fa';

import { Container, Header, Form, Button, Label } from './styles';
import * as LoginActions from '../../Store/Actions/fnLogin';

export default function Singin() {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSubimit(e) {
    e.preventDefault();
    console.log(`email:${email} pass:${passw}`);
    dispatch(LoginActions.doLogin(email, passw));
  }

  return (
    <Container>
      <h1>
        <FaAppStore />
        Integrator Apps
      </h1>
      {/* <h5>{user.loading === true ? 'esta em verdade' : 'esta falso'}</h5> */}
      <Form onSubmit={handleSubimit}>
        <input
          type="email"
          minLength={8}
          maxLength={70}
          placeholder="Usuário para acessar!"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Senha para acessar!"
          onChange={e => setPassw(e.target.value)}
          value={passw}
          required
        />
        <Header type="center">
          <h5>{user.error}</h5>
        </Header>
        <Button loading={user.loading ? 1 : 0}>
          {user.loading ? <FaSpinner size={26} color="white" /> : 'Acessar'}
        </Button>
      </Form>
      <Label to="/Singup">Ainda não possuie acesso, cadastre-se</Label>
    </Container>
  );
}
