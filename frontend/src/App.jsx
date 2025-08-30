import './styles/App.css'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './frontend/Home'
import CreatePost from './Components/CreatePost';
import Navbar from './frontend/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;