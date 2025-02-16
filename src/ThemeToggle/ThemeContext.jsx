import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {

    const [darkTheme,setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme)
    }

    return(
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )

}
