import * as React from 'react'

const {
    createContext,
    useContext
} = React

const IndexContext = createContext(0)

const Component: React.FC<{
    header: string
}> = ({
    header
}) => {
    const index = useContext(IndexContext)

    return (
        <div className="component">
            <div className="header">
                <span>0{index + 1}</span>

                <div className="icons-list">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </div>

            <h3>{header}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptatum recusandae, eum voluptas illum voluptatem dolorum animi unde facilis aperiam.</p>
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
                <IndexContext.Provider
                    value={i}
                    key={i}>
                        {component}
                </IndexContext.Provider>
            ))}
        </div>
    )
}

export default ComponentsGuide