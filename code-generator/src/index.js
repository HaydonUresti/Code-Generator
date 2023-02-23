import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter,  createBrowserRouter,
  RouterProvider, } from "react-router-dom";
import HomePage from './pages/homePage';
import EncryptPage from './pages/encryptPage';
import DecryptPage from './pages/decryptPage';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "encrypt",
    element: <EncryptPage/>,
  },
  {
    path: "decrypt",
    element: <DecryptPage/>,
  }
]);


root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
