import React from 'react';
import GifItem from '../GifItem';

const GifList = ({ gifs, onGifSelect }) => {
  const renderedList = gifs.map(gif => {
    return (
      <div className="four wide column" key={gif.id}>
        <GifItem
          onGifSelect={onGifSelect}
          gif={gif}
        />
      </div>
    );
  });

  return (
    <div className="ui grid container">{renderedList}</div>
  )
};

export default GifList;
