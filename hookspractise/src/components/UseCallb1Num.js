import React from 'react'

const UseCallb1Num = ({user , kind_of_num,  num}) => {
    console.log(`${num} rendered`);
  return (
    <div>
        <h3>Hello {user} Your {kind_of_num} is {num} </h3>
    </div>
  )
}

export default React.memo(UseCallb1Num);