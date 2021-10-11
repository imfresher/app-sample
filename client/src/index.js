import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import dotenv from 'dotenv';
import './assets/scss/frontend/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Setup dotenv config.
dotenv.config();

const MOUNT_NODE = document.getElementById('root');

// React render.
function bootstrap() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    MOUNT_NODE
  );
}

bootstrap();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
