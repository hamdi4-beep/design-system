function VideosContainer() {
    return (
        <div className="videos-container">
            <div className="video-1">
                <video src="./assets/Particles.mp4" autoPlay muted></video>
            </div>

            <div className="video-2">
                <video src="./assets/anime.mp4" autoPlay muted></video>
            </div>
        </div>
    )
}

export default VideosContainer