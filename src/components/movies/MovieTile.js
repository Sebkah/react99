import React from 'react';
import { Link } from 'react-router-dom';

const MovieTile = (props) => {
  const { title, real, url } = props.movie;
  return (
    <Link to={url} className='movieTile'>
      <h2>{title}</h2>
      {/* by
      <ul>
        {real.map((real, index) => {
          return <li key={index}>{real}</li>;
        })}
      </ul> */}
    </Link>
  );
};

export default MovieTile;
