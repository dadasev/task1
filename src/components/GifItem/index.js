import React from 'react';
import './gifItem.scss';

const GifItem = ({ gif, onGifSelect }) => {

  return (
    <button onClick={() => onGifSelect(gif)} className="gif-item-container">
      <img alt={gif.title} src={gif.images.fixed_height.webp} className="gif-container"/>
    </button>
  )
};

export default GifItem;