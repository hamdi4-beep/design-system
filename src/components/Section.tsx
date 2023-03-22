import * as React from 'react'

function Section({
    title,
    children
}: {
    title: string
    children: JSX.Element
}) {
    return (
        <section>
            <div className="section-header">
                <h2>{title}</h2>
                {title === 'Assets Guide' ? (
                    <input type='text' placeholder='Search URL...' style={{borderRadius:'50px'}} />
                ) : (<button className='cta-btn'>Create Component</button>)}
            </div>

            {children}
        </section>
    )
}

export default Section