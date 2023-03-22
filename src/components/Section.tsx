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
                <button className='cta-btn'>Create Component</button>
            </div>

            {children}
        </section>
    )
}

export default Section