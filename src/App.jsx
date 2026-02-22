import { useState } from 'react'
import Lottery from './lottery.jsx'
import './App.css'
import Ticket from './Ticket.jsx'
import Form from './Form.jsx'
import CommentForm from './CommentForm.jsx'
import img from'./OIP.jpg';
import Comment from './comments.jsx'
import Counter from './counter.jsx'
import Joker from './joker.jsx'
function App() {
 let winCondition=(ticket)=>{
  // return ticket.every((num)=>num===tickdt[0]);
  return sum(ticket)===15;
 }

  return (
    <>

     {/* <img src={img} alt="..." height={'200px'} width={'300px'} /> */}
     {/* <CommentForm/> */}
     {/* <Comment/> */}
     {/* <Counter/> */}
     <Joker/>
    </>
  )
}

export default App
