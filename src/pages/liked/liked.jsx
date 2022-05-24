import SideBar from 'components/sideBar';
import { useVideo } from "context/videoContext";
import LikedVideo from "components/likedVideo"

const Liked = () => {
    const { videoState: { liked }, loader } = useVideo();
    console.log(liked)

    return (
        <>
            <div className="main-body">
                <SideBar />
                <main className="explore-main-container">
                    {loader ? <div className="loader"></div> :
                        <div className="explore-section">
                            {liked.length > 0 ? <h2>Liked Videos</h2> : <h2 style={{ textAlign: 'center' }}>Videos not liked!</h2>}
                            <div className="explore-videos">
                                {liked.map((video) => {
                                    return <div key={video._id}>
                                        <LikedVideo video={video} />
                                    </div>
                                })}
                            </div>
                        </div>}
                </main>
            </div>
        </>
    )
}

export default Liked