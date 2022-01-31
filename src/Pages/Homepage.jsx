import React from "react";
import {NavLink , Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

const Homepage = () => {
  return (
    <div>
      
    
        <div>
        <img src={beers} alt="" /> 
        <Link to="/beers">  <h1> All Beers </h1></Link>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          blanditiis minima explicabo reiciendis, iusto modi obcaecati quibusdam
          consequuntur molestiae expedita! Facere expedita architecto temporibus
          alias at dicta, earum iusto sapiente.
        </div>


       
        <div>
        <img src={randombeer} alt="randombeer" />
        <NavLink to="/random-beer"> <h1> Random Beer</h1> </NavLink>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          blanditiis minima explicabo reiciendis, iusto modi obcaecati quibusdam
          consequuntur molestiae expedita! Facere expedita architecto temporibus
          alias at dicta, earum iusto sapiente.
        </div>

      
        <div>
        <img src={newBeer} alt="newbeer" />
<NavLink to="/new-beer"> <h1> New Beer  </h1> </NavLink>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          blanditiis minima explicabo reiciendis, iusto modi obcaecati quibusdam
          consequuntur molestiae expedita! Facere expedita architecto temporibus
          alias at dicta, earum iusto sapiente.
        </div>
      
    </div>
  );
};

export default Homepage;
