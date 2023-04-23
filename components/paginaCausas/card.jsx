import React from 'react';
import YouTube from 'react-youtube';
import '../../styles/components/paginaCausas/_card.scss';

const Card = ({ videoId, title, description }) => {
  return (
    <div className='card'>
      <div className='card__video'>
        <YouTube videoId={videoId} />
      </div>
      <div className='card__content'>
        <h2 className='card__title'>{title}</h2>
        <p className='card__description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
