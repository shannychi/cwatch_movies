import React, { useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Navbar } from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=93f2cc51175884f5031b4118682aa465";
const API_IMG="https://image.tmdb.org/t/p/w500/"

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
  <>
 



<div className='container'>
    <div className='grid'>
    {movies.map((moviesReq)=>
    <MovieBox key={moviesReq.id} {...moviesReq}/>)}
  </div>
  </div>
  </>
  
 );
 }
export default App;
