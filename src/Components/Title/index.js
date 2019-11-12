import React from 'react';

import { FaAppStore } from 'react-icons/fa';
import styled from 'styled-components';

const Label = styled.h1`
  font-size: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #0b1235;

  svg {
    margin-right: 10px;
    color: #0b1235;
  }
`;

const Title = () => (
  <Label>
    <FaAppStore />
    Integrator Apps
  </Label>
);

export default Title;
