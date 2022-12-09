import React, { useContext } from "react";
import { UserContext, CityContext } from "./UseContextHook";
import UseContextHookGrandChild from "./UseContextHookGrandChild";

/*here we dont need to use render prop patterns ..
1.we have to import useContext and the contextApi ...
2.then as a useContext is also a hook then we will make call to useContext and as a value we will pass the creared context and
then this useContext will return as values that we provided in provider..
*/

const UseContextHookChild = () => {
  let user = useContext(UserContext);
  let city = useContext(CityContext);
  return (
    <div>
      <h3>
        Hello {user} your city is {city}
      </h3>
      <UseContextHookGrandChild />
    </div>
  );
};

export default UseContextHookChild;
