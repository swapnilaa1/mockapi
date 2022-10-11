import React from "react";


const Show = ({ value1, onDel, onAdd, onPatch ,onPut}) => {
 

  return (
    <div >
       <div className=" opacity-75 shadow-lg p-3 m-2 bg-body rounded"  style={{ backgroundColor:"blue" }}>
      <button className="btn btn-success" onClick={() => onAdd()}>
        ADD
      </button>
      <table className="table ">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th scope="col">ID</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {value1.map((eachRow) => (
            <tr className="shadow p-3 mb-5 bg-body rounded" key={eachRow.id}>
              <td> <button className="btn btn-danger"  style={{padding:3}} onClick={() => onDel(eachRow)}>Delete</button></td>
              <td><button className="btn btn-secondary" style={{padding:3}}  onClick={() => onPatch(eachRow)}>Update</button></td>
              
              <td>{eachRow.id}</td>
              <td>{eachRow.userId}</td>
              <td>{eachRow.title}</td>
              <td>{eachRow.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
};

export default Show;
