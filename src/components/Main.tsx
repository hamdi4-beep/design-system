import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"
import { createRef, useEffect } from "react"

const iconSize = '1.2rem'

const components = Array.from(new Map([
    ['Styles Guide', <StylesGuide iconSize={iconSize} />],
    ['Assets Guide', <AssetsGuide iconSize={iconSize} />],
    ['Components Guide', <ComponentsGuide />]
]))

const lineRef = createRef<HTMLDivElement>()

function Main() {
    useEffect(() => {
        const { current } = lineRef
        const line = current as HTMLDivElement

        document.addEventListener('scroll', e => {
            const y = window.pageYOffset
            line.style.top = `${y}px`
        })

        return () => document.removeEventListener('scroll', () => line.style.top = '0px')
    }, [])

    return (
        <main>
            <div className="line" ref={lineRef}>
                <span>
                    <a href="#root">1</a>
                </span>

                <span>
                    <a href="#second">2</a>
                </span>

                <span>
                    <a href="#third">3</a>
                </span>
            </div>

            {components.map(([name, component], i) => (
                <Section heading={name} key={i}>
                    {component}
                </Section>
            ))}
        </main>
    )
}

export default Main