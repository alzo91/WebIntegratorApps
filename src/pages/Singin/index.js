import React, { useState } from 'react';

import { Container, Form, Button, Label } from './styles';
import { FaAppStore } from 'react-icons/fa';

export default function Singin() {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');

  function handleSubimit(e) {
    e.preventDefault();
    console.log(`email:${email} pass:${passw}`);
  }

  return (
    <Container>
      <h1>
        <FaAppStore />
        Integrator Apps
      </h1>
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
