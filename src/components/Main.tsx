import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"

function Main() {
    const iconSize = '1.2rem'

    const components = new Map([
        ['Styles Guide', <StylesGuide iconSize={iconSize} />],
        ['Assets Guide', <AssetsGuide iconSize={iconSize} />],
        ['Components Guide', <ComponentsGuide />]
    ])

    const list = Array.from(components.entries())

    return (
        <main>
            {list.map(([title, component], i) => (
                <Section title={title} key={i}>
                    {component}
                </Section>
            ))}
        </main>
    )
}

export default Main