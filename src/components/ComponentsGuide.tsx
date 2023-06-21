import * as React from 'react'

const {
    createContext,
    useContext
} = React

const CounterContext = createContext(0)

const Component: React.FC<{
    header: string
}> = ({
    header
}) => {
    const index = useContext(CounterContext)

    return (
        <div className="component">
            <div className="aside">
                <span>0{index}</span>

                <div className="icons-list">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </div>

            <div className="inner">
                <h3>{header}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores perferendis aut vitae officia ex pariatur porro corrupti officiis inventore explicabo.</p>
            </div>
        </div>
    )
}

const components = [
    <Component header='Minimalistic' />,
    <Component header='Inspirational' />,
    <Component header='UI/UX' />,
    <Component header='AI' />
]

function ComponentsGuide() {
    return (
        <div className="section-guide" id="third">
            {components.map((component, i) => (
                <CounterContext.Provider value={i + 1} key={i}>
                    {component}
                </CounterContext.Provider>
            ))}
        </div>
    )
}

export default ComponentsGuide