import SideBar from "components/sideBar";
import { useVideo } from "context/videoContext";
import HistoryVideo from "components/historyVideo";
import { useToast } from "custom/useToast";

const History = () => {
  const {
    videoState: { history },
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
              {history.length > 0 ? (
                <div class="page-header">
                  <h2>History</h2>
                  <button
                    className="page-clear-all"
                    onClick={() => {
                      videoDispatch({ type: "CLEAR_HISTORY" });
                      showToast("All History Cleared", "success");
                    }}
                  >
                    Clear All
                  </button>
                </div>
              ) : (
                <h2 style={{ textAlign: "center" }}>
                  You haven't watched any video yet!
                </h2>
              )}
              <div className="explore-videos">
                {history.map((video) => {
                  return (
                    <div key={video._id}>
                      <HistoryVideo video={video} />
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

export default History;
