// ThemeContext.js
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr)=> (curr == "dark" ? "light" : "dark"))
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };