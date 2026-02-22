
import { useState ,useEffect} from "react";
export default function Counter(){
    let[countx,setCountx]=useState(0);
    let[county,setCounty]=useState(0);
    let incCountx=()=>{
        setCountx((currCount)=>currCount+1);
    }
    let incCounty=()=>{
        setCounty((currCount)=>currCount+1);
    }
    useEffect(function printSomhing(){
        console.log(" this is a side effect ")
    },[countx])
    return(
        <div>
            <h3>COunt={countx}</h3>
            <button onClick={incCountx}> click me</button>
            <h3>COunt={county}</h3>
            <button onClick={incCounty}> click me</button>
        </div>
    )
}