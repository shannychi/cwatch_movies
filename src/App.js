import React, { useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar,} from 'react-bootstrap';
import img from "./image/header img.jpg";
import Sign from './Sign';
import imdb from "./image/5977585.png";
import tomato from './image/82ace228929a9068f3eb189a3ea549a7.png';
import tv from './image/376a54ffd2dfb11ef1f3a8b513491895.png';
import chevronright from './image/chevronright_120129.png';
import menu from './image/menu-icon-style-vector.jpg';
import Footer from './Footer';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=93f2cc51175884f5031b4118682aa465";
const API_SEARCH='https://api.themoviedb.org/3/search/movie?query&api_key=93f2cc51175884f5031b4118682aa465';

function App() {
   const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState('');

useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
        console.log(data)
        setMovies(data.results);
    })
}, [])


const Search = async(e)=>{
  e.preventDefault();
  console.log("searching");
  try{
const url=`https://api.themoviedb.org/3/search/movie?api_key=93f2cc51175884f5031b4118682aa465&query=${query}`;
const res= await fetch(url);
const data= await res.json();
console.log(data);
setMovies(data.results);
  }
  catch(e){
   console.log(e);

  }
}

const ChangeHandler=(e)=>{
  setQuery(e.target.value);
}
 return (
  <>
 <header>
 
<Navbar bg='transparent' expand='lg' variant='dark'>
  <Container fluid>
<Navbar.Brand href='' style={{color:'black'}}><img src={tv} style={{width:'50px'}}/>&nbsp;&nbsp;MovieBox</Navbar.Brand>
<Form className='d-flex form1' style={{color:'white', width:'50%'}} onSubmit={Search}>
    <FormControl 
    style={{backgroundColor:'transparent'}}
    type='search'
     placeholder='what do you want to search?'
    className='me-2'
    aria-label='search'
    name='query'
    value={query} onChange={ChangeHandler}
    ></FormControl>
   <Button style={{backgroundColor: 'transparent', border: 'none'}}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" ><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></Button>
   </Form>

    <Button type='sumbit' variant='secondary' onClick={Sign} style={{backgroundColor:'transparent', border:'none', color:'black'}}>Sign in<img src={menu} style={{width:'30px', backgroundColor:'red'}}/></Button>
  </Container>
</Navbar>
<div className='head-text'>
<img src={img} style={{width:'100%'}}/>
<div className='center_text'>
<h3>John Wick 3: <br></br> Parabellum</h3>
<p></p>
<p><img src={imdb} style={{width:'30px'}}/>&nbsp;&nbsp;8.6 &nbsp;&nbsp;&nbsp;&nbsp;
<img src={tomato} style={{width:'20px'}}/>&nbsp;&nbsp;97%
</p>
<p>John Wick is on the run after killing a member of the international assassins&#39; guild, and with a $14 million
price tag on his head, he is the target of hit men and women everywhere.</p>
</div>
</div>
</header>
<div className='label'>
  <div><h2 className='.text-wrapper'>Featured Movies </h2></div>
  <div><button style={{color:'red', border:'none', backgroundColor:'transparent'}} type='submit'>See more<img src={chevronright} style={{width:'40px'}}/></button></div>
</div>
<div className='container'>
    <div className='grid'>
    {movies.slice(0,12).map((moviesReq)=>
    <MovieBox key={moviesReq.id} {...moviesReq}/>)}
  </div>
  </div>
  <p></p>
  <p></p>
  <div>
  <Footer/>
  </div>
  
  </>
  
 );
 }
export default App;
