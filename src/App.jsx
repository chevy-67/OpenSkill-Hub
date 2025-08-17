import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Route not found. Current path: {window.location.pathname}</div>} />
      </Routes>
    </Router>
  );
}

export default App;