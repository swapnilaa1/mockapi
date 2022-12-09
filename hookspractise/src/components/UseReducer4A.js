import React, { useContext } from "react";
import { CountContext } from "./UseReducer4";

const UseReducer4A = () => {
  let countContext = useContext(CountContext);
  return (
    <div>
      {countContext.countState}
      <button onClick={() => countContext.countDispatch("Increment")}>
        c1IncBYA
      </button>
      <button onClick={() => countContext.countDispatch("Decrement")}>
        c1DecBYA
      </button>
      <button onClick={() => countContext.countDispatch("Reset")}>
        ResetA
      </button>
    </div>
  );
};

export default UseReducer4A;
