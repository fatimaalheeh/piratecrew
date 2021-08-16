import React , { useEffect, useState } from 'react';
import axios from 'axios';
function Test (){
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return(
        <h1>Hello and:{message}</h1>
    )
}
export default Test;