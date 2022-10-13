/* here we will learn about useReducer hook..
this hook is used for state management...
although we know useState is also used for state managemanet...

but what is useReducer?
useReducer is a function that recieves two things....
1. Reducer function..
2. and initialState..

and useReducer returns two things...
1. a value to display
2. a dispatch function...

1. reducer function 
reducer function coverts the current state to new State...
and it does this coversion by using different function .. and this functions are action.... 
and dispatch function specifies the action by which we change the cuurent state to new state..
and the action is in reducer function..

: this recieves two things ...
1. current state..
2. and actiion

*/


import React,{useReducer } from 'react'
const initialState=0;
const reducer = ( state , action)  =>{
switch(action){
    case 'Increment' :
        return state+1;
    case 'Decrement' :
        return state-1;
    case 'Reset' :
        return initialState;
    default:
        return state;
}
}
const UseReducer = () => {
    let[count , dispatch]=useReducer(reducer , initialState);
    /*  */
  return (
    <div>
        {count}
        <button onClick={()=>dispatch('Increment')}>Click</button>
        <button onClick={()=>dispatch('Decrement')}>Click</button>
        <button onClick={()=>dispatch('Reset')}>Click</button>

    </div>
  )
}

export default UseReducer