/*  here we are going to make use of useContextHookk for  using create context... 
by using hook there is only one change that is consuming code is going to change...
otherwise creating context and making provider is going to be the same..

see the consumer code  UseContextHookGrandChild in this component..
*/

import React from "react";
import UseContextHookChild from "./UseContextHookChild";

export const UserContext = React.createContext();
export const CityContext = React.createContext();

const UseContextHook = () => {
  return (
    <div>
      <UserContext.Provider value={"swapnil"}>
        <CityContext.Provider value={"thane"}>
          <UseContextHookChild />
        </CityContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextHook;
