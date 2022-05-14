const PlaylistBlock = ({ playlistName }) => {
    return (
        <div key={playlistName.video._id} className="playlist-name-block">{playlistName.name}</div>
    )
}

export default PlaylistBlock