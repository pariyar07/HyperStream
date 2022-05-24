import SideBar from 'components/sideBar';
import { useVideo } from "context/videoContext";
import WatchLaterVideo from "components/watchLaterVideo"

const WatchLater = () => {
    const { videoState: { watchlater }, loader } = useVideo();

    return (
        <>
            <div className="main-body">
                <SideBar />
                <main className="explore-main-container">
                    {loader ? <div className="loader"></div> :
                        <div className="explore-section">
                            {watchlater.length > 0 ? <h2>Watch Later</h2> : <h2 style={{ textAlign: 'center' }}>Videos not added!</h2>}
                            <div className="explore-videos">
                                {watchlater.map((video) => {
                                    return <div key={video._id}>
                                        <WatchLaterVideo video={video} />
                                    </div>
                                })}
                            </div>
                        </div>}
                </main>
            </div>
        </>
    )
}

export default WatchLater