import * as React from 'react'
import { StateContext } from '../context/StateContext'

function Section({
    title,
    children
}: {
    title: string
    children: JSX.Element
}) {
    const { setBg } = React.useContext(StateContext)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const input = target as HTMLInputElement
        setBg(input.value)
        input.value = ''
    }

    return (
        <section>
            <div className="section-header">
                <h2>{title}</h2>
                {title === 'Assets Guide' ? (
                    <input type='text' placeholder='Search URL...' onChange={handleChange} style={{borderRadius:'50px'}} />
                ) : (<button className='cta-btn'>Create Component</button>)}
            </div>

            {children}
        </section>
    )
}

export default Section