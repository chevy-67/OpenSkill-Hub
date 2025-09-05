import './Components/App.css'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home'
import CreatePost from './Components/CreatePost';
import ProfileCreation from './Components/ProfileCreation';
import SideBarLeft from './Components/SideBarLeft';
import Navbar from "./frontend/Navbar"; 
import Myproject from './Components/Myproject';
import Explore from './Components/Explore';
import Navbar from './frontend/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/user' element={<ProfileCreation />} />
        <Route path='/sidebar' element={<SideBarLeft />} />
        <Route path='/myprojects' element={<Myproject/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;