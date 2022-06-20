import { useState } from 'react';
import { Link } from "react-router-dom";
import { BsFillPlayFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoVerified, GoPrimitiveDot } from 'react-icons/go';
import { AiFillLike } from 'react-icons/ai';
import { MdWatchLater } from 'react-icons/md';
import { useToast } from 'custom/useToast';
import { useVideo } from "context/videoContext";

export const ExploreVideo = ({ video }) => {
    const [likeActive, setLikeActive] = useState(false);
    const [watchlaterActive, setWatchlaterActive] = useState(false);
    const { showToast } = useToast();
    const { videoDispatch } = useVideo();
    const [show, setShow] = useState(false);
    
    const likeVideo = () => {
        videoDispatch({ type: "LIKE", payload: video })
        showToast("Video Liked", "success");
        setLikeActive(true);
    }
    const unlikeVideo = () => {
        videoDispatch({ type: "UNLIKE", payload: video })
        showToast("Video Unliked", "success");
        setLikeActive(false);
    }
    const watchLater = () => {
        videoDispatch({ type: "WATCH_LATER", payload: video })
        showToast("Added to Watch Later", "success");
        setWatchlaterActive(true);
    }
    const removeWatchLater = () => {
        videoDispatch({ type: "REMOVE_WATCH_LATER", payload: video })
        showToast("Removed from Watch Later", "success");
        setWatchlaterActive(false);
    }

    return (<>
        <Link to={`/video/${video._id}`}><BsFillPlayFill className="play-icon" onClick={() => {
            videoDispatch({ type: "HISTORY", payload: video })
        }} /></Link>
        <img src={video.thumbnail} alt="category thumbnail" />
        <div className="video-info">
            <p>{video.title.length > 40 ? video.title.slice(0, 40) + "....." : video.title}</p>
            <div className="video-creator">
                <p>{video.creator}&nbsp; <GoVerified className="creator-badge" /></p>
                <div>
                    <div>
                        {video.views}
                        <GoPrimitiveDot />
                        {video.date}
                    </div>
                </div>
                <BsThreeDotsVertical className="menu-btn" onClick={() => setShow(prev => !prev)} title="Video Menu" />
                {show && <div className="menu-content">
                    {likeActive ? <span onClick={unlikeVideo}><AiFillLike />&nbsp; Unlike</span> : <span onClick={likeVideo}><AiFillLike />&nbsp; Like</span>}
                    {watchlaterActive ? <span onClick={removeWatchLater}><MdWatchLater />&nbsp; Remove from WatchLater</span> : <span onClick={watchLater}><MdWatchLater />&nbsp; Add to WatchLater</span>}
                </div>}
            </div>
        </div>
    </>
    )
}

export default ExploreVideo