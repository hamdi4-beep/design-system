import ImagesContainer from './ImagesContainer'
import VideosContainer from './VideosContainer'

function AssetsGuide() {
    return (
        <div className="section-guide">
            <div className="images-section">
                <h3>Image Assets</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit!</p>

                <div className="section-content">
                    <ImagesContainer />
                </div>
            </div>

            <div className="videos-section">
                <h3>Video Assets</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, hic!</p>

                <div className="section-content">
                    <VideosContainer />
                </div>
            </div>
        </div>
    )
}

export default AssetsGuide