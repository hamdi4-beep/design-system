import * as React from 'react'

const setBg: React.Dispatch<React.SetStateAction<string>> = () => {}

export const StateContext = React.createContext({
    bg: '',
    setBg
})