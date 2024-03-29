import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import VideoReducer from "reducer/videoReducer";
import { getVideos } from "services/videoService";
import { filterReducer } from "reducer/filterReducer";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const videoData = await getVideos();
        videoDispatch({ type: "LOAD_VIDEO", payload: videoData.data.videos });
        setLoader(false);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  const [videoState, videoDispatch] = useReducer(VideoReducer, {
    videos: [],
    liked: [],
    watchlater: [],
    history: [],
    playlist: [],
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    searchQuery: "",
    category: "",
  });

  return (
    <VideoContext.Provider
      value={{
        videoState,
        videoDispatch,
        loader,
        modal,
        setModal,
        filterState,
        filterDispatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
