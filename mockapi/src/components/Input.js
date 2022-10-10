import React from "react";

const Input = () => {
  return (
    <form className="form-group container opacity-75 shadow-lg p-3 m-2 bg-body rounded">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"> Email address </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"> Email address </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"> Email address </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Input;
