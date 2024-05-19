import Home from './pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from './pages/Courses';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import AboutUs from './pages/AboutUs';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser] = useAuth()

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
