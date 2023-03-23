import { BsFillGearFill } from 'react-icons/bs'

function Header() {
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

                <BsFillGearFill style={{fontSize: '1.4rem'}} />
            </div>
        </header>
    )
}

export default Header