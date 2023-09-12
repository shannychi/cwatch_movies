import React, { useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=93f2cc51175884f5031b4118682aa465";

function App() {
   const [movies, setMovies]=useState([]);

useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
        console.log(data)
        setMovies(data.results);
    })
}, [])

 return (
  <div className='App'>
    {movies.map((moviesReq)=>
    <MovieBox key={moviesReq.id} {...moviesReq}/>)}
  </div>
 );
 }
export default App;
