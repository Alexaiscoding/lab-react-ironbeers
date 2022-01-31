import Header from '../components/Header'
import axios from "axios";
import React, { useState, useEffect } from "react";


const Randombeer = () => {
    const [oneBeer, setOneBeer] = useState([]);

useEffect(() => {
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((response) => {
      setOneBeer(response.data);
    })
    .catch((e) => console.log(e));
}, []);

console.log(oneBeer);

return (
<div>   

<Header/>
<img src={oneBeer.image_url} alt=""/>
      <h1>{oneBeer.name}</h1>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>{oneBeer.description}</p>
      <p>{oneBeer.contributed_by}</p>

</div>

 )
}

export default Randombeer; 