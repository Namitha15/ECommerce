import React, { useEffect, useState } from 'react'
//import Setting from '../Pages/Setting'
import { createContext } from 'react'
export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    useEffect(() => {
        document.body.className = theme === "dark" ? "dark-mode" : ""
    }, [theme]);
    return (
        <div>

            <themeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </themeContext.Provider>

        </div>
    );
}
export default ThemeProvider;
