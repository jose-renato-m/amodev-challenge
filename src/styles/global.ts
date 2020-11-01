import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body,
  textarea,
  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
`;
