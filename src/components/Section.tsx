import * as React from 'react'
import { StateContext } from '../context/StateContext'

type Props = {
    title: string
    children: JSX.Element
}

function Section({
    title,
    children
}: Props) {
    const { setBg } = React.useContext(StateContext)
    const { type } = children

    let ctaElement: JSX.Element

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const input = target as HTMLInputElement
        setBg(input.value)
        input.value = ''
    }

    switch (type.name) {
        case 'StylesGuide':
            ctaElement = <button className='cta-btn'>Add Element</button>
            break

        case 'AssetsGuide':
            ctaElement = <input type='text' placeholder='Search URL...' onChange={handleChange} style={{borderRadius:'50px'}} />
            break

        case 'ComponentsGuide':
            ctaElement = <button className="cta-btn">Create Component</button>
            break

        default:
            ctaElement = <></>
    }

    return (
        <section>
            <div className="section-header space-between">
                <h2>{title}</h2>
                {ctaElement}
            </div>

            {children}
        </section>
    )
}

export default Section