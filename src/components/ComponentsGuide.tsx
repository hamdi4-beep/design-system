const Component: React.FC<{
    heading: string
    index: number
}> = ({
    heading,
    index
}) => {
    return (
        <div className="component">
            <div className="header">
                <span>{index}</span>

                <div className="icons-list">
                    {
                        Array.from({
                            length: 4
                        })
                        .map((_, i) => (<div className='icon' key={i} />))
                    }
                </div>
            </div>

            <h3>{heading}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptatum recusandae, eum voluptas illum voluptatem dolorum animi unde facilis aperiam.</p>
        </div>
    )
}

const headings = [
    'Minimalistic',
    'Inspirational',
    'UI/UX',
    'AI'
]

function ComponentsGuide() {
    return (
        <div className="section-guide" id="third">
            {headings.map((heading, i) => (
                <Component
                    heading={heading}
                    index={i + 1}
                    key={i}
                />
            ))}
        </div>
    )
}

export default ComponentsGuide