import './MapScreen.css'
import NavCorner from '../../Components/Map-Components/NavCorner/NavCorner.jsx'
import MapBody from '../../Components/Map-Components/MapBody/MapBody'

function MapScreen() {
  return (

    <>
      <div className='flex'>
        <MapBody/>
        {/* <NavCorner/> */}
      </div>
    </>


  )
}

export default MapScreen
