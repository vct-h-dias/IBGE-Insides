import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapBody = () => {
    // Iniciando o mapa com o centro marcado nas coordenadas de brasília
    const center = [-15.77972, -47.92972];
    const zoom = 5;
    const maxZoom = 6;
    const minZoom = 5;

    //const map = L.map('mapid').setView(center, 4);
    
    // Definindo o estilo do mapa usando o design criado no MapBox
    const username = 'camarg0vs';
    const style_id = 'cllz32e5s01o601qxa4zge6ar';
    const accessToken = 'pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbGtyeHkwNzIzYXYzcW8xYTk4dXplOTkifQ.AeclKAsX4UhZf6xCfZgwPg'
    const tilesize = 512;
    const url = `https://api.mapbox.com/styles/v1/${username}/${style_id}/tiles/${tilesize}/{z}/{x}/{y}{@2x}?access_token=${accessToken}`;

    /* 
    mapbox://styles/camarg0vs/cllz32e5s01o601qxa4zge6ar
    

    // Link do mapa no MapBox, colocar em TileLayer, mas não funciona (deve estar mal montado);
    https://api.mapbox.com/styles/v1/camarg0vs/cllz32e5s01o601qxa4zge6ar/tiles/512/{z}/{x}/{y}{@2x}?access_token=pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbGtyeHkwNzIzYXYzcW8xYTk4dXplOTkifQ.AeclKAsX4UhZf6xCfZgwPg

    

    */
    return (
        <>
            <MapContainer center={center} zoom={zoom} minZoom={minZoom} maxZoom={maxZoom} scrollWheelZoom={true} style={{ width: '100vw', height: '100vh'}}>
                <TileLayer url={url} attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"/>
                
                <Marker position={[-15,-47]}>
                   <Popup>
                        <div className='w-60 h-60 bg-slate-800'>
                            <h1 className='text-red-600'>{url}</h1>
                        </div>
                   </Popup>
                </Marker>
                
            </MapContainer>
        </>
    )
}

export default MapBody
