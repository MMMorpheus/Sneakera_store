import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  body {
    min-height: 100vh;
    padding-top: 85px;
    background-color: #e7f6ff;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResetCSS />
    <App />
  </>
);
