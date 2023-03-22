import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };
  const removeTourHandler = () => {
    removeTour(id)
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
          <p>{readMore ? info : `${info.substring(0, 250)}...`}
          <button onClick={clickHandler}>
            {readMore ? 'show less' : 'read more'}
          </button>
          </p>
          <button className='delete-btn' onClick={removeTourHandler}>
            not interested
            </button>
      </footer>
  </article>
  );
};

export default Tour;
