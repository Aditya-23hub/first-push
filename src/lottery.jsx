import { useState } from "react";

import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=4,winCondition}){
    let[ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery game </h1>
            <Ticket ticket={ticket}/>
            <h3>{isWinning && "Congratulation you have won the  lottery "}</h3>
            <button onClick={buyTicket}>generate new ticket </button>
        </div>
    )
}