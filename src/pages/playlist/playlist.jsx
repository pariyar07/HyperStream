import MainNav from "components/mainNav";
import SideBar from 'components/sideBar';
import { useVideo } from "context/videoContext";
import PlaylistVideo from "components/playlistVideo";
import PlaylistBlock from "components/playlistBlock";

const Playlist = () => {
    const { videoState: { playlist }, loader } = useVideo();

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
                                <div className="playlist-videos">
                                    {playlist.map((video) => {
                                        return <div key={video.video._id} className="playlist-box">
                                            <PlaylistBlock playlistName={video}/>
                                            <PlaylistVideo video={video.video}/>
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