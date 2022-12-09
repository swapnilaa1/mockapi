import React, { useContext } from "react";
import { CountContext } from "./UseReducer4";

const UseReducer4C = () => {
  let countContext = useContext(CountContext);
  return (
    <div>
      {countContext.countState}
      <button onClick={() => countContext.countDispatch("Increment")}>
        c1IncBYC
      </button>
      <button onClick={() => countContext.countDispatch("Decrement")}>
        c1DecBYC
      </button>
      <button onClick={() => countContext.countDispatch("Reset")}>
        ResetC
      </button>
    </div>
  );
};

export default UseReducer4C;
