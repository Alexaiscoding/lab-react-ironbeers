import React from 'react'
import axios from 'axios'
import { NavLink } from "react-router-dom";

const Homepage = () => {


    return (
     
<nav>
<img src="../assets/beers.png" alt="allbeers"/>

        <NavLink to="/beers">All Beers </NavLink>
        <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        blanditiis minima explicabo reiciendis, iusto modi obcaecati quibusdam
        consequuntur molestiae expedita! Facere expedita architecto temporibus
        alias at dicta, earum iusto sapiente.
    </div>

    <img src="../assets/random-beer.png" alt="randombeer" />

        <NavLink to="/random-beer">Random Beer</NavLink>
        <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        blanditiis minima explicabo reiciendis, iusto modi obcaecati quibusdam
        consequuntur molestiae expedita! Facere expedita architecto temporibus
        alias at dicta, earum iusto sapiente.
    </div>

    <img src="../assets/new-beer.png" alt="newbeer" />

        <NavLink to="/new-beer"> New Beer</NavLink>
        <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        blanditiis minima explicabo reiciendis, iusto modi obcaecati quibusdam
        consequuntur molestiae expedita! Facere expedita architecto temporibus
        alias at dicta, earum iusto sapiente.
    </div>

</nav>



    ) 
    

}

export default Homepage; 