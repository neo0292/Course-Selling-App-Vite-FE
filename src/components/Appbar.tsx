import React from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/user'

import { useNavigate } from 'react-router-dom'

const Appbarnew = () => {
const [email, setEmail] = useRecoilState(userState);
const navigate = useNavigate();
  
  return (
    <div className="flex flex-row items-center justify-between pl-5 pr-5 bg-gray-800 h-16 shadow-md">
        <div className='cursor-pointer'>
        <img onClick={() =>navigate('/home')}
            className=" mx-5 h-10 w-auto"
            src="/coursera.jpg"
            alt="Coursera"
          
        /></div>
        {
          email.userEmail.length>1 ? <div
              className=' flex flex-row m-2'>
                <button onClick={ ()=>{setEmail({userEmail:''}); navigate('/home')}} className="flex w-16 justify-center rounded-md bg-red-600 mx-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
  
              <button onClick={()=>navigate('/welcomeuser')} className="flex w-16 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</button></div> 
          : <div className=' flex flex-row m-2'>
              <button onClick={()=>navigate('/signup')} className="flex w-16 justify-center rounded-md bg-indigo-600 mx-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Signup</button>
  
              <button onClick={()=>navigate('/login')} className="flex w-16 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
           </div>

        }

    </div>
  )
}

export default Appbarnew