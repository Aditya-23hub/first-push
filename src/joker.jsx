import { useState } from "react";
export default function JokerState (){
    let [Joke,setJoke]=useState({})
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
 let respose=await fetch(URL);
 let jsonResponse= await respose.json();
 console.log(jsonResponse);
 setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    }
   
    return(
        <div>
            <h3>Joker!</h3>
           <h3>{ Joke.setup}</h3>
           <h3>{ Joke.punchline}</h3>
<button onClick={getNewJoke}> click me!</button>
        </div>
    )
}