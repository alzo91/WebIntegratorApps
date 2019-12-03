import React from 'react';
import { Provider } from 'react-redux';

import store from './Store';
import Routes from './Routes';
import GlobalStyle from './Components/Styles/global';

export default function src() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}
