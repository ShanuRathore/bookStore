import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Courses from './pages/Courses';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
