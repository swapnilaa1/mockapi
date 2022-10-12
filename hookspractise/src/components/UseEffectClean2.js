import React, {useState } from 'react'
import UseEffect from './UseEffect';

const UseEffectClean2 = () => {
  let [isClick , setIsClick]=useState(true);
  
    return (
    <div>
        <button onClick={()=>setIsClick(!isClick)}>Click</button>
        { isClick &&<UseEffect/> }
    </div>
  )
}

export default UseEffectClean2