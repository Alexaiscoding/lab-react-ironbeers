import Header from '../components/Header'
import {useParams} from "react-router-dom"
import React, {useState, useEffect} from "react";
import axios from 'axios'

const Singlebeer = () => {
    const [oneBeer, setOneBeer] = useState([]);
    const params = useParams();

    useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        setOneBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, [params.id]);

  console.log(oneBeer);


 return (
    <>
<Header/>
<div> 
<img src="{oneBeer.image_url}" alt="" />
<h1>{oneBeer.name}</h1>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>{oneBeer.description}</p>
      <p>{oneBeer.contributed_by}</p>


</div>
</>
               )
}

export default Singlebeer; 