import { BsFillGearFill } from 'react-icons/bs'
function Header() {
    return (
        <header>
            <div className="user">
                <div className="user-img">
                    <img src='./assets/user.jpg' alt='' />
                </div>

                <div className="user-info">
                    <h4>Hamdi Kamel</h4>
                    
                    <span>
                        <strong style={{paddingRight: '.2em'}}>0</strong>
                        Notes
                    </span>
                </div>
            </div>

            <BsFillGearFill style={{fontSize: '1.4rem'}} />
        </header>
    )
}

export default Header