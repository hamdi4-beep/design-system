import * as React from 'react'

import Section from "./Section"
import StylesGuide from './StylesGuide'
import AssetsGuide from "./AssetsGuide"
import ComponentsGuide from "./ComponentsGuide"

const {
    useRef,
    useEffect,
    useState
} = React

const components = Array.from(new Map([
    ['Styles Guide', <StylesGuide />],
    ['Assets Guide', <AssetsGuide />],
    ['Components Guide', <ComponentsGuide />]
]))

function Main() {
    const [posY, setPosY] = useState(0)
    let timerIDRef = useRef<null | number>()

    const handleScroll = () => {
        let timerID = timerIDRef.current!
        clearTimeout(timerID)
        timerID = setTimeout(() => setPosY(window.scrollY), 300)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            clearTimeout(timerIDRef.current!)
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <main>
            <div className="line" style={{top: posY + 'px'}}>
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