/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { FaEnvelope, FaEye, FaEyeSlash, FaAppStore } from 'react-icons/fa';
import { TiArrowLeftOutline } from 'react-icons/ti';

import { Container, Header, Form, Button, SlimButton } from './styles';
import { doSingup } from '../../Store/Actions/fnLogin';
import history from '../../services/history';

export default function Singup() {
  const [email, setEmail] = useState('');
  const [confMail, setConfMail] = useState('');
  const [passw, setPassw] = useState('');
  const [chkManager, setManager] = useState(false);
  const [seePass, setSeePass] = useState(false);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    function info() {
      console.log(`User info... ${user.loading}`);
    }
    info();
  }, [user.loading]);

  function handleLogin(e) {
    e.preventDefault();
    console.log('Handle Login');
    dispatch(doSingup(email, confMail, passw, chkManager));
  }
  function goBack() {
    history.goBack();
  }
  return (
    <Container>
      <Header>
        <TiArrowLeftOutline size={32} onClick={goBack} />
        <h1>
          <FaAppStore size={32} />
          Integrator Apps
        </h1>
        <label htmlFor="h1" />
      </Header>
      <Header type="center">
        <h5>{user.loading ? "It's loading" : "It isn't loading"}</h5>
      </Header>
      <Form onSubmit={handleLogin}>
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
            <h5>* emails não conferem!!</h5>
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
        <div>
          <Checkbox
            color="primary"
            checked={chkManager}
            onClick={() => setManager(!chkManager)}
          />

          <SlimButton type="button" onClick={() => setManager(!chkManager)}>
            Solcitar acesso como gerenciador ?
          </SlimButton>
        </div>

        <Button>Cadastrar!</Button>
      </Form>
      <div />
    </Container>
  );
}
