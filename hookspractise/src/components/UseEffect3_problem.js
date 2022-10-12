/* 
here we will see when to add dependencies..
here in this code.... in useEffect we are calling setInterval in useEffect ..
then in setInterval we are calling incCount function which is used to increase the count  
but if we donot provide the count dependecy then count will not increate but 1st way of setCount ..
as we are telling by providig empty arry that only setInterval will be called..

but in empty array we have to tell that which state or prop to watch ... 
so we have to mention the count as dependencies...

then if we use callback in setCount then we do not have to mention the count in dependencies..
*/



import React, { useState  , useEffect} from 'react'

const UseEffect3_problem = () => {
    let [count , setCount]=useState(0);
    let [someCount , setSomeCount]=useState(1);
    let incCount=()=>{
        setCount(count+1);
        setCount(prevState=>prevState+1);
    };

    let someCount1=()=>{
        console.log(someCount);
    }
    useEffect(() => {
      
        someCount1();
       const Interval= setInterval(incCount , 1000);
    
      return () => {
            clearInterval(Interval);
      }
    }, [someCount])
    
  
    return (
    <div>
            {count}
    </div>
  )
}

export default UseEffect3_problem