import React from "react";

const PlaylistEmbed = ({ playlistId }) => (
    <div className="playlist-wrapper">
        <iframe
            width="500"
            height="315"
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Playlist"
    />
    </div>
  );
  
  export default PlaylistEmbed;