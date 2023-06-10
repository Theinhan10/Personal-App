import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage';
import Weather from './Pages/Homepage/Weather';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import Todo from './Pages/Todo';
import Menu from './components/MenuBar/Menu';
import {ThemeProvider} from './Context/ThemeContext'

function App() {
  return (

    
      <BrowserRouter>

      {<Menu/>}

      <Routes>

        <Route path="/" element={<Homepage/>} />
        {/** <Route path="/weather" element={<Weather/>} */}
        <Route path="/todo" element={<Todo/>} />

        <Route path="/weather" element={<Weather/>} />

      </Routes>

    </BrowserRouter>
   
  );
}

export default App;
