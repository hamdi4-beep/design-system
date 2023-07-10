import * as React from 'react'

const {
    createContext,
    useContext
} = React

const IndexContext = createContext(0)

const Component: React.FC<{
    heading: string
}> = ({
    heading
}) => {
    const index = useContext(IndexContext)

    return (
        <div className="component">
            <div className="header">
                <span>{index}</span>

                <div className="icons-list">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </div>

            <h3>{heading}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptatum recusandae, eum voluptas illum voluptatem dolorum animi unde facilis aperiam.</p>
        </div>
    )
}

const components = [
    <Component heading='Minimalistic' />,
    <Component heading='Inspirational' />,
    <Component heading='UI/UX' />,
    <Component heading='AI' />
]

function ComponentsGuide() {
    return (
        <div className="section-guide" id="third">
            {components.map((component, i) => (
                <IndexContext.Provider
                    value={0 + (i + 1)}
                    key={i}>
                        {component}
                </IndexContext.Provider>
            ))}
        </div>
    )
}

export default ComponentsGuide