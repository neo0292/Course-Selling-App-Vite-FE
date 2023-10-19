import axios from 'axios';
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
    <button onClick={()=> navigate('/AddCourse')}
    type="submit" className="w-auto mx-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
     Add Course
    </button>
    
    <button
      onClick={() =>{
        navigate('/allcourses');
      }}
      
    type="submit" className="w-auto mx-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get all courses</button>  
    </div>
  )
}

export default WelcomeUser