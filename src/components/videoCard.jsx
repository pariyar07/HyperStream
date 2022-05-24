import { GoVerified, GoPrimitiveDot } from 'react-icons/go';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiShareForwardFill, RiScissorsFill } from 'react-icons/ri';
import { BiDollarCircle } from 'react-icons/bi';
import { MdPlaylistAdd } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useVideo } from "context/videoContext";
import { useToast } from 'custom/useToast';

const VideoCard = ({_id, title, url, creator, sub, views, date, likes, description, thumbnail }) => {
    const { setModal, videoDispatch } = useVideo();
    const video = {_id, title, url, creator, sub, views, date, likes, description, thumbnail}
    const { showToast } = useToast();
    const likeVideo = () => {
        videoDispatch({ type: "LIKE", payload: video })
        showToast("Video Liked", 'success');
    }
    const dislikeVideo = () => {
        videoDispatch({ type: "DISLIKE", payload: video })
        showToast("Video Disliked", 'error');
    }

    return (
        <>
            <div className="vid-player">
                <iframe width="97%" height="12%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h3>{title}</h3>
                <div className="vid-player-info">
                    <div className="vid-player-nums">
                        <span>{views} views</span>
                        <GoPrimitiveDot className="vid-dot" />
                        <span>{date}</span>
                    </div>
                    <div className="vid-player-options">
                        <span onClick={likeVideo}><AiFillLike />&nbsp; {likes}</span>
                        <span onClick={dislikeVideo}><AiFillDislike />&nbsp; DISLIKE</span>
                        <span><RiShareForwardFill />&nbsp; SHARE</span>
                        <span><BiDollarCircle />&nbsp; THANKS</span>
                        <span><RiScissorsFill />&nbsp; CLIP</span>
                        <span onClick={() => setModal(true)}><MdPlaylistAdd />&nbsp; SAVE</span>
                        <BsThreeDots />
                    </div>
                </div>
                <div className="vid-creator-info">
                    <div>
                        <img src="https://picsum.photos/50/50" alt="creator" />
                        <div>
                            <p>{creator} <GoVerified className="creator-verified"/></p>
                            <p className="creator-sub">{sub} subscribers</p>
                        </div>
                    </div>
                    <button className="subscribe-creator" title="Subscribe to creator">SUBSCRIBE</button>
                </div>
                <div className="vid-description">
                    <p>{description}</p>
                    <button>SHOW MORE</button>
                </div>
            </div>
        </>
    )
}

export default VideoCard