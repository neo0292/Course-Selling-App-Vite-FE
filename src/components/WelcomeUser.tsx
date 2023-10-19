import React from 'react'
import { useNavigate } from 'react-router-dom'

const  WelcomeUser = ()=> {
  const navigate = useNavigate();
  return (
    <div className='
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;flex felx-col w-full h-full text-center text-orange-500 pl-40'>
    <h1>Welcome</h1><br />
    <h2>Congratulatins, you have successfully loged in</h2> 
    <button onClick={()=> navigate('/AddCourse')}> Add Course
      </button>
    </div>
  )
}

export default WelcomeUser