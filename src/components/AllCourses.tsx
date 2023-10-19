import axios from 'axios'
import React, { useEffect, useState } from 'react';



const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/admin/courses/', {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });

        const data = response.data;
        setCourses(data.courses);
        console.log("Courses recived successfully:", courses);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error as needed
      }
    }

    fetchData();
  }, []);

  return (
      <div className='flex flex-wrap justify-center '>
        {courses.map(course =>{
          return <DisplayCourses  course = {course} />}
        )}
      </div>
  )
}
  


function  DisplayCourses ({course}) {
  
  return (
    <>
    <div className="w-60 h-auto p-6 mx-2 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {/* title */}
    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</div>
    
    {/* description */}
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.description}</div>
    
    {/* image */}
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.imageLink}</div>
    
    {/* price */}
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.price}</div>

    {/* below code need to be converted to button to edit course
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course._id}</div> */}
    
    </div>
    </>
  )
}



export default AllCourses