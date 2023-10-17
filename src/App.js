import axios from "axios";
import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './components/Movie.module.css'

function App() {
        const [movies,setMovies]=useState([]);
        const [isLoading,setIsLoading]=useState(false);
        
        const storeinBackend=(e)=>{
          const moviesId=localStorage.getItem('moviesId')
          
          if(moviesId){
            axios.put('https://crudcrud.com/api/bed7ab0985fc4839a9f99eddf7a40f1f/movie',{
              current:e
            })
             
          }else{
          const id=axios.post('https://crudcrud.com/api/bed7ab0985fc4839a9f99eddf7a40f1f/movie',{
                  current : e
            })
            localStorage.setItem('moviesId',id)
        }
      }

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
               storeinBackend(transformedMovies);
               setIsLoading(false);
        }
      
  return (
     <React.Fragment>
      <section className='btn'>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {! isLoading && <MoviesList movies={movies}></MoviesList>}
        { isLoading && <img src='https://media.tenor.com/kxZxwvPdm-wAAAAC/loading-loading-screen.gif' width='95%'/>}
      </section>
     </React.Fragment>
  );
}

export default App;
