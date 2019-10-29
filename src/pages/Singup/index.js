import React, { useState } from 'react';

import { Container, Form, Button } from './styles';
import { FaEnvelope, FaEye, FaEyeSlash, FaAppStore } from 'react-icons/fa';

export default function Singup() {
  const [email, setEmail] = useState('');
  const [confMail, setConfMail] = useState('');
  const [passw, setPassw] = useState('');

  const [seePass, setSeePass] = useState(false);

  return (
    <Container>
      <h1>
        <FaAppStore />
        Integrator Apps
      </h1>
      <Form>
        <div>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Informe seu e-mail!"
            value={email}
            required
          />
          <FaEnvelope size={26} color="#4FD3D7" />
        </div>
        <div>
          <input
            type="email"
            onChange={e => setConfMail(e.target.value)}
            placeholder="Confirme seu e-mail!"
            value={confMail}
            required
          />
          <FaEnvelope size={26} color="#4FD3D7" />
        </div>
        {email !== confMail && (
          <div>
            <label>* emails não conferem!!</label>
          </div>
        )}
        <div>
          <input
            type={seePass ? 'text' : 'password'}
            onChange={e => setPassw(e.target.value)}
            placeholder="Digite uma senha confiável!!!"
            value={passw}
            required
          />
          {seePass ? (
            <FaEyeSlash
              size={26}
              color="#4FD3D7"
              onClick={() => setSeePass(!seePass)}
            />
          ) : (
            <FaEye
              size={26}
              color="#4FD3D7"
              onClick={() => setSeePass(!seePass)}
            />
          )}
        </div>
        <p>
          Solcitar acesso como gerenciador?
          <input type="checkbox" value={false} />
        </p>

        <Button>Cadastrar!</Button>
      </Form>
      <div></div>
    </Container>
  );
}
