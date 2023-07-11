import * as React from 'react'

const {
    createContext,
    useContext,
    useState
} = React

const setBackgroundURL: React.Dispatch<React.SetStateAction<string>> = (URL) => {}

export const StateContext = createContext({
    backgroundURL: '',
    setBackgroundURL
})

export function useBackground() {
    return useContext(StateContext)
}

export default function StateProvider({
    children
}: {
    children: JSX.Element
}) {
    const [backgroundURL, setBackgroundURL] = useState('')

    return (
        <StateContext.Provider value={{
            backgroundURL,
            setBackgroundURL
        }}>
            {children}
        </StateContext.Provider>
    )
}