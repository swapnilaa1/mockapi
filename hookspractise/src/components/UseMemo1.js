import React, { useState , useMemo } from 'react'

const UseMemo1 = () => {
 let [count1, setCount1]= useState(0);
 let [count2, setCount2]=useState(0);

 let isEven=useMemo(() => 
 {
    let i=1;
    while(i<=1500000000)
    i++
    return count1%2===0
 }
 , [count1])
 
    return (
    <div>
        <button onClick={()=>setCount1(count1+1)}>Add{count1}</button>
        <br/>
        { isEven? 'even' : 'odd'  }
        <br/>
        <button onClick={()=>{setCount2(count2+1)}} >Dele{count2}</button>
    </div>
  )
}

export default UseMemo1