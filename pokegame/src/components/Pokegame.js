import React from "react"
import Pokedex from "./Pokedex"

const Pokegame = (props) => {


    // const time = setTimeout(() => {
    //     console.log("hellooS")
    // }, 3000);


    let hand1 = []
    let hand2 = [...props.pokemon] 
    
    for(var i=0 ; i<hand2.length ; i++)
    {
        let random = Math.floor(Math.random() * hand2.length)
        let poke = hand2.splice(random,1)[0];
        console.log(poke)
        hand1.push(poke);
        
   
    }

    let hand1sum = 0;
    let hand2sum = 0;
    
    for(var i=0 ; i<hand1.length ; i++)
    {
        hand1sum += hand1[i].base_experience;
    }

    for(var i=0 ; i<hand2.length ; i++)
    {
        hand2sum += hand2[i].base_experience;
    }
   
    let win = true
    if(hand1sum>hand2sum){
        win = true
    }
    if(hand2sum>hand1sum){
        win = false
    }
    
    
    return(
    <>
    {win ? <h4>winner</h4> : <h4>Looser</h4>}
     <Pokedex pokemon={hand1} />

    {win ? <h4>Looser</h4> : <h4>winner</h4>}
     <Pokedex pokemon={hand2} />

    
    </>
    )
}

export default Pokegame