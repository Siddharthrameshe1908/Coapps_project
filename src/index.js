import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {  configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { reducers } from './reducers/index';

const store = configureStore({reducer:reducers,devTools:true}); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store} >
    <BrowserRouter basename='/'>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
