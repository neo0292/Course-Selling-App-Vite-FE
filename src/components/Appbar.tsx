import React from 'react'

const Appbar = () => {
  return (
    <>
    <div className="flex justify-between place-items-center pl-5 pr-5 bg-slate-500 h-16 shadow-md">
      <div className='font-mono text-3xl font-bold'> CORSERA</div>
      <div className=' flex-col m-'>
        <button className='m-5 px-2 border-solid border-2 border-white-900  bg-blue-500 rounded-lg text-2xl'>Signup</button>
          <button className='m-5 px-2 border-solid border-2 border-white-900 bg-blue-500 rounded-lg text-2xl'>Login</button>
      </div>

  
</div></>
  )
}

export default Appbar