import React from "react";
import "./Pokecard.css"

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'


const Pokecard = (props) => {


   let imgsrc = `${POKE_API}${props.pokemon.id}.png`

    return(
      
        <>
        <div className="pokecard">
            <h4>{props.pokemon.name}</h4>
            <img className="pitchure" src={imgsrc} />
            <div>
            <h3>EXP : {props.pokemon.base_experience}</h3>
            <h4>Type : {props.pokemon.type}</h4>
            </div>
        </div>
        
        
        </>
    )

}

export default Pokecard