/* 
this is the example of nested context ..
here we create more than one context...
in context we pass values .. so if we create and pass more than one values in context.
we have to make use of render props pattern ...
and in consuming also we have to create nesting ...

*/


import React, { Component } from 'react'
import ContextUse1child from './ContextUse1child';

export const MyConetxt=React.createContext();
export const MyConetxt2=React.createContext();
export default class ContextUse1 extends Component {
  render() {
    return (
      <div>
        <MyConetxt.Provider value='vishwas'>
            <MyConetxt2.Provider value='USA'>
                    <ContextUse1child/>
            </MyConetxt2.Provider>
        </MyConetxt.Provider>
      </div>
    )
  }
}
