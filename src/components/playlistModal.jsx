import { useState } from 'react';
import { useVideo } from "context/videoContext";
import { v4 as uuid } from "uuid";

const PlaylistModal = ({ video }) => {
    const { videoState: { playlist }, videoDispatch, modal, setModal } = useVideo();
    const [playlistName, setPlaylistName] = useState("");

    const addPlaylist = (e) => {
        e.preventDefault();
        if(playlistName.length === 0){
            return
        }
        const newPlaylist = {
            name: playlistName,
            video: video
        }
        videoDispatch({ type: "ADD_TO_PLAYLIST", payload: newPlaylist })
        setPlaylistName("")
    }

    return (<>
        {modal === true ?
            <div className="playlist-modal" onClick={() => setModal(false)}>
                <div className="playlist-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="playlist-modal-header">
                        <h4>Create a Playlist</h4>
                    </div>
                    <div className="playlist-modal-body">
                        <input type="text" placeholder="Add playlist name" onChange={(e) => setPlaylistName(e.target.value)} value={playlistName}/>
                    </div>
                    <div className="playlist-list">{playlist.map(play => {
                        return <p key={uuid()}>{play.name}</p>
                    })}</div>
                    <div className="playlist-modal-footer">
                        <button onClick={addPlaylist}>Add to Playlist</button>
                        <button onClick={() => setModal(false)}>Close</button>
                    </div>
                </div>
            </div> : ""}
    </>
    )
}

export default PlaylistModal