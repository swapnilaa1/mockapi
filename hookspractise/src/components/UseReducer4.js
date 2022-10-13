import React, { useReducer } from 'react'
import UseReducer4A from './UseReducer4A'
import UseReducer4B from './UseReducer4B'
import UseReducer4C from './UseReducer4C'

export const CountContext=React.createContext();
let initialState=0;
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
    
const UseReducer4 = () => {
    let [count , dispatch]=useReducer( reducer , initialState);
  return (
    <div>

        <CountContext.Provider value={{  countState:count , countDispatch:dispatch  }}>
        <UseReducer4A/>
        <UseReducer4B/>
        <UseReducer4C/>
        </CountContext.Provider>
        
    </div>
  )
}

export default UseReducer4