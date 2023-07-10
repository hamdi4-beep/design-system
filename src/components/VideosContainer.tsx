import * as React from 'react'

const {
    useState
} = React

const videos = [
    './assets/videos/Particles.mp4',
    './assets/videos/anime.mp4'
]

const Video: React.FC<{
    URL: string
}> = ({
    URL
}) => {
    const [muted, setMuted] = useState(true)

    const handleClick: React.MouseEventHandler<HTMLVideoElement> = e => setMuted(!muted)

    return (
        <div className='video'>
            <video
                src={URL}
                onClick={handleClick}
                muted={muted}
                autoPlay
                loop
            />
        </div>
    )
}

function VideosContainer() {
    return (
        <div className="videos-container">
            {videos.map((url, i) => (<Video URL={url} key={i} />))}
        </div>
    )
}

export default VideosContainer