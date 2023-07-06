import * as React from 'react'

const {
    useState
} = React

function VideosContainer() {
    const [muted, setMuted] = useState(true)

    const handleClick: React.MouseEventHandler<HTMLVideoElement> = e => setMuted(!muted)

    return (
        <div className="videos-container">
            <div className="video-1">
                <video src="./assets/Particles.mp4" onClick={handleClick} autoPlay muted={muted} loop />
            </div>

            <div className="video-2">
                <video src="./assets/anime.mp4" onClick={handleClick} autoPlay muted={muted} loop />
            </div>
        </div>
    )
}

export default VideosContainer