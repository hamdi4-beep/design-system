import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"

function Main() {
    const titles = [
        'Styles Guide',
        'Assets Guide',
        'Components Guide'
    ]

    const components = [
        <StylesGuide />,
        <AssetsGuide />,
        <ComponentsGuide />
    ]

    return (
        <main>
            {titles.map((title, i) => (
                <Section title={title} key={i}>
                    {components[i]}
                </Section>
            ))}
        </main>
    )
}

export default Main