import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from './Context/ThemeContext';
import {TodoContextProvider} from "./Context/TodoContext";


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoContextProvider>
        <App/>
      </TodoContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);


