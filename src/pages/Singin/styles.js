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
  background-color: ${props => props.typeError === 3 && '#C82C1C'};
  color: ${props => props.typeError === 3 && '#fff'};
  border-radius: ${props => props.typeError && '5px'};
  font-weight: ${props => props.typeError && 'bold'};
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

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disabled: !!props.loading,
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
    /* border-color: yellowgreen; */
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Label = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #0b1235;
  margin-top: 10px;
  text-decoration: none;
  &:hover {
    /* color: #eee; */
    opacity: 0.6;
  }
`;
