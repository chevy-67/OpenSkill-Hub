import './styles/App.css'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './frontend/Home'
import CreatePost from './Components/CreatePost';
import Navbar from './frontend/Navbar'
import BriefPost from './Components/BriefPost';
import ProtectedRoute from './Components/ProtectedRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createpost' element={<ProtectedRoute><CreatePost/></ProtectedRoute>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/post/:id' element={<BriefPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;