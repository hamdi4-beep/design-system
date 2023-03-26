import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"

const iconSize = '1.2rem'

function Main() {
    const list = Array.from(new Map([
        ['Styles Guide', <StylesGuide iconSize={iconSize} />],
        ['Assets Guide', <AssetsGuide iconSize={iconSize} />],
        ['Components Guide', <ComponentsGuide />]
    ]))

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