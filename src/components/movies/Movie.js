import React, { Component } from 'react';
import movieData from './movies.json';
import Movies from '../pages/Movies';

export class Movie extends Component {
  render() {
    //movieData.forEach((movie) => console.log(movie.url));
    const movie = movieData.find(
      (movie) => movie.url === this.props.match.params.movie
    );
    console.log(movie);

    return (
      <div>
        <Movies />

        <h2>{movie.title}</h2>
        {movie.real.map((real, index) => {
          return <div key={index}>{real}</div>;
        })}
      </div>
    );
  }
}

export default Movie;
