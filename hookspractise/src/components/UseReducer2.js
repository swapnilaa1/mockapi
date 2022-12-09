import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducer2 = () => {
  let [count, dispatch] = useReducer(reducer, initialState);
  /*  */
  return (
    <div>
      {count.firstCounter}
      {count.secondCounter}
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        IncBY1
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        DecBY1
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        IncBY5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        DecBY5
      </button>
      <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
        2IncBY1
      </button>
      <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
        2DecBY1
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Click</button>
    </div>
  );
};

export default UseReducer2;
