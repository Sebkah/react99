import React from 'react';
import movieData from '../movies/movies.json';

import MovieTile from '../movies/MovieTile';

const Movies = () => {
  //movieData = movieData.parse();
  //console.log(movieData);
  return (
    <div className='movie-Page'>
      {movieData.map((movie, index) => {
        return <MovieTile key={index} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
