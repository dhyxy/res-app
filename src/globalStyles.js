// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll; /* Ensures a vertical scrollbar is always present */
  }
`;

export default GlobalStyle;
