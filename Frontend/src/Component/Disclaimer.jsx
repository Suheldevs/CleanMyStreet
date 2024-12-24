import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

function Disclaimer() {
    const [className,setClassName] = useState('block')
   const  handleCross = ()=>{
setClassName('hidden');
   }
  return (
    <div className={`${className} bg-yellow-400 flex justify-between px-6 items-center py-1 text-sm `}>
        <div>
        This site is for reporting garbage problems Only in the <span className='font-bold'>Lucknow</span> yet !
        </div>
        <div className='font-extrabold text-lg hover:cursor-pointer' onClick={handleCross}>

        <RxCross2/>
        </div>
    </div>
  )
}

export default Disclaimer