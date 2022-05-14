import { useState } from 'react';
import { Link } from "react-router-dom";
import { BsFillPlayFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoVerified, GoPrimitiveDot } from 'react-icons/go';
import { AiFillLike } from 'react-icons/ai';
import { MdWatchLater } from 'react-icons/md';
import { useVideo } from "context/videoContext";

export const ExploreVideo = ({ video }) => {
    const { videoDispatch } = useVideo();
    const [show, setShow] = useState(false);

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
                    <span onClick={() => videoDispatch({ type: "LIKE", payload: video })}><AiFillLike />&nbsp; Like</span>
                    <span onClick={() => videoDispatch({ type: "WATCH_LATER", payload: video })}><MdWatchLater />&nbsp; Add to WatchLater</span>
                </div>}
            </div>
        </div>
    </>
    )
}

export default ExploreVideo