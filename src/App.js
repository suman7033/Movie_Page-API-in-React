import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './components/Movie.module.css';

function App() {
        const [movies,setMovies]=useState([]);

      async function fetchMovieHandler(){
        const response=await fetch('https://swapi.dev/api/films/')
        const data= await response.json();
             
              const transformedMovies=data.results.map((movieData)=>{
                 return {
                  id: movieData.episode_id,
                  title: movieData.title,
                  openingText: movieData.opening_crawl,
                  releaseDate: movieData.release_date,
                 }
              })
               setMovies(transformedMovies);
        }
      
  return (
     <React.Fragment>
      <section className='btn'>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies}></MoviesList>
      </section>
     </React.Fragment>
  );
}

export default App;
