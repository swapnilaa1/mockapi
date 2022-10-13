import React,{useState , useEffect} from 'react';
import axios from 'axios';

const UseEffect4_Fetch_data = () => {
  let [ posts , setPosts ] =useState([]);
  let[post ,setPost]=useState({});
  let [ id , setId ]=useState(1);
  let [ buttonValue , setButtonValue ]=useState(1);
   
  let fetchit=async()=>{ let response =await axios.get("https://jsonplaceholder.typicode.com/posts"); 
                        console.log("respo" ,response);
                        setPosts(response.data) }

  let fetchitSingle=async()=>{ let response =await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
                        console.log("respo" ,response);
                        setPost(response.data) }

    let fetchByButton=async()=>{ let response =await axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonValue}`); 
    console.log("respo" ,response);
    setPost(response.data) }
    let handleButton=()=>
    {
        setButtonValue(id);
    };

    useEffect(()=>{
   //fetchitSingle();
    // fetchit();
    fetchByButton();
   // console.log("arr",post);
  } , [buttonValue]);
    return (
    <div>
        <input type='text'  value={id} onChange={(e)=>setId(e.target.value)}/>
        <button onClick={ ()=>handleButton() } >Add</button>
       <h3>{ post.title }</h3>
       {/*
        <ul>
            {
                post.map( spost=>(<li key={spost.id}> { spost.title}</li>) )
            }
        </ul>
       */}
    </div>
  )
}

export default UseEffect4_Fetch_data