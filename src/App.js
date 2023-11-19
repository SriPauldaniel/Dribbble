import react from 'react';
import Loader from './components/Loader';
import { Route,Routes } from  "react-router-dom";
import Findtalent from './components/Navbar/Findtalent';
import Inspiration from './components/Navbar/Inspiration';
import Learndesign from './components/Navbar/Learndesign';
import Jobs from './components/Navbar/Jobs';
import Gopro from './components/Navbar/Gopro';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Navbar/Authenticate/Login';
import Signup from './components/Navbar/Authenticate/Signup';
function App() {
  
  return (
    <>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/Find_talent" element={<Findtalent />} />
        <Route path ="/Inspiration" element={<Inspiration className='bg-gray-100' />} />
        <Route path ="/Jobs" element={<Jobs />} />
        <Route path ="/Learn_design" element={<Learndesign />} />
        <Route path ="/Go_Pro" element={<Gopro />} />
        <Route path ="/Login" element ={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
    </>
    
  );
}

export default App;
