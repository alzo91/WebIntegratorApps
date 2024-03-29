/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaAppStore,
  FaUserCircle,
  FaSpinner,
} from 'react-icons/fa';
import { TiArrowLeftOutline } from 'react-icons/ti';

import { Container, Header, Form, Button, SlimButton } from './styles';
import { doSingup } from '../../Store/Actions/fnLogin';
import history from '../../services/history';

export default function Singup() {
  const [name, setName] = useState('');
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
    dispatch(doSingup(name, email, confMail, passw, chkManager));
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

      <Form onSubmit={handleLogin}>
        {user.error && (
          <Header type="center" typeError={user.type_error}>
            <h3>{String(user.error)}</h3>
          </Header>
        )}
        <div>
          <input
            type="text"
            minLength={3}
            maxLength={50}
            onChange={e => setName(e.target.value)}
            placeholder="Informe seu nome"
            value={name}
            required
          />
          <FaUserCircle size={26} color="#4FD3D7" />
        </div>
        <div>
          <input
            type="email"
            minLength={8}
            maxLength={70}
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
            minLength={8}
            maxLength={70}
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

        <Button loading={user.loading ? 1 : 0}>
          {user.loading ? <FaSpinner size={26} color="white" /> : 'Cadastrar!'}
        </Button>
      </Form>
      <div />
    </Container>
  );
}
