import React from 'react'

function Dash_Header(props) {
  return (
    <div className='bg-gray-800 text-white h-[10vh] w-full flex justify-around items-center font-semibold text-lg'>
<div>Wellcome {props.username}</div>
<div className='hidden md:block'>{props.email}</div>
    </div>
  )
}

export default Dash_Header