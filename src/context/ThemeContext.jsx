import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    //State til at sætte dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    //Funktion til at opdatere staten
    const handleChangeDarkMode = () => {
        if (isDarkMode === true){
            setIsDarkMode(false)
        } else {
            setIsDarkMode(true)
        }
    }

    return(
        <ThemeContext.Provider value={{isDarkMode, handleChangeDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}