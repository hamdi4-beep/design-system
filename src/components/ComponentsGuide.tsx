const Component: React.FC<{
    title: string
    index: number
}> = ({
    title,
    index
}) => {
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
    <Component title='Minimalistic' index={1} />,
    <Component title='Inspirational' index={2} />
]

function ComponentsGuide() {
    return (
        <div className="section-guide" id="third">
            {components.map((component) => component)}
        </div>
    )
}

export default ComponentsGuide