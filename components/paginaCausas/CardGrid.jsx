import React from 'react';
import Card from './card';
import '../../styles/components/paginaCausas/_card.scss';

const CardGrid = ({ videos }) => {
  return (
    <div className='card-grid'>
        {videos.map((video) => (
        <Card
          key={video.id}
          videoId={video.videoId}
          title={video.title}
          description={video.description}
        />
      ))}
      
    </div>
  )
}

export default CardGrid;
