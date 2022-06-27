import { useState } from "react";

const PlaylistVideo = ({ video }) => {
  const [showPlaylistVideo, setShowPlaylistVideo] = useState(false);

  return (
    <>
      <img
        src={video.thumbnail}
        alt="category thumbnail"
        className="playlist-thumbnail"
      />
      <p className="playlist-title">{video.title}</p>
    </>
  );
};

export default PlaylistVideo;
