import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/user';


const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useRecoilState(userState); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/public/coursera.jpg"
            alt="coursera"
          />
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>{
                    let input = e.target.value;
                    setUsername(input);
                    console.log(input);
                  }}

                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    let input = e.target.value;
                    setPassword(input);
                    console.log(input);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={ async() =>{
                  const response = await axios.post('http://localhost:8000/admin/login',{
                    username: username,
                    password: password
                  }
                  //below code not working properly backend cant accept id pass through headers = debug later
                  // ,{
                  // headers: {
                  //   'Content-Type': 'application/json'
                  //   }
                  // }
                  );
                  
                  let data =  response.data;
                  localStorage.setItem('token',data.token);
                  setEmail({userEmail: username});
                  if(data.token){
                    navigate('/welcomeuser');
                  }
                  console.log(data);
                } }
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
           <button onClick={()=>
            navigate('/signup')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Signup here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

  

export default Login