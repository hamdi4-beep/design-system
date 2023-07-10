import * as React from 'react'

import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"

// An array of components converted from a map object containing a heading along with its respective component
const components = Array.from(new Map([
    ['Styles Guide', <StylesGuide />],
    ['Assets Guide', <AssetsGuide />],
    ['Components Guide', <ComponentsGuide />]
]))

function Main() {
    return (
        <main>
            {components.map(([name, component], i) => (
                <Section heading={name} key={i}>
                    {component}
                </Section>
            ))}
        </main>
    )
}

export default Main