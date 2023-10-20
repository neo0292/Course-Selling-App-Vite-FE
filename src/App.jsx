import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Signup from "./components/Signup"
import Appbar from "./components/Appbar"
import Login from "./components/Login"
import Appbartailwind from "./components/Appbartailwind"
import Home from "./components/home"
import WelcomeUser from "./components/WelcomeUser"
import AddCourse from "./components/AddCourse"
import AllCourses from "./components/AllCourses"
import EditCourse from "./components/EditCourse"
function App() {
  

  return (
    <div>
      
      
      <Router>
      <Appbar></Appbar>
        <Routes>
        
          <Route path="/login" element= {<Login/>}></Route>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/home" element= {<Home/>}></Route>
          <Route path="/signup" element= {<Signup/>}></Route>
          <Route path="/welcomeuser" element= {<WelcomeUser/>}></Route>
          <Route path="/addcourse" element= {<AddCourse/>}></Route>
          <Route path="/allcourses" element= {<AllCourses/>}></Route>
          <Route path="/editcourse/:courseId" element={<EditCourse/>}></Route>
        </Routes>
      </Router>
      
      
      {/* <Home></Home> */}
      {/* <Appbar></Appbar> */}
      
      {/* {<Signup></Signup>} */}
      {/* <Login></Login> */}
  
 </div>
  )
}

export default App
