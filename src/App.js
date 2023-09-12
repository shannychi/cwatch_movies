import React, { useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

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
 
 <header>
 <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{height:'600px',width:'100%', backgroundImage: "url('')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'></h1>
              <h5 className='mb-4'></h5>
            
              
            </div>
          </div>
        </div>
      </div>
 </header>


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
