import React from 'react'
import "./MenuBar.css"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const MenuBar = () => {
  return (
    <div className='menuBar'>
        
        <div className='menuBar-container'>
            <div className='menuBar-bar'></div>

            <div className='menuBar-button-container'>

                <div className='menuBar-button' style={{ "--color": "#f05153" }}>
                    <div className='menuBar-dot'></div>
                    <div className='menuBar-light'></div>

                    <Link to="/todo" className='linkName'>
                    <button>
                        <FontAwesomeIcon className='icon' icon={faTwitter}></FontAwesomeIcon>
                        <span>Facebook</span>
                    </button>
                    </Link>
                </div>

                <div className='menuBar-button' style={{ "--color": "#f08324" }}>
                    <div className='menuBar-dot'></div>
                    <div className='menuBar-light'></div>

                    <Link to="/todo" className='linkName'>
                    <button>
                        <FontAwesomeIcon className='icon' icon={faHome}></FontAwesomeIcon>
                        <span>Home</span>
                    </button>
                    </Link>
                </div>

                <div className='menuBar-button' style={{ "--color": "#ebcd1d" }}>
                    <div className='menuBar-dot'></div>
                    <div className='menuBar-light'></div>

                    <Link to="/todo" className='linkName'>
                    <button>
                        <FontAwesomeIcon className='icon' icon={faHome}></FontAwesomeIcon>
                        <span>Facebook</span>
                    </button>
                    </Link>
                </div>

                <div className='menuBar-button' style={{ "--color": "#ebcd1d" }}>
                    <div className='menuBar-dot'></div>
                    <div className='menuBar-light'></div>

                    <Link to="/todo" className='linkName'>
                    <button>
                        <FontAwesomeIcon className='icon' icon={faHome}></FontAwesomeIcon>
                        <span>Facebook</span>
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MenuBar