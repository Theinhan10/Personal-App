import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
        <div className='TopBar' id={theme}>
            
            <Link to="/">
                <h2 className='link-menu'>Home</h2>
            </Link>
        
            <div className='themeButton'>
                <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider"></span>
                </label>
            </div>
        </div>
  )
}

export default Menu