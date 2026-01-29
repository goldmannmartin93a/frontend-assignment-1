import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 16px;
    line-height: 1;
    background-color: #E5E5E5;
    color: #091E42;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
