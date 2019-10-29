import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding:0px;
    outline: 0px;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height:100%;
  }

  body{
    background: #27B0B4;
    -webkit-font-smoothing: antialised !important;
  }
`;

export default GlobalStyle;
