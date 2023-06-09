import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/paginaCausas/_youtubeembed.scss';

const YoutubeEmbed = ({embedId}) => {
  return (
    <div className='video-responsive'>
        <iframe 
            // width={250}
            height= '50px'
            src= {'https://www.youtube.com/embed/'+embedId}  
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube">

        </iframe>
      
    </div>
  );

    
    
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
