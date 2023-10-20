import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditCourse = () => {
  const {courseId} = useParams();
  console.log('courseid from useParams:',courseId)
  const [course, setCourse] = useState();

  useEffect(() => {
    async function fetchCourse() {
       
      try {
        const response = await axios.get('http://localhost:8000/admin/courses/'+ courseId, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });

        const data = response.data;
        setCourse(data.courses);
        console.log("Courses recived successfully:", data.course);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error as needed
      }
    }

    fetchCourse();
  }, []);
  
    
  
  



  return (
    <div>hekllo{course}</div>
  )
}

export default EditCourse