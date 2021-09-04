import React from 'react';
import { useParams, Link } from 'react-router-dom';




const Overview = ({movie}) => {
    const {Id} = useParams();
    
    return (
        <div className='Overview'>
            <div >
                <img className='OverviewImg' src = {movie.find(show => show.id == Id).img} alt = 'Poster' />
            </div>
            <div className='OverviewInfo'>
                <h2>{(movie.find(show => show.id == Id)).title}</h2>
                <h5>{(movie.find(show => show.id == Id)).description}</h5>
                <span>{(movie.find(show=> show.id==Id)).trailer}</span>
            </div>   
            
        </div>
    )
}



export default Overview
