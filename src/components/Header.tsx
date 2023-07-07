import * as React from 'react'
import { BsFillGearFill } from 'react-icons/bs'

const {
    useState
} = React

function Header() {
    const [hidden, setHidden] = useState(true)

    const handleOpenClick: React.MouseEventHandler<SVGElement> = e => setHidden(!hidden)

    return (
        <header>
            <h1>Design System</h1>

            <div className="container space-between">
                <div className="user">
                    <div className="user-img">
                        <img src='./assets/images/user.jpg' alt='' />
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

                    <div className={hidden ? 'items-list hidden' : 'items-list'}>
                        <li>
                            <button onClick={e => location.reload()}>Reset</button>
                        </li>

                        <li>
                            <span>Change Theme</span>

                            <div className="colors-list">
                                <div className="color one"></div>
                                <div className="color two"></div>
                                <div className="color three"></div>
                                <div className="color four"></div>
                            </div>
                        </li>

                        <li>Hide Interface</li>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Header