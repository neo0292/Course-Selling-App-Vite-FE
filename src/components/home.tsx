import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    
    <img className="
    flex flex-col px-40 h-screen items-center content-center" src="/home.jpg" alt="homepageimg" />
    <button className='bg-slate-600 rounded-md ' onClick={()=>navigate('/login')}>Login</button>
    </>
  )
}

export default Home