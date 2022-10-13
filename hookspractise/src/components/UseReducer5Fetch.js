import React ,  { useReducer , useEffect} from 'react'
import axios from 'axios';
const initialState={
isLoadig :true,
post:{},
error:''
};

const reducer=(state , action)=>{
switch(action.type){
case 'FETCH_SUCCESS' :
    return {
        post:action.payload,
        error:'hello',
        isLoadig:false
    }
        
   
case 'FETCH_ERROR'  :
    return {
        post:action.payload,
        error:'Something went wrong..',
        isLoadig:false
    }
default :
    return state;
}
};
const UseReducer5Fetch = () => {
let [ state , dispatch ]=useReducer(reducer , initialState);

useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/posts/2")
.then( 
    resolve=>{ dispatch({ type: 'FETCH_SUCCESS' , payload:resolve.data } )}
    )
.catch( 
    error =>{
        console.log("in error");
        dispatch({type : 'FETCH_ERROR'} );
    console.log(state.error)}
)

}, [])

    return (
    <div>
        { state.isLoadig? 'loading' : state.post.title}
        { state.error? state.error :null }
    </div>
  )
}

export default UseReducer5Fetch