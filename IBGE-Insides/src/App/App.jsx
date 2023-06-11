import './App.css'

import LandingPage from './LandingPage/LandingPage.jsx'
import MapScreen from './MapScreen/MapScreen.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/> }/>
        <Route path='/Map' element={<MapScreen/>} />
      </Routes>
    </Router>

  )
}

export default App
