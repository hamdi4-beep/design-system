import * as React from 'react'

const setBackgroundURL: React.Dispatch<React.SetStateAction<string>> = (URL) => {}

export const StateContext = React.createContext({
    backgroundURL: '',
    setBackgroundURL
})