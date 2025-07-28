import React from 'react'
import { IoSend } from "react-icons/io5";

function Typebar() {
  return (
    <>
    <div>
    <div className="flex space-x-2 m-2 h-[8vh]">
        <input type="text" placeholder="Type here" className="input w-full" />
        <button className='text-3xl'>
            <IoSend />
        </button>
    </div>
    </div>
    </>
  )
}

export default Typebar