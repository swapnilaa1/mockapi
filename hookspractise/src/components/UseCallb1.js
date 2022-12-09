import React, { useState , useCallback } from 'react'
import UseCallb1Button from './UseCallb1Button';
import UseCallb1Num from './UseCallb1Num';

const UseCallb1 = () => {
  let [roll , setRoll]=useState(2);
  let [userId , setUserId]=useState(216);

  const changeRoll= useCallback(  ()=>{
    setRoll(roll+1);

  },[roll]);
  const chanegUserId=useCallback(()=>{
    setUserId(userId+1);
  },[userId]);
    return (
    <div>
        <UseCallb1Num  user='Niel' kind_of_num='roll number' num={roll}/>
        <UseCallb1Button handleClick={changeRoll} num={roll}/>
        <UseCallb1Num  user='Niel' kind_of_num='userId' num={userId}/>
        <UseCallb1Button handleClick={chanegUserId} num={userId}/>
        
    </div>
  )
}

export default UseCallb1