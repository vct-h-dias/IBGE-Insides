import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MapScreen from './Pages/MapScreen'
import StateInfoView from './Pages/StateInfoView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Map" element = {<MapScreen/>}/>
        <Route path="/Estado" element = {<StateInfoView/>}/>
      </Routes>
    </Router>
  );
}

export default App;