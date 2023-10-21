import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCourse = () => {
  const {courseId} = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
       
      try {
        const response = await axios.get('http://localhost:8000/admin/courses/'+ courseId, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        const data = response.data;
        setCourse(data.course); 
        console.log("Courses recived successfully:", data.course);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error as needed
      }
    }

    fetchCourse();
  }, []);
  
  if (!course) {
    console.log('course from if:', course )
    return <div style={{height: "100vh", justifyContent: "center", flexDirection: "column"}}>
        Loading....
    </div>
  } 
  
  return (
    <>
    <Topbar course = {course}></Topbar>
    <div className='grid grid-flow-col '>
    <EditCard course = {course} setCourse = {setCourse}></EditCard>
    <DisplayCard></DisplayCard>
    </div>
    </>
  )
}

const Topbar =({course}) => {
  return (
    <>
    <div className='flex flex-row  justify-center items-center h-10 w-screen bg-sky-300'>{course.title}</div>  
  </>
  )


}


const EditCard = ({course,setCourse}) => {
  const [courseId,setCourseId] = useState(course._id)
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [imageLink, setImageLink] = useState(course.imageLink);
  const [price, setPrice] = useState(course.price);

  const navigate = useNavigate();
  return (
    <>
    <div className="flex flex-col h-full w-screen bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-800">
    
    <div className="
    w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-1 mx-auto">
    <div className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit this course</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input 
            onChange={(e)=>{
                setTitle(e.target.value);
                console.log("title:",e.target.value);
            }}
            type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  value={title} required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea 
            onChange={(e)=>{
              setDescription(e.target.value);
              console.log("Descr:",e.target.value);
          }}
            name="description" id="description" value={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">imageLink</label>
            <input
            onChange={(e)=>{
              setImageLink(e.target.value);
              console.log("ImageLink:",e.target.value);
          }}
            type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={imageLink} required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
            <input 
            onChange={(e)=>{
              setPrice(e.target.value);
              console.log("price:",e.target.value);
          }}
            type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={price} required />
        </div>
     
        <button 
        onClick={async() =>{
        const response = await axios.put('http://localhost:8000/admin/courses/' + courseId,{
            _id : courseId,
            title : title,
            description : description,
            imageLink : imageLink,
            price : price
          }, {
            headers : { 
                       'authorization': 'Bearer ' + localStorage.getItem('token') 
            }
          });
          console.log(response.data);
          let updatedCourse = {
            _id : course._id,
            title : title,
            description : description,
            imageLink :imageLink,
            price : price};
            setCourse(updatedCourse);
            alert("Course updated successfully");
        }}
        type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update course</button>

      <button onClick={()=>{
      navigate('/welcomeuser');
      }} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BACK TO WELCOME PAGE</button>
        
    </div>
    
  </div>
</div>
</>
)
}

//below componenet pending to update
const DisplayCard = () => {
  return (
    <div>displayCard</div>
  )
}


export default EditCourse