
import SideBar from 'components/sideBar'
import { useVideo } from "context/videoContext";
import HistoryVideo from "components/historyVideo"

const History = () => {
    const { videoState: { history }, loader } = useVideo();

    return (
    <>
        <div className="main-body">
                <SideBar />
                <main className="explore-main-container">
                {loader ? <div className="loader"></div> :
                    <div className="explore-section">
                        { history.length > 0 ? <h2>History</h2>  : <h2 style={{textAlign: 'center'}}>You haven't watched any video yet!</h2>}
                        <div className="explore-videos">
                            {history.map((video) => {
                                return <div key={video._id}>
                                    <HistoryVideo video={video}/>
                                </div>
                            })}
                        </div>
                    </div>}
            </main>
            </div>
    </>
    )
}

export default History