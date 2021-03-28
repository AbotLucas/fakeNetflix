import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import plusIcon from '../assets/static/plus-icon.png';
import playIcon from '../assets/static/play-icon.png';

const ItemCarousel = (props) => {

  const { data } = props;

  return (
    <div className='carousel-item'>
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='foto' className='carousel-item__img' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{data.title}</p>
        <p className='carousel-item__details--subtitle'>{`Rel: ${data.release_date} | Lang: ${data.original_language} | Rate: ${data.vote_average}`}</p>
      </div>
    </div>
  );
};

export default ItemCarousel;
