import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Home, Favourites, Orders} from "@/Pages"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    min-height: 100%;
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
    outline: none;
  }
`;

const router = createBrowserRouter([
  {
    paht: "/home",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/favourites",
       element: <Favourites /> 
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResetCSS />
    <RouterProvider router={router} />
  </>
);
