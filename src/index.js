import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppSpanish from './AppSpanish';
import AppTodo from './AppTodo';
import AppTodoSpanish from './AppTodoSpanish';
import reportWebVitals from './reportWebVitals';
// import React, { useState, useEffect } from 'react';

// import { useFonts, RussoOne_400Regular } from '@expo-google-fonts/russo-one';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTodo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
