import React, { useState } from 'react'
//let [count  , setCount]=useState(0); 
/* useState() this is one react hook and hooks are functions so call them
inside our function...so
useState(0) ..... this is a call..
..
..
so this useState have 3 things in it..
1. 0 is set as initial value.. which useState accepts and returns count and setCount 
2. count & 3. setCount  these are the array elements which we get when we 
destructure the array..
so..
let [count  , setCount ] these 2 are the destructured array elements
count is a current value and setCount recieves a value which will get set 
in count..

here .. in handleClick function we are incresing count 2 by 5using loop but .. it is not getting updated by
instead it is increasing by 1 ..
so..   setCount2(count2+1);
this impletation is first.. which updates the value once 
and there is another impletation 
setCount2(prevState=> prevState+1);

means using callback arraw fucntion and previous State value we increase the state by 1 each time in a loop 
and this is safe..
*/
const Func_compoenet = () => {
  let [count  , setCount]=useState(0);
  let [count2 , setCount2]=useState(1);

  let handleClick=()=>{

    for(let a=0;a<5;a++){
        //setCount2(count2+1);
      setCount2(prevState=> prevState+1);
    }
    };
  
  
    return (
    <div>
        this is count {count}
        <button onClick={()=>setCount( prevState=>prevState+1)} >increment</button>
        this is count2  {count2}
        <button onClick={handleClick}>increment count2 by 5</button>
    </div>
  )
}

export default Func_compoenet