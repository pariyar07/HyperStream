import { useState } from "react";
import { BsFillPlayFill, BsThreeDotsVertical } from "react-icons/bs";
import { GoVerified, GoPrimitiveDot } from "react-icons/go";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { useVideo } from "context/videoContext";
import { useToast } from "custom/useToast";

const WatchLaterVideo = ({ video }) => {
  const { videoDispatch } = useVideo();
  const [show, setShow] = useState(false);
  const { showToast } = useToast();

  const removeWatchLater = () => {
    videoDispatch({ type: "REMOVE_WATCH_LATER", payload: video })
    showToast("Removed from Watch Later", "success");
}

  return (
    <>
      <Link to={`/video/${video._id}`}>
        <BsFillPlayFill
          className="play-icon"
          onClick={() => {
            videoDispatch({ type: "HISTORY", payload: video });
          }}
        />
      </Link>
      <img src={video.thumbnail} alt="category thumbnail" />
      <div className="video-info">
        <p>
          {video.title.length > 40
            ? video.title.slice(0, 40) + "....."
            : video.title}
        </p>
        <div className="video-creator">
          <p>
            {video.creator}&nbsp; <GoVerified className="creator-badge" />
          </p>
          <div>
            <div>
              {video.views}
              <GoPrimitiveDot />
              {video.date}
            </div>
          </div>
          <BsThreeDotsVertical
            className="menu-btn"
            onClick={() => setShow((prev) => !prev)}
            title="Video Menu"
          />
          {show && (
            <div className="menu-content">
              <span onClick={removeWatchLater}>
                <MdWatchLater />
                &nbsp; Remove from Watch Later
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchLaterVideo;
