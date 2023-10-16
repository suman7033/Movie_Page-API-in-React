import React from 'react'
import './Movie.module.css';

const MoviesList = ({movies}) => {
  return (
    <div>
        {movies.map((props)=>{
            return (
                <div>
                    <h2>{props.id}</h2>
                    <h2>{props.title}</h2>
                    <h2>{props.openingText}</h2>
                    <h2>{props.releaseDate}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default MoviesList

