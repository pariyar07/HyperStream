import SideBar from "components/sideBar";
import { useVideo } from "context/videoContext";
import PlaylistVideo from "components/playlistVideo";
import PlaylistBlock from "components/playlistBlock";
import { useToast } from "custom/useToast";

const Playlist = () => {
  const {
    videoState: { playlist },
    videoDispatch,
    loader,
  } = useVideo();
  const { showToast } = useToast();

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
                  <div class="page-header">
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
                  {playlist.map((video) => {
                    return (
                      <div key={video.video._id} className="playlist-box">
                        <PlaylistBlock playlistName={video} />
                        <PlaylistVideo video={video.video} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Playlist;
