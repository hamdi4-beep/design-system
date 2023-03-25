import * as React from 'react'
import { BsFillGearFill } from 'react-icons/bs'

function Header() {
    const listRef = React.createRef<HTMLDivElement>()

    const handleOpenClick: React.MouseEventHandler<SVGElement> = e => {
        const { current } = listRef
        current?.classList.toggle('hidden')
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
                            <span>Change Theme</span>

                            <div className="colors-list">
                                <div className="color one"></div>
                                <div className="color two"></div>
                                <div className="color three"></div>
                                <div className="color four"></div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Header