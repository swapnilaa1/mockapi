import React from "react";

const Input = ({submit , change}) => {
  return (
    <form className="form-group container opacity-75 shadow-lg p-3 m-2 bg-body rounded" onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">UserId</label>
        <input type="text" className="form-control" id="userId" name="userId" onChange={change}/>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label"> Title </label>
        <input type="text" className="form-control" id="title" name="title" onChange={change}/>
      </div>
      <div className="mb-3">
        <label htmlFor="completed" className="form-label"> Completed  </label>
        <input type="text" className="form-control" id="completed" name="completed" onChange={change}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Input;
