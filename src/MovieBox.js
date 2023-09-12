import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap';

const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox =({title, poster_path, vote_average, release_date, runtime, overview}) => {

    const [show, setshow]=useState(false);

    const handleshow=()=>setshow(true);
    const handleClose=()=>setshow(false);
    return(
        <div className="card text-center bg-light mb-3">
            <div className="card-body">
              <img className="card-img-top" style={{width:'100%'}} src={API_IMG+poster_path}/>
              <div className="card-body">
                  <button type="button" className="btn btn-dark" onClick={handleshow}>view more</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img className="card-img-top" src={API_IMG+poster_path}/>
                    <h3>{title}</h3>
                    <h4>ImDb: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br></br>
                    <h6>Overview</h6>
                    <p>{overview}</p>
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