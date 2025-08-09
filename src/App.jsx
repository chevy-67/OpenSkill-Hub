import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import '/src/styles/App.css'
import Home from '/src/frontend/Home'

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App