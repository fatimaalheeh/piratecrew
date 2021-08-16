import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
function Dashboard (){
    const [pirates, setPirates] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPirates')
        .then(response =>setPirates(response.data))
    },[])
    function addPirate(){
        navigate("/pirate/new")
    }
    function viewPirate(pirateId){
        navigate('/pirate/' +pirateId)
    }
    function deletePirate(pirateId){
        axios.delete('http://localhost:8000/api/deletePirate/' +pirateId)
        .then(res => {
            console.log(res)
            setPirates(pirates.filter(pirate =>pirate._id != pirateId))
            navigate('/pirates');
        })
    }
    return (
        <div style={{width:"50%",backgroundColor:"#FF9900", margin:"0 auto",padding:"0 0px 20px 0px"}}>
        <h1 style={{width:"100%",backgroundColor:"#783F04",color:"White",height:"50px",lineHeight:"38px"}}> Pirate Crew <button style={{backgroundColor:"#085394",color:"white",lineHeight:"20px"}} onClick={()=> {addPirate()}} > Add a pirate </button></h1>
        
        {pirates.map((pirate, index)=>
        <p style={{border:"3px solid black",width:"auto",backgroundColor:"white",margin:"0 auto",display:"flex",justifyContent:"space-evenly",margin:20,padding:20}} key ={index}>
            <img style={{border:"3px solid black",width:"100px",backgroundColor:"#FF9900"}} src= {pirate.imgUrl} alt={pirate.name}/>
            <div style={{width:"80%",display:"flex",flexDirection:"Column",}}>
            <h3>{pirate.name}</h3>
            <div style={{display:"flex",justifyContent:"center"}}>
            <button onClick={()=> {viewPirate(pirate._id)}} style={{backgroundColor:"#085394",color:"white",lineHeight:"20px"}} > View Pirate</button>
            <span style={{width:"20px"}}></span>
            <button onClick={()=> {deletePirate(pirate._id)}} style={{backgroundColor:"#CF2A27",color:"white",lineHeight:"20px"}} > Walk the Plank</button> 
            </div>
            </div>
        </p>
        )}
        </div>
    )
}
export default Dashboard;
