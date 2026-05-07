import "./UseEffectApp.css";
import React, { useState } from 'react'

const Cards = ()=> {

    const [data, setData] = useState([]);

    const useEffekt(() => {
        fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
        .then(data => data.json())
        .then(data =>{
             setData(data);
        })
    },[]);
  return (
   <div className="cards">
     {data.map((el) =>{
        
     }

     )}
   </div>
  )
}

export default UseEffectApp