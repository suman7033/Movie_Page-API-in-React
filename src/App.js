import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './components/Movie.module.css'

function App() {
        const [movies,setMovies]=useState([]);
        const [isLoading,setIsLoading]=useState(false);
        

      async function fetchMovieHandler(){
        setIsLoading(true);
        const response=await fetch('https://swapi.dev/api/films/')
        const data= await response.json();
             
              const transformedMovies=data.results.map((movieData,key)=>{
                 return {
                  id: movieData.episode_id,
                  title: movieData.title,
                  openingText: movieData.opening_crawl,
                  releaseDate: movieData.release_date,
                 }
              })
               setMovies(transformedMovies);
               setIsLoading(false);
        }
      
  return (
     <React.Fragment>
      <section className='btn'>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {! isLoading && <MoviesList movies={movies}></MoviesList>}
        { isLoading && <img src='https://gifdb.com/images/high/buffering-loading-icon-moving-h9m8b9idk9tpksry.gif'/>}
      </section>
     </React.Fragment>
  );
}

export default App;
