import MainNav from "components/mainNav";
import SideBar from 'components/sideBar';
import { useParams } from "react-router-dom";
import { useVideo } from "context/videoContext";
import VideoCard from "components/videoCard";
import PlaylistModal from 'components/playlistModal'

const SingleVideoPage = () => {
    const { videoId } = useParams();
    const { videoState: { videos } } = useVideo();


    function getVideoDetails(videos, videoId) {
        return videos.find((video) => video._id === videoId);
    }

    const video = getVideoDetails(videos, videoId);

    return (
        <>
            <MainNav />
            <div className="main-body">
                <SideBar />
                <main className="single-video-main-container">
                    <VideoCard {...video} />
                    <div className="recommended-vid">
                        {videos.map((video) => {
                            return (<div key={video._id}>
                                <img src={video.thumbnail} alt="category thumbnail" className="single-page-thumbnail"/>
                                <div className="single-video-info">
                                    <p>{video.title.length > 40 ? video.title.slice(0, 40) + "....." : video.title}</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </main>
                <PlaylistModal video={video}/>
            </div>
        </>
    )
}

export default SingleVideoPage