import React, { Component } from 'react'
import { MyConetxt } from './ContextUse1';
import { MyConetxt2 } from './ContextUse1';
export default class ContextUseGrantChild extends Component {
  render() {
    return (
      <div>
        <MyConetxt.Consumer>
            {
                user=>{
                    return <MyConetxt2.Consumer>
                        {
                            city=>{ return <h2> Hello {user } i think you live in {city} </h2>}
                        }
                    </MyConetxt2.Consumer>
                }
                
            }
        </MyConetxt.Consumer>
      </div>
    )
  }
}
