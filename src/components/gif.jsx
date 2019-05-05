import React from 'react';

const Gif = ({ id, selectGif }) => {
  const src = `https://media2.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    selectGif(id);
  };

  return (
    <img src={src} alt={id} className="gif" onClick={handleClick} />
  );
};

export default Gif;
