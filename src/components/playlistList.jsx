import { useState } from "react";
import { IoMdAddCircle, IoMdDoneAll } from "react-icons/io";
import { useVideo } from "context/videoContext";
import { useToast } from "custom/useToast";

const PlaylistList = ({ play, video }) => {
  const [addToPlaylist, setAddToPlaylist] = useState(false);
  const {
    videoDispatch,
    videoState: { playlist },
  } = useVideo();
  const { showToast } = useToast();
  const playlistCopy = [...playlist];
  const selectedPlaylist = playlistCopy.find(
    (playlistName) => playlistName._id === play._id
  );

  const handleAddToPlaylist = () => {
    setAddToPlaylist(true);
    const updatedPlaylist = {
      ...selectedPlaylist,
      ...selectedPlaylist.videos.push(video),
    };
    videoDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: updatedPlaylist,
    });
    showToast(`Added to ${play.playlistName}`, "success");
  };

  return (
    <>
      <div className="playlist-modal-list">
        {addToPlaylist === false ? (
          <IoMdAddCircle
            className="playlist-buttons"
            title={`Add to ${play.playlistName}`}
            onClick={handleAddToPlaylist}
          />
        ) : (
          <IoMdDoneAll className="playlist-buttons" />
        )}
        <p>{play.playlistName}</p>
      </div>
    </>
  );
};

export default PlaylistList;
