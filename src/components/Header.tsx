import * as React from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import { StateContext } from '../context/StateContext'

function Header() {
    const listRef = React.createRef<HTMLDivElement>()
    const {dispatch} = React.useContext(StateContext)

    const handleResetClick: React.MouseEventHandler<HTMLButtonElement> = e => location.href = '/'

    const handleOpenClick: React.MouseEventHandler<SVGElement> = e => {
        const { current } = listRef
        current?.classList.toggle('hidden')
    }

    const handleColorClick: React.MouseEventHandler<HTMLDivElement> = e => {
        const color = e.target as HTMLDivElement

        if (color.classList.contains('color')) {
            const [,second] = getColor(color)
            document.body.style.backgroundColor = second
        }
    }

    const handleDarkModeClick: React.MouseEventHandler<HTMLSpanElement> = e => {
        const body = document.body as HTMLElement
        const toggleContainer = e.target as HTMLDivElement

        body.classList.toggle('dark-mode')
        toggleContainer.classList.toggle('toggled')
    }

    return (
        <header>
            <h1>Design System</h1>

            <div className="space-between">
                <div className="user">
                    <div className="user-img">
                        <img src='./assets/user.jpg' alt='' />
                    </div>

                    <div className="user-info">
                        <h4>Hamdi Kamel</h4>
                
                        <span>
                            <strong>0 </strong>
                            Notes
                        </span>
                    </div>
                </div>

                <ul className="menu-list">
                    <BsFillGearFill onClick={handleOpenClick} style={{fontSize: '1.4rem'}} />

                    <div className="items-list hidden" ref={listRef}>
                        <li>
                            <button onClick={handleResetClick}>Reset</button>
                        </li>

                        <li>
                            <span>Change Theme</span>

                            <div className="colors-list" onClick={handleColorClick}>
                                <div className="color one"></div>
                                <div className="color two"></div>
                                <div className="color three"></div>
                                <div className="color four"></div>
                            </div>
                        </li>

                        <li>
                            <span>Dark Mode</span>
                            <div className="toggle" onClick={handleDarkModeClick}></div>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    )
}

function getColor(elem: HTMLDivElement): RegExpMatchArray {
    const prop = getComputedStyle(elem).getPropertyValue('background-image')
    return prop.match(/rgb\([\d\s,]+\)/g)!
}

export default Header