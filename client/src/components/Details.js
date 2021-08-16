import React, {useEffect, useState}from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router"

function Details(props){
    function goHome(e){
        navigate('/pirates');
    }
    const [pirate,setPirate] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getPirate/' +props.id)
        .then(response => setPirate(response.data))
        .catch(error => console.log(error))
    },[])

    return(
        <div style={{width:"50%",backgroundColor:"#FF9900", margin:"0 auto",padding:"0 0px 20px 0px"}}>
            <h1 style={{width:"100%",backgroundColor:"#783F04",color:"White",height:"50px",lineHeight:"38px"}}>{pirate.name} <button style={{backgroundColor:"#085394",color:"white",lineHeight:"20px",marginLeft:10}} onClick={goHome}>Crew Board</button></h1>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div style={{width:"40%", margin:2,padding:2}}>
                 <img style={{border:"3px solid black",width:"200px",backgroundColor:"#FF9900"}} src={pirate.imgUrl} alt={pirate.name}/>
                <h1>" {pirate.catchPhrase} "</h1>
            </div>
           <div style={{border:"3px solid black",width:"50%", backgroundColor:"white",margin:2,padding:2}}>
                <h2>About:</h2>
                <p> Position is {pirate.crewPosition}</p>
                <p> chests is {pirate.chests}</p>
                <p> Has Hook:{pirate.hook? "yes": "no"}</p>
                <p> Has Eye Patch:{pirate.eyePatch? "yes": "no"} </p>
                <p> Has Peg Leg: {pirate.pegLeg ?"yes": "no"}</p>
           </div>
            </div>

        </div>
    )
}
export default Details;