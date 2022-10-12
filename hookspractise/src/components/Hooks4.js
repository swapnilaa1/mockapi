/*
here we will see useState hook with object..

<div>
    <input type='text' onChange={(e)=>setCredentials({  username:e.target.value  })}/>        
    <input type='text' onChange={(e)=>setCredentials({  password:e.target.value  })}/>        
    <h3>{JSON.stringify(credentials)}</h3>
</div>


if we try to update the state value by using above code and if we render the state at the same time then we can see that the 
when we update one field then second string gets removed and it does nt render that removed value..
means setter function here is not binding the state ..
so we have to spread other keys in the object using the state name 

<div>
    <input type='text' onChange={(e)=>setCredentials({ ...credentials ,   username:e.target.value  })}/>        
    <input type='text' onChange={(e)=>setCredentials({ ...credentials ,  password:e.target.value  })}/>        
    <h3>{JSON.stringify(credentials)}</h3>
</div>

...credentials so by using spread we can achieve the binding of object .. as it makes the copy of object there 
*/
import React, { useState } from 'react'

const Hooks4 = () => {
let [ credentials , setCredentials]=useState({
    username : '',
    password : ''
});

    return (
    <div>
    <input type='text' onChange={(e)=>setCredentials({ ...credentials ,   username:e.target.value  })}/>        
    <input type='text' onChange={(e)=>setCredentials({ ...credentials ,  password:e.target.value  })}/>        
    <h3>{JSON.stringify(credentials)}</h3>
    </div>
  )
}

export default Hooks4