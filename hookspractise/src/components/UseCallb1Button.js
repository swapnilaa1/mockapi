import React from 'react'

const UseCallb1Button = (props) => {
    console.log(`for ${ props.children} handler handler rendererd.`)
  return (
    <div>
        <button onClick={props.handleClick}>Change</button>
    </div>
  )
}

export default React.memo(UseCallb1Button);