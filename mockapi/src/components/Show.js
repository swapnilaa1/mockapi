import React from "react";
//import '../node_modules/bootstrap/dist/css/bootstrap.css'

const Show = ({ value1, onDel, onAdd, onPatch }) => {
  console.log("in child", value1);
  console.log(typeof fetch);

  return (
    <div>
      <button className="btn btn-success" onClick={() => onAdd()}>
        ADD
      </button>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {value1.map((eachRow) => (
            <tr key={eachRow.id}>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDel(eachRow)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => onPatch(eachRow)}
                >
                  Update InIt
                </button>
              </td>
              <td>{eachRow.id}</td>
              <td>{eachRow.userId}</td>
              <td>{eachRow.title}</td>
              <td>{eachRow.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
