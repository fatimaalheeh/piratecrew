import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router"
function Form(){
    const [name, setName]= useState('');
    const [imgUrl, setImgUrl]= useState('');
    const [chests, setChests]= useState('');
    const [catchPhrase,setCatchPhrase]= useState('')
    const [crewPosition, setCrewPosition]= useState('Captain');
    const [errors, setErrors] = useState([]);
    const [hook, setHook]= useState(true);
    const [pegLeg, setPegLeg]= useState(true);
    const [eyePatch, setEyePatch]= useState(true);

    function goHome(e){
        navigate('/pirates');
    }
    function addPirate(e){
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate/new',{
            name,
            imgUrl,
            chests,
            catchPhrase,
            crewPosition,
            hook,
            eyePatch,
            pegLeg
        })
        .then( response => {
            console.log(response);
            navigate('/pirates');
        })
        .catch(error => {
            const errorResponse = error.response.data.errors;
            const errorArr =[];
            for (const key in errorResponse){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
        
    }
    return(
        <div style={{width:"50%",backgroundColor:"#FF9900", margin:"0 auto",padding:"0 0px 20px 0px"}}>
            <h1 style={{width:"100%",backgroundColor:"#783F04",color:"White",height:"50px",lineHeight:"38px"}}>Add a Pirate<button style={{backgroundColor:"#085394",color:"white",lineHeight:"20px",marginLeft:10}} onClick={goHome}>Crew Board</button></h1>
            <form onSubmit ={addPirate}  style={{display:"flex",justifyContent:"space-evenly"}}> 
               <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
               <label > Pirate Name</label>
                <input type="text" value ={name} onChange={(e)=>setName(e.target.value)}/>
                <label> Image</label>
                <input type="text" value ={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
                <label> Number of Treasure </label>
                <input type="text" value ={chests} onChange={(e)=>setChests(e.target.value)}/>
                <label> Catch Phrase</label>
                <input type="text" value ={catchPhrase} onChange={(e)=>setCatchPhrase(e.target.value)}/>
               </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                <label> Crew Position</label>
                <select value ={crewPosition} onChange={(e)=>setCrewPosition(e.target.value)}>
                <option value="Captain"> Captain </option>
                <option value="First Mate"> First Mate </option>
                <option value="Quarter Master"> Quarter Master </option>
                <option value="Boatswain"> BoatSwain </option>
                <option value="Powder Monkey"> Powder Monkey </option>
                </select>
                <div><input type="checkbox" onChange={(e)=>setHook(e.target.checked)} checked = {hook}/><label> Hook</label></div>
                <div><input type="checkbox" onChange={(e)=>setPegLeg(e.target.checked)}checked = {pegLeg}/><label> Eye Patch</label></div>
                <div><input type="checkbox" onChange={(e)=>setEyePatch(e.target.checked)}checked = {eyePatch}/><label> Peg Leg</label></div>
                <button> Submit</button>
                </div>
                
                
            </form>
                
            {errors.map((error,idx)=>
            <p key={idx} style={{color:"red"}}> {error}</p>
            )}
        </div>
    )
}
export default Form;