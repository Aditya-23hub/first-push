import { useState } from "react"

 export default function Form(){
//     let [fullName,setFullName]=useState("Aditya ");
//     let handleNameChange=(event)=>{
//         // console.log(event.target.value);
//         setFullName(event.target.value);    
//     }
let [formData,setFormData]=useState({
    fullName:"",
    username:"",
    Password:""

})
let handleNameChange=(event)=>{
    let fieldName=event.target.name;
    let newValue=event.target.value;
    console.log(newValue);
    setFormData((currentData)=>{
//    currentData[fieldName]=newValue;
   return{...currentData,[fieldName]:newValue}
    })

}
let handleSubmit =(event)=>{
    event.preventDefault();
    console.log(formData)
    setFormData({fullName:"",
    username:"",
    Password:""});
}
    return(
        <form onSubmit={handleSubmit}>
            <lable htmlFor="fullName">fullName</lable>
            <input placeholder="enter fullName" type=" text" value={formData.fullName} onChange={handleNameChange}id="fullName"
            name="fullName"></input>
           
            <br></br>
            <br></br>
            <lable htmlFor="username">username</lable>
            <input placeholder="enter username" type=" text" value={formData.username} onChange={handleNameChange}id="username"
            name="username"></input>
            <br></br>
            <br></br>
            <lable htmlFor="Password">Password</lable>
            <input placeholder="enter Password" type=" text" value={formData.Password} onChange={handleNameChange}id="Password"
            name="Password"></input>
            <button>Submit </button>
        </form>
    )
}