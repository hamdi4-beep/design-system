function VideosContainer() {

    const handleClick: React.MouseEventHandler<HTMLVideoElement> = e => {
        const video = e.target as HTMLVideoElement
        video.muted = !video.muted
    }

    return (
        <div className="videos-container">
            <div className="video-1">
                <video src="./assets/Particles.mp4" onClick={handleClick} autoPlay muted loop />
            </div>

            <div className="video-2">
                <video src="./assets/anime.mp4" onClick={handleClick} autoPlay muted loop />
            </div>
        </div>
    )
}

export default VideosContainer