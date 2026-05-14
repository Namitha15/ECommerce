import React from 'react'
import { Link, Outlet } from "react-router-dom"
import ThemeProvider from '../context/ThemeContext'
import { useContext } from 'react'
import { createContext } from 'react-router-dom'
import { themeContext } from '../context/ThemeContext';

const Header = ({ cartCount, }) => {
    const { theme, toggleTheme } = useContext(themeContext);
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <Link to="/">
                    <img className='logo' src='https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg' alt="Logo" />
                </Link>
            </div>
            <div className='nav-items'>

                <nav>

                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/cart" className="cart-link">Cart ({cartCount})</Link>
                    <button style={{ backgroundColor: theme === "light" ? "black" : "white" }}
                        onClick={(toggleTheme)} >{theme === "light" ? "🌙" : "☀️"}</button>

                </nav>

            </div>
        </div >
    )
}

export default Header