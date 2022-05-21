import {MdPlaylistPlay} from "react-icons/md"

const PlaylistBlock = ({ playlistName }) => {
    return (
        <div key={playlistName.video._id} className="playlist-name-block">{playlistName.name}&nbsp; <MdPlaylistPlay/></div>
    )
}

export default PlaylistBlock