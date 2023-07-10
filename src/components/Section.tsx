import * as React from 'react'
import { StateContext } from '../context/StateContext'

type Props = {
    heading: string
    children: JSX.Element
}

function Section({
    heading,
    children,
}: Props) {
    const {setBackgroundURL} = React.useContext(StateContext)
    const {type} = children

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const input = target as HTMLInputElement
        setBackgroundURL(input.value)
    }

    return (
        <section>
            <div className="section-header space-between">
                <h2>{heading}</h2>

                {// Only display the input element, if the child element is AssetsGuide component
                type.name === 'AssetsGuide' && (
                    <input
                        type='text'
                        placeholder='URL Search...'
                        style={{borderRadius: '50px'}}
                        onChange={handleChange}
                    />
                )}
            </div>

            {children}
        </section>
    )
}

export default Section