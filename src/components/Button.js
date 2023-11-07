

import React from 'react'

const Button = (props) => {
  return (
    <div  style={{background:props.bg}}
     className=' text-white font-bold py-2 px-4 rounded cursor-pointer'
   >
        {props.data}</div>
  )
}

export default Button;