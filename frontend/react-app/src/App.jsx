import  { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Courses from "./components/courses/Courses"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import { useAuth } from '../context/AuthContext';
const App = () => {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser)
  return (
 <>
    <div  className="dark:bg-slate-900 dark:text-white" >
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to={"/signup"}/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      
    </Routes>
    <Toaster />
    </BrowserRouter>
    
    </div>
 </>
  )
}

export default App
