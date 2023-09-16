import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import imdb from './image/5977585.png';
import tomato from './image/82ace228929a9068f3eb189a3ea549a7.png'

const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox =({title, poster_path, vote_average, release_date, runtime, overview, genre, vote_count}) => {

    const [show, setshow]=useState(false);

    const handleshow=()=>setshow(true);
    const handleClose=()=>setshow(false);
    return(
        <div className="card text-center bg-light mb-3"  data-testid='movie-card'>
            <div className="card-body" data-testid='movie-card' style={{width:'100%', border:'none'}}>
              <img className="card-img-top" data-testid='movie-poster' src={API_IMG+poster_path} alt="movie-poster"/>
              <div className="card-body">
                <p data-testid='movie-title'>{title}</p>
                <p><img src={imdb} style={{width:'30px'}} alt="imdb"/>&nbsp;&nbsp;&nbsp;
                {vote_average} 
                &nbsp;&nbsp;&nbsp;<img src={tomato} style={{width:'20px'}} alt="tomato"/>&nbsp;&nbsp;&nbsp;80%
                </p>
                     <p data-testid='movie-release-data'>{release_date}</p>
                  <button type="button" className="btn btn-transparent" onClick={handleshow}>view more</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img className="card-img-top" style={{width:'14rem'}} src={API_IMG+poster_path} data-testid='movie-poster' alt="poster"/>
                    <h3 data-testid='movie-title'>{title}</h3>
                    <h4><img src={imdb} style={{width:'30px'}} alt="imdb"/>: {vote_average}</h4>
                    <h5  data-testid='movie-release-data'>Release Date: {release_date}</h5>
                    
                    <br></br>
                    <h6>Overview</h6>
                    <p  data-testid='movie-overview'>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button varient="secondary" onClick={handleClose}>close</Button>
                    </Modal.Footer>
                  </Modal>
              </div>
            </div>
        
        </div>
    )
}
export default MovieBox;