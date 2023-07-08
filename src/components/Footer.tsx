import {
    FaFacebook,
    FaGithub,
    FaTwitter
} from 'react-icons/fa'

function Footer() {
    const iconSize = '1.4rem'

    return (
        <footer>
            <div className="bottom-wrapper space-between">
                <p>Made by
                    <strong> Hamdi Kamel</strong>
                </p>

                <div className="social-links">
                    <a href="https://www.facebook.com/hamdi.kamel.10236/" target={'_blank'}>
                        <FaFacebook fontSize={iconSize} />
                    </a>

                    <a href="https://github.com/hamdi4-beep" target={'_blank'}>
                        <FaGithub fontSize={iconSize} />
                    </a>

                    <a href="https://twitter.com/Hamdi33727935" target={'_blank'}>
                        <FaTwitter fontSize={iconSize} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer