import{Link} from 'react-router-dom'
import Header from '../components/Header'
import React, { useState, useEffect } from "react";
import axios from "axios";


const Beerslist = ({beer}) => {
    const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

 return (
<div>  
    <Header/>

    <div>   
{beers.map((beer) => { return (
    
<div> 
    <img src= {beer.image_url} alt="" />
    <Link to={beer._id} beers={beers}> 
    <p>{beer.name}</p>
    </Link>
    <p>{beer.tagline}</p>
    <p>Created by:{beer.contributed_by}</p>
    </div>
    
)})}</div> </div>
)
}


export default Beerslist; 