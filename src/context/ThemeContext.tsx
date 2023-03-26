import * as React from 'react'

const setColor: React.Dispatch<React.SetStateAction<string>> = () => {}

export const ThemeContext = React.createContext({
    color: '',
    setColor
})