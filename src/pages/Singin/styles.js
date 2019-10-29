import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  justify-content: center;
  align-content: center;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #0b1235;
  }
  svg {
    margin-right: 10px;
    color: #0b1235;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  background: #27b0b4;
  color: #fff;
  border: 0;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    border: 2px solid;
    border-color: yellowgreen;
    font-weight: bolder;
  }
`;

export const Label = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #0b1235;
  margin-top: 10px;
  &:hover {
    color: #eee;
  }
`;
