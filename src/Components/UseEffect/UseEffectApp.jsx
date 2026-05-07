import "./UseEffectApp.css";
import React, { useState } from 'react'

function UseEffectApp() {

    const [data, setData] = useState([]);
  return (
   <div className="cards">
     {data.map(el =>
        
     )}
   </div>
  )
}

export default UseEffectApp