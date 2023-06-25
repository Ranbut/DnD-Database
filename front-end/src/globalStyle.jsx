import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: all ease .2s;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;