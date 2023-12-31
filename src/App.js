import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './components/Movie.module.css'
import AddMoviesForm from './components/AddMoviesForm';

function App() {
        const [movies,setMovies]=useState([]);
        const [isLoading,setIsLoading]=useState(false);
        const [error,setError]=useState(null);
        
         

       async function fetchMovieHandler(){
        setIsLoading(true);
        setError(null);
        try{
          const response=await fetch('https://swapi.dev/api/films/')
          if(!response.ok){
            throw new Error('Something went wrong')
          }
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
        }catch(error){
           setError(error.message);
        }
        setIsLoading(false);
        }
         
      
  return (
     <React.Fragment>
      <AddMoviesForm/>
      <section className='btn'>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {! isLoading && <MoviesList movies={movies}></MoviesList>}
        { isLoading && <img src='https://media.tenor.com/kxZxwvPdm-wAAAAC/loading-loading-screen.gif' width='95%'/>}
        {!isLoading && error && <p>{error}</p>}
      </section>
     </React.Fragment>
  );
}

export default App;
