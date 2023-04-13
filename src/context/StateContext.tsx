import * as React from 'react'

const dispatch: React.Dispatch<any> = () => {}

export const StateContext = React.createContext({
    event: {},
    dispatch
})