import React from "react";



const Input = ({submit , change , onCancel }) => {

  


  return (
    <form className="form-group container opacity-75 shadow-lg p-3 m-2 bg-body rounded" onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">UserId</label>
        <input type="text" className="form-control" id="userId" name="userId"  onChange={change} placeholder="Add new UserId"/>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label"> Title </label>
        <input type="text" className="form-control" id="title" name="title" onChange={change} placeholder="Add new UserId" />
      </div>
      <div className="mb-3">
      <div className="form-check">
            <input className="form-check-input" type="radio" name="completed" id="completed" onChange={change} value='true'/>
            <label className="form-check-label" htmlFor="completed">True</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="completed" id="completed" onChange={change} value='false' />
            <label className="form-check-label" htmlFor="completed">False</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button  className="btn btn-primary" onClick={onCancel} >cancel</button>

    </form>
  );
};

export default Input;
