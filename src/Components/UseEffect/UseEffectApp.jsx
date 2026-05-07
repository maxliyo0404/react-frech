import "./UseEffectApp.css";
import React, { useState } from 'react'

function UseEffectApp() {

    const [data, setData] = useState([]);

    const useEffekt(data, setData)
  return (
   <div className="cards">
     {data.map(el =>

     )}
   </div>
  )
}

export default UseEffectApp