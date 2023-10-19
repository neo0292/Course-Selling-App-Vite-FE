import axios from 'axios';
import React, { useState } from 'react'

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');


//  COMPONENET TO CREATE NEW COURSE BY ADMIN

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-800">
    
    <div className="
    w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-10 mx-auto">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create new course</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input 
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
             type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title name" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea 
            onChange={(e)=>{
              setDescription(e.target.value);
          }}
            name="description" id="description" placeholder="course description here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
            <input
            onChange={(e)=>{
              setImage(e.target.value);
          }}
            type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="image url" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input 
            onChange={(e)=>{
              setPrice(e.target.value);
          }}
            type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="amount" required />
        </div>
     
        <button 
        onClick={async() =>{
          axios.post('http://localhost:8000/admin/courses',{
            title : title,
            description : description,
            image : image,
            price : price
          })
        }}
        type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create new course</button>
        
    </form>
</div>



</div>
  )
}

export default AddCourse
