import React from 'react'
import './Movie.module.css';

const MoviesList = ({movies}) => {
  return (
    <div className='movies-list'>
        {movies.map((props)=>{
            return (
                <div>
                    <h2 className='movie-item'>{props.id}</h2>
                    <h2 className='movie-item'>{props.title}</h2>
                    <h2 className='movie-item'>{props.openingText}</h2>
                    <h2 className='movie-item'>{props.releaseDate}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default MoviesList

