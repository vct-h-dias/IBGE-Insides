import BackBtn from '../../Components/Map-Components/BackBtn/BackBtn.jsx'
import MapBody from '../../Components/Map-Components/MapBody/MapBody'
import SearchNavBar from '../../Components/Map-Components/SearchNavBar/SearchNavBar.jsx'

function MapScreen() {
  return (

    <>
      <div className='flex'>
        <MapBody/>
        <BackBtn/>
        <SearchNavBar/>
      </div>
    </>


  )
}

export default MapScreen
