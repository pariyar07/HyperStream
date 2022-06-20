import { BsFillPlayFill } from "react-icons/bs";
import { GoVerified, GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import { useVideo } from "context/videoContext";

const HistoryVideo = ({ video }) => {
  const { videoDispatch } = useVideo();

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
        </div>
      </div>
    </>
  );
};

export default HistoryVideo;
