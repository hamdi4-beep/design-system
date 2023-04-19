import * as React from 'react'
import { StateContext } from '../context/StateContext'

type Props = {
    heading: string
    children: JSX.Element
}

function Section({
    heading,
    children
}: Props) {
    const { dispatch } = React.useContext(StateContext)
    const { type } = children

    let ctaElement: JSX.Element

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const input = target as HTMLInputElement
        const value = input.value

        dispatch({
            type: 'change background',
            value
        })

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
                <h2>{heading}</h2>
                {ctaElement}
            </div>

            {children}
        </section>
    )
}

export default Section