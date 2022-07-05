import { useState } from "react";
import SideBar from "components/sideBar";
import { useVideo } from "context/videoContext";
import { MdPlaylistPlay } from "react-icons/md";
import { useToast } from "custom/useToast";
import OpenPlaylist from "components/openPlaylist";

const Playlist = () => {
  const {
    videoState: { playlist },
    videoDispatch,
    loader,
  } = useVideo();
  const { showToast } = useToast();
  const [playlistContent, setPlaylistContent] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="main-body">
        <SideBar />
        <main className="playlist-main-container">
          {loader ? (
            <div className="loader"></div>
          ) : (
            <>
              <div className="explore-section">
                {playlist.length > 0 ? (
                  <div className="page-header">
                    <h2>Playlists</h2>
                    <button
                      className="page-clear-all"
                      onClick={() => {
                        videoDispatch({ type: "CLEAR_PLAYLIST" });
                        showToast("All Playlists Cleared", "success");
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                ) : (
                  <h2 style={{ textAlign: "center" }}>Playlist not Made!</h2>
                )}
                <div className="playlist-videos">
                  {playlist.map((playlistName) => {
                    return (
                      <div
                        onClick={() => setShowModal(true)}
                        key={playlistName._id}
                      >
                        <div
                          className="playlist-box"
                          onClick={() =>
                            setPlaylistContent(playlistName.videos)
                          }
                        >
                          <span className="playlist-name">
                            {playlistName.playlistName}&nbsp;
                            <MdPlaylistPlay />
                          </span>
                          <span className="playlist-video-length">
                            Videos: {playlistName.videos.length}
                          </span>
                          {playlistName.videos.length < 1 ? (
                            <img
                              src="/assets/hyperstream.png"
                              alt="No Video Available"
                              className="playlist-image"
                            ></img>
                          ) : (
                            <img
                              src={playlistName.videos[0].thumbnail}
                              alt="video-available"
                              className="playlist-image"
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          <OpenPlaylist
            playlistContent={playlistContent}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </main>
      </div>
    </>
  );
};

export default Playlist;
