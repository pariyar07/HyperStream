import ExploreVideo from 'components/exploreVideo';
import { useVideo } from "context/videoContext";

const ExploreContent = () => {
    const { videoState: { videos }, loader } = useVideo();

    return (
        <>
            <main className="explore-main-container">
                {loader ? <div className="loader"></div> :
                    <div className="explore-section">
                        <h2>Explore</h2>
                        <div className="explore-videos">
                            {videos.map((video) => {
                                return <div key={video._id}>
                                    <ExploreVideo video={video}/>
                                </div>
                            })}
                        </div>
                    </div>}
            </main>
        </>
    )
}

export default ExploreContent