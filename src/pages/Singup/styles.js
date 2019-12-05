import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

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

export const Header = styled.div`
  display: flex;
  flex-direction: ${props => (props.type === 'center' ? 'column' : 'row')};
  justify-content: ${props =>
    props.type === 'center' ? 'center' : 'space-between'};
  button {
    width: 0px;
    height: 0px;
    border-style: none;
    background-color: white;
    color: white;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin-left: -10px;
      font-family: sans-serif;
      color: #27b0b4;
    }

    label {
      flex: 1;
      background: #c30a04;
      margin-top: 15px;
      margin-right: 36px;
      color: #eee;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;
      align-items: center;
    }
    svg {
      margin-left: 5px;
      align-self: center;
    }
  }
  input {
    flex: 1;
    display: flex;
    flex-direction: row;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
  }
  p {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    &:hover {
      /* color: #eee; */
      opacity: 0.5;
    }
    input {
      margin-bottom: 5px;
      margin-left: 0px;
      padding: 0px;
      align-self: auto;
    }
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disable: !!props.loading,
}))`
  background: #27b0b4;
  color: #fff;
  border: 0;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bolder;
  &:hover {
    border: 2px solid;
    border-color: #2ad1bd;
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

export const SlimButton = styled.button`
  border-style: unset;
  background-color: unset;
  font-size: 14px;
`;
