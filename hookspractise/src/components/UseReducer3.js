
import React,{useReducer } from 'react'
const initialState=0;

const reducer = ( state , action)  =>{
switch(action){
    case 'Increment' :
        return  state +1 ;
    case 'Decrement' :
        return state -1 ;
    case 'Reset' :
        return initialState;
    default:
        return state;
}
}

const UseReducer3 = () => {
    let[count , dispatch]=useReducer(reducer , initialState);
    let[count2 , dispatch2]=useReducer(reducer , initialState);


  return (
    <div>
        {count}
        <button onClick={()=>dispatch( "Increment" )}>c1IncBY1</button>
        <button onClick={()=>dispatch( "Decrement" )}>c1DecBY1</button>
        <button onClick={()=>dispatch( "Reset"  )}>Reset</button>
        {count2}
        <button onClick={()=>dispatch2( "Increment" )}>c2IncBY1</button>
        <button onClick={()=>dispatch2( "Decrement" )}>c2DecBY1</button>
        <button onClick={()=>dispatch2( "Reset"  )}>Reset</button>
    </div>
  )
}

export default UseReducer3