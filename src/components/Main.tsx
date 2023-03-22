import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"

function Main() {
    const titles = [
        'Styles Guide',
        'Assets Guide'
    ]

    const children = [
        <StylesGuide />,
        <AssetsGuide />
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