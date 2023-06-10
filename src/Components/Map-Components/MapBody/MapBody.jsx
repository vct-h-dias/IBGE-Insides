import '../MapBody/MapBody.css'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapBody = () => {

    return (

        <>
            <MapContainer
                center={[-22.891588, -47.022174]}
                zoom={5}
                scrollWheelZoom={true}
                style={{ width: '100%', height: '100rem' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </>
    )
}

export default MapBody
