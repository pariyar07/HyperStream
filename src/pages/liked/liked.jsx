import SideBar from "components/sideBar";
import { useVideo } from "context/videoContext";
import LikedVideo from "components/likedVideo";
import { useToast } from "custom/useToast";

const Liked = () => {
  const {
    videoState: { liked },
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
              {liked.length > 0 ? (
                <div class="page-header">
                  <h2>Liked Videos</h2>
                  <button
                    className="page-clear-all"
                    onClick={() => {
                      videoDispatch({ type: "CLEAR_LIKED_VIDEOS" });
                      showToast("All Liked Videos Cleared", "success");
                    }}
                  >
                    Clear All
                  </button>
                </div>
              ) : (
                <h2 style={{ textAlign: "center" }}>Videos not liked!</h2>
              )}
              <div className="explore-videos">
                {liked.map((video) => {
                  return (
                    <div key={video._id}>
                      <LikedVideo video={video} />
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

export default Liked;
