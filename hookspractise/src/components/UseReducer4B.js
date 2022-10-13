import React, { useContext } from 'react';
import { CountContext } from './UseReducer4';




const UseReducer4A = () => {
    let countContext=useContext(CountContext);
    return (
    <div> 
        {countContext.countState }
        <button onClick={()=>countContext.countDispatch( "Increment" )}>c1IncBYB</button>
        <button onClick={()=>countContext.countDispatch( "Decrement" )}>c1DecBYB</button>
        <button onClick={()=>countContext.countDispatch( "Reset"  )}>ResetB</button>
    </div>
  )
}

export default UseReducer4A