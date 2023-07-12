import * as React from 'react'
import { BsFillGearFill } from 'react-icons/bs'

const {
    useState
} = React

const MenuList: React.FC = () => {
    const [hidden, setHidden] = useState(true) // Using hidden state, we toggle the visibility of the menu list

    const handleOpenClick: React.MouseEventHandler<SVGElement> = e => setHidden(prevHidden => !prevHidden)

    return (
        <ul className="menu-list">
            <BsFillGearFill
                onClick={handleOpenClick}
                style={{fontSize: '1.4rem'}}
            />

            <div className={hidden ? 'items-list hidden' : 'items-list'}>
                <li>
                    <button onClick={e => location.reload()}>Reset</button>
                </li>

                <li>
                    <span>Change Theme</span>
                    <ColorsList />
                </li>
            </div>
        </ul>
    )
}

const ColorsList = React.memo(() => {
    const counterRef = React.useRef(0)

    const handleClick: React.MouseEventHandler = e => console.log(counterRef.current += 1)

    return (
        <div className="colors-list">
            <div className="color one" onClick={handleClick}></div>
            <div className="color two" onClick={handleClick}></div>
            <div className="color three" onClick={handleClick}></div>
            <div className="color four" onClick={handleClick}></div>
        </div>
    )
})

function Header() {
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

                <MenuList />
            </div>
        </header>
    )
}

export default Header