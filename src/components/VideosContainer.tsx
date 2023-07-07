import * as React from 'react'

const {
    useState
} = React

const videos = [
    './assets/Particles.mp4',
    './assets/anime.mp4'
]

function VideosContainer() {
    const [muted, setMuted] = useState(true)

    const handleClick: React.MouseEventHandler<HTMLVideoElement> = e => setMuted(!muted)

    return (
        <div className="videos-container">
            {videos.map((url, i) => (
                <div className={`video-${i + 1}`} key={i}>
                    <video
                        src={url}
                        onClick={handleClick}
                        muted={muted}
                        autoPlay
                        loop
                    />
                </div>
            ))}
        </div>
    )
}

export default VideosContainer