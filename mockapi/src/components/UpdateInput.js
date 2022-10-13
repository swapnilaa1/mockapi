import React, { useState } from "react";



const UpdateInput = ({submit , change , updateValue}) => {

let [localObj , setLocalObj]=useState({userId:23 , title:'hello' });

  

  return (
    <form className="form-group container opacity-75 shadow-lg p-3 m-2 bg-body rounded" onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">UserId</label>
        <input type="text" className="form-control" id="userId" name="userId"  onChange={change} value={updateValue.userId} />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label"> Title </label>
        <input type="text" className="form-control" id="title" name="title" onChange={change} value={updateValue.title} />
      </div>
      <div className="mb-3">
        <div className="form-check">
            <input className="form-check-input" type="radio" name="completed" id="completed" onChange={change} value='true' />
            <label className="form-check-label" htmlFor="true">True</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="completed" id="completed" onChange={change} value='false'/>
            <label className="form-check-label" htmlFor="completed">False</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UpdateInput;
