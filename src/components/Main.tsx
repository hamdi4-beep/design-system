import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"
import { createRef, useEffect } from "react"

const iconSize = '1.2rem'

function Main() {
    const list = Array.from(new Map([
        ['Styles Guide', <StylesGuide iconSize={iconSize} />],
        ['Assets Guide', <AssetsGuide iconSize={iconSize} />],
        ['Components Guide', <ComponentsGuide />]
    ]))

    const lineRef = createRef<HTMLDivElement>()

    useEffect(() => {
        const { current } = lineRef
        const line = current as HTMLDivElement

        document.addEventListener('scroll', e => {
            const y = window.pageYOffset
            line.style.top = y + 'px'
        })
    }, [])

    return (
        <main>
            <div className="line" ref={lineRef}></div>

            {list.map(([title, component], i) => (
                <Section title={title} key={i}>
                    {component}
                </Section>
            ))}
        </main>
    )
}

export default Main