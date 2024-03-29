import ExploreVideo from "components/exploreVideo";
import { useVideo } from "context/videoContext";

const ExploreContent = () => {
  const {
    videoState: { videos },
    filterState: { searchQuery, category },
    loader,
  } = useVideo();

  const transformVideos = () => {
    let sortedVideos = videos;
    if (searchQuery) {
      sortedVideos = sortedVideos.filter((video) =>
        video.title.toLowerCase().includes(searchQuery)
      );
    }
    if (category) {
      sortedVideos = sortedVideos.filter(
        (video) => video.category === category
      );
    }
    return sortedVideos;
  };

  return (
    <>
      <main className="explore-main-container">
        {loader ? (
          <div className="loader"></div>
        ) : (
          <div className="explore-section">
            <h2>Explore</h2>
            <div className="explore-videos">
              {transformVideos().map((video) => {
                return (
                  <div key={video._id}>
                    <ExploreVideo video={video} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ExploreContent;
