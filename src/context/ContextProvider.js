import { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
    chart: false,
    chat: false,
    useProfile: false,
    notification: false,

}

export const ContextProvider = ({ children }) => {





    const [isClicked, setIsClicked] = useState(initialState)

    const [activeMenu, setActiveMenu] = useState(true)

    const [screenSize, setScreenSize] = useState(undefined)

    const [currentColor, setCurrentColor] = useState('#03C9D7')

    const [currentMode, setCurrentMode] = useState('Light')

    const [themeSettings, setThemeSettings] = useState(false)


    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
      };
    


    const setColor = (color) => {

        setCurrentColor(color)

        localStorage.setItem('colorMode', color)

        setThemeSettings(false)
    }




    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu, setIsClicked, isClicked, handleClick, screenSize, setScreenSize, setColor,
            setMode,themeSettings, setThemeSettings,currentMode, setCurrentMode,currentColor, setCurrentColor
        }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContex = () => useContext(StateContext)