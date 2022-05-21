import { useState } from 'react';
import { BsFillPlayFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoVerified, GoPrimitiveDot } from 'react-icons/go';
import { AiFillLike } from 'react-icons/ai';
import { MdWatchLater, MdPlaylistAdd } from 'react-icons/md';
import {useVideo} from "context/videoContext"

const ExploreVideo = ({ video }) => {
    const [show, setShow] = useState(false);
    const {videoDispatch} = useVideo();

    return (<>
        <BsFillPlayFill className="play-icon" onClick={() => {
                        videoDispatch({type: "HISTORY", payload: video})
                    }}/>
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
                    <span onClick={() => {
                        videoDispatch({type: "LIKE", payload: video})
                    }}><AiFillLike />&nbsp; Like</span>
                    <span onClick={() => {
                        videoDispatch({type: "WATCH_LATER", payload: video})
                    }}><MdWatchLater />&nbsp; Add to WatchLater</span>
                    <span onClick={() => {
                        videoDispatch({type: "ADD_TO_PLAYLIST", payload: video})
                    }}><MdPlaylistAdd />&nbsp; Add to Playlist</span>
                </div>}
            </div>
        </div>
    </>
    )
}

export default ExploreVideo