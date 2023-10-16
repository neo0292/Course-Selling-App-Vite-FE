import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Signup from "./components/Signup"
import Appbar from "./components/Appbar"
import Login from "./components/Login"
import Appbartailwind from "./components/Appbartailwind"
import Home from "./components/home"
function App() {
  

  return (
    <div>
      
      <Appbartailwind></Appbartailwind>
      <Router>
        <Routes>
          <Route path="/login" element= {<Login/>}></Route>
          <Route path="/home" element= {<Home/>}></Route>
          <Route path="/signup" element= {<Signup/>}></Route>
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
