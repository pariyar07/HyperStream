import MainNav from "components/mainNav";
import SideBar from 'components/sideBar';
import { useVideo } from "context/videoContext";
import PlaylistVideo from "components/playlistVideo"

const Playlist = () => {
    const { videoState: { playlist, liked }, loader } = useVideo();

    return (
        <>
            <MainNav />
            <div className="main-body">
                <SideBar />
                <main className="playlist-main-container">
                    {loader ? <div className="loader"></div> :
                        <>
                            <div className="explore-section">
                                {playlist.length > 0 ? <h2>Playlist</h2> : <h2 style={{ textAlign: 'center' }}>Playlist not Made!</h2>}
                                <div className="explore-videos">
                                    {playlist.map((video) => {
                                        return <div key={video._id}>
                                            <PlaylistVideo video={video} />
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="explore-section">
                                {liked.length > 0 ? <h2>Liked Videos</h2> : ""}
                                <div className="explore-videos">
                                    {liked.map((video) => {
                                        return <div key={video._id}>
                                            <PlaylistVideo video={video} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </>}
                </main>
            </div>
        </>
    )
}

export default Playlist