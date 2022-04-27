import React from "react";
import App from "../App";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

const Pokedex = (props) => {




    return(<>
    <div className="pokedex">
     {
         props.pokemon.map((e) => 
             <Pokecard  pokemon={e} />
         )
     }
    </div>
    </>)
}

export default Pokedex