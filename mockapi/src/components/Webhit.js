import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";
import Input from "./Input";
let Web_Url = "http://localhost:3334/todo";
const Webhit = () => {
  let addNew = {
    userId: 20,
    title: "Go to swim",
    completed: false,
  };
  let patchOg = {
    title: "Ride Bycycle",
  };
  let putOg ={
    userId: 21,
    title: "party",
    completed: true,
 
  };
  let [fieldState , setFieldState]=useState({userId:'',title:'',completed:''})
  let [Data, setData] = useState([]);

  let hitUrl = async () => {
    let { data } = await axios.get(Web_Url);
    setData(data);
  };

  useEffect(() => {
    hitUrl();
  }, []);

  let handleAdd = async () => {
    const response = await axios.post(Web_Url, addNew);
    hitUrl();
  };

  let handlePatch = async (r) => {
    const { data } = await axios.patch(Web_Url + "/" + r.id, patchOg);
    hitUrl();
  };

  let handlePut = async (r) => {
    const { data } = await axios.patch(Web_Url + "/" + r.id, putOg);
    hitUrl();
    
  };

  let handleDelete =async (c) => {
    let {data} = await axios.delete( Web_Url+'/'+c.id);
    hitUrl();
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);

  };

  let handleChange=(e)=>{
      console.log(e.currentTarget.value);
  };
  
  return (
    <div className="row" >
        <div className="col-4">
        <Input submit={handleSubmit} change={handleChange}/>
        </div>
        <div  className="col-8"> 
          <Show
          value1={Data}
          onDel={(row) => handleDelete(row)}
          onAdd={() => handleAdd()}
          onPatch={(row) => handlePatch(row)}
          onPut={(row)=> handlePut(row)}
        />
      
        </div>
      </div>
  );
};

export default Webhit;
/*
<Show
        value1={Data}
        onDel={(row) => handleDelete(row)}
        onAdd={() => handleAdd()}
        onPatch={(row) => handlePatch(row)}
        onPut={(row)=> handlePut(row)}
      />
    
*/
