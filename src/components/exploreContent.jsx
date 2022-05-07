import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BsFillPlayFill } from 'react-icons/bs'
import { GoVerified, GoPrimitiveDot } from 'react-icons/go'

const ExploreContent = () => {
    const [videos, setVideos] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoader(true)
                const videoData = await axios.get("/api/videos");
                setVideos(videoData.data.videos)
                setLoader(false)
            } catch (error) {
                console.error(error.message);
            }
        })()
    }, []);

    return (
        <>
            <main className="explore-main-container">
                {loader ? <div class="loader"></div> :
                    <div className="explore-section">
                        <h2>Explore</h2>
                        <div className="explore-videos">
                            {videos.map((video) => {
                                return <div key={video._id}>
                                    <BsFillPlayFill className="play-icon" />
                                    <img src={video.thumbnail} alt="category thumbnail" />
                                    <div className="video-info">
                                        <p>{video.title.length > 40 ? video.title.slice(0, 40) + "....." : video.title}</p>
                                        <div className="video-creator">
                                            <p>{video.creator}&nbsp; <GoVerified className="creator-badge" /></p>
                                            <div>
                                                {video.views}
                                                <GoPrimitiveDot />
                                                {video.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>}
            </main>
        </>
    )
}

export default ExploreContent