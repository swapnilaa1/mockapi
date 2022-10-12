/*
here in this code useEffect will run once... and at start the logmouse function will run so 
continously the x and y coordinates will get updated on mouse move always.

but if we do not mention the  dependencies then the mouse event will continously update the x and y co-ordinates..
as the useEffect code will run always .. 
but if we want that this code should run once then we will write array dependencies empty..


for clean up code see UseEffectClean2 ...
here..
 
we have mounted this component in UseEffectClean2 and we are mounting and unmountig our this UseEffect 
component by clicking the button provided there .. so when we unmount this component we see that as we move the mouse..
even after unmounting the x and y co-ordinate gets updated..
so we want that this should not happen... 
so we will return a function that function will run when component will unmount..so we can write a clean up code 
here...that will clean x and y co-oedinates..
*/
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  let [count , setCount]=useState(0);
  let [count2, setCount2]=useState(5);
  
    let logMouse=(e)=>{
        console.log("mouse Event Called");
            setCount(e.clientX);
            setCount2(e.clientY);
        };
  useEffect( ()=>{ 
    console.log("useEffect Called");
    window.addEventListener("mousemove" ,logMouse )

    return ()=>{
        console.log("unmounted ");
        window.removeEventListener("mousemove" ,logMouse );
    }
} ,[]);
    return (
    <div>
       <h3> this is count1{count}: this is count2 {count2}</h3>     
    
        <button onClick={()=>setCount(count+1)} >Click</button>
    </div>
  )
}

export default UseEffect


