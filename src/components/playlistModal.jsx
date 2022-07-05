import { useState } from "react";
import { useVideo } from "context/videoContext";
import { v4 as uuid } from "uuid";
import { useToast } from "custom/useToast";
import PlaylistList from "./playlistList";

const PlaylistModal = ({ video }) => {
  const {
    modal,
    setModal,
    videoState: { playlist },
    videoDispatch,
  } = useVideo();
  const { showToast } = useToast();
  const [playlistName, setPlaylistName] = useState("");

  const addNewPlaylistFolder = () => {
    return (
      videoDispatch({
        type: "ADD_PLAYLIST",
        payload: { _id: uuid(), playlistName: playlistName, videos: [] },
      }),
      setPlaylistName("")
    );
  };

  const showAddPlaylistToast = () => {
    showToast("Add Playlist Name", "error");
  };

  return (
    <>
      {modal === true ? (
        <div className="playlist-modal" onClick={() => setModal(false)}>
          <div
            className="playlist-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="playlist-modal-header">
              <h4>Create a Playlist</h4>
            </div>
            <div className="playlist-modal-body">
              <input
                type="text"
                placeholder="Add playlist name"
                onChange={(e) => setPlaylistName(e.target.value)}
                value={playlistName}
              />
              {playlistName.length < 1 ? (
                <button onClick={showAddPlaylistToast}>
                  Create New Playlist
                </button>
              ) : (
                <button onClick={addNewPlaylistFolder}>
                  Create New Playlist
                </button>
              )}
            </div>
            <div className="playlist-list">
              {playlist.map((play) => {
                return (
                  <PlaylistList play={play} video={video} key={play._id} />
                );
              })}
            </div>
            <div className="playlist-modal-footer">
              <button onClick={() => setModal(false)}>Close</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PlaylistModal;
