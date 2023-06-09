import ImagesContainer from './ImagesContainer'
import VideosContainer from './VideosContainer'

function AssetsGuide() {
    return (
        <div className="section-guide" id='second'>
            <div className="images-section">
                <div className="space-between">
                    <h3>Image Assets</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit!</p>

                <div className="section-content">
                    <ImagesContainer />
                </div>
            </div>

            <div className="videos-section">
                <div className="space-between">
                    <h3>Video Assets</h3>
                </div>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, hic!</p>

                <div className="section-content">
                    <VideosContainer />
                </div>
            </div>
        </div>
    )
}

export default AssetsGuide