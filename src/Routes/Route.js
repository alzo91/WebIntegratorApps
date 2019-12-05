/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const [singed, setSinged] = useState(false);
  // const [name, setName] = useState('');

  useEffect(() => {
    const item = localStorage.getItem('@integrator:token_app');

    if (item) {
      // const objSinged = JSON.parse(item);
      setSinged(true);
      // setName(objSinged.name);
    }
  }, []);

  if (!singed && isPrivate) {
    // console.log('1 ---> ');
    return <Redirect to="/" />;
  }

  if (singed && !isPrivate) {
    // console.log('2 ---> ');
    return <Redirect to="/Dashboard" />;
  }
  // console.log('3 ---> ');

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
