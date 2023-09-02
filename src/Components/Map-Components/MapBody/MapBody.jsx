import Map from 'react-map-gl';
import './MapBody.css'

function MapBody() {
  return (

    <Map
      mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbTFiczBubzBlZWEzanBla29sMHFhNngifQ.n91ThdPn4IujuqZy8V4mOg"
      initialViewState={{
        longitude: -52.4,
        latitude: -16.3,
        zoom: 3.8
      }}
      scrollZoom={false}
      style={{width: '100%', height: '100vh'}}
      mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
    />
  );
}

export default MapBody
