import * as React from 'react'

const {
    createContext,
    useContext
} = React

const IndexContext = createContext(0)

const Component: React.FC<{
    title: string
}> = ({
    title
}) => {
    const index = useContext(IndexContext)

    return (
        <div className="component">
            <div className="aside">
                <span>0{index}</span>
            </div>

            <div className="inner">
                <h3>{title}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores perferendis aut vitae officia ex pariatur porro corrupti officiis inventore explicabo.</p>
            </div>
        </div>
    )
}

const components = [
    <Component title='Minimalistic' />,
    <Component title='Inspirational' />,
    <Component title='UI/UX' />,
    <Component title='Blur' />
]

function ComponentsGuide() {
    return (
        <div className="section-guide" id="third">
            {components.map((component, i) => (
                <IndexContext.Provider value={i + 1} key={i}>
                    {component}
                </IndexContext.Provider>
            ))}
        </div>
    )
}

export default ComponentsGuide