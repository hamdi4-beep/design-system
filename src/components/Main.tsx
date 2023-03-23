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

    const children = [
        <StylesGuide />,
        <AssetsGuide />,
        <ComponentsGuide />
    ]

    return (
        <main>
            <div className="content">
                {titles.map((title, i) => (
                    <Section title={title} key={i}>
                        {children[i]}
                    </Section>
                ))}
            </div>
        </main>
    )
}

export default Main