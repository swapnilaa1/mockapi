import React, { useState } from 'react'
/*
here in this example also we have to use the spread operator as we used in object with useState..
as we seen in object example .. useState does not merge the object so we have to spread the object in setter function..

so here also setter function does not append the added new item to the list of original array element . 
so we have to first spread all previos element and then we will set or append the new array element in the array..

.. 
here we are going to create array of objects...
so each time a rondom no is getting added
*/


const Hook5_useState_with_array = () => {
 let [arr  , setArr ]=useState([]);
    
    const handleClick=()=>{
        setArr([ ...arr , 
            {
                id : arr.length,
                value : Math.floor(Math.random()*10)+1
            } ])
    };
    
    return (
    <div>
        <button onClick={()=>handleClick()}>Add</button>
        <ul>
            {
                arr.map( item => ( <li key={item.id}>{item.value}</li>))
            }
        </ul>

    </div>
  )
}

export default Hook5_useState_with_array