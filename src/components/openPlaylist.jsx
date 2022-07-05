import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { useVideo } from "context/videoContext";

const OpenPlaylist = ({ playlistContent, showModal, setShowModal }) => {
  const { videoDispatch } = useVideo();

  return (
    <>
      {showModal && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
          <div className="relative w-1/2 my-6 m-auto">
            <div className="border-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative flex flex-col w-full h-96 bg-white outline-none focus:outline-none">
              <div className="flex p-5 border-b border-solid border-grey rounded-t w-full">
                <h3 className="text-2xl font-semibold">Playlist Videos</h3>
              </div>
              <div className="p-8 flex flex-row justify-around gap-8 w-full h-full flex-wrap overflow-y-auto">
                {playlistContent.map((video) => {
                  return (
                    <Link
                      to={`/video/${video._id}`}
                      key={video._id}
                      className="relative w-48"
                      onClick={() => {
                        videoDispatch({ type: "HISTORY", payload: video });
                      }}
                    >
                      <img
                        className="w-full rounded-2xl"
                        src={video.thumbnail}
                        alt="category thumbnail"
                      />
                      <div className="text-base">
                        <p>
                          {video.title.length > 40
                            ? video.title.slice(0, 40) + "....."
                            : video.title}
                        </p>
                        <div className="flex items-center text-dark-grey text-sm">
                          <p>{video.creator}&nbsp;</p>
                          <GoVerified />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-grey rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenPlaylist;
