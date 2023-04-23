import React from "react";
import '../../styles/components/paginaCausas/_playlist.scss';

const PlaylistEmbed = ({ playlistId }) => (
    <div className="playlist-wrapper">
        <iframe
            width="500"
            height="315"
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Playlist testimonios"
    />
    </div>
  );
  
  export default PlaylistEmbed;