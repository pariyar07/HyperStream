import SideBar from "components/sideBar";
import { useVideo } from "context/videoContext";
import WatchLaterVideo from "components/watchLaterVideo";
import { useToast } from "custom/useToast";

const WatchLater = () => {
  const {
    videoState: { watchlater },
    videoDispatch,
    loader,
  } = useVideo();
  const { showToast } = useToast();

  return (
    <>
      <div className="main-body">
        <SideBar />
        <main className="explore-main-container">
          {loader ? (
            <div className="loader"></div>
          ) : (
            <div className="explore-section">
              {watchlater.length > 0 ? (
                <div class="page-header">
                  <h2>Watch Later</h2>
                  <button
                    className="page-clear-all"
                    onClick={() => {
                      videoDispatch({ type: "CLEAR_WATCH_LATER" });
                      showToast("All Watch Later Videos Cleared", "success");
                    }}
                  >
                    Clear All
                  </button>
                </div>
              ) : (
                <h2 style={{ textAlign: "center" }}>Videos not added!</h2>
              )}
              <div className="explore-videos">
                {watchlater.map((video) => {
                  return (
                    <div key={video._id}>
                      <WatchLaterVideo video={video} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default WatchLater;
