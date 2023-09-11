import Map, { Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";
import { useCallback, useMemo, useState } from "react";
// import getStates from "./getState"; //hardcode :(
import geojson from "./geojson.json";

function MapBody() {
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    // console.log(event, 'event')
    const county = event.features[0] ? event.features[0].properties.estado : ''
    setHoverInfo({
      countyName: county,
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const [viewState, setViewState] = useState({
    longitude: -47,
    latitude: -15,
    zoom: 3.8,
  });

  // Definindo a função que limita o usuário a navegar apenas dentro do GEOFENCE:
  const onMove = useCallback(({ viewState }) => {
    setViewState({
      longitude: viewState.longitude,
      latitude: viewState.latitude,
      zoom: viewState.zoom,
    });
  }, []);

  const layerStyle = {
    id: "data",
    type: "fill",
    paint: {
      "fill-color": "#1E293B",
      "fill-outline-color": "#2F3F58", // Cor do contorno
    },
  };

  const layerHighlight = {
    id: "data",
    type: "fill",
    paint: {
      'fill-outline-color': '#484896',
      'fill-color': '#6e599f',
      'fill-opacity': 0.75
    } 
};

// console.log(hoverInfo)

const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';
console.log(selectedCounty)
const filter = useMemo(
  () => ['in', 'COUNTY', selectedCounty],
  [selectedCounty]
);  
// Retornando o componente MapBody:
return (
  /* OBS: Eu sei que era melhor só retornar o componente map... mas assim a gente consegue tirar o scrollBar */
  <div className="overflow-hidden w-full h-full bg-slate-400">
    <Map
      {...viewState}
      onMove={onMove}
      mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbGtyeHkwNzIzYXYzcW8xYTk4dXplOTkifQ.AeclKAsX4UhZf6xCfZgwPg"
      maxZoom={5.6}
      minZoom={2.0}
      interactiveLayerIds={["data"]}
      doubleClickZoom={false}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
      onMouseMove={onHover}
      onClick={() => {
        console.log(hoverInfo);
      }}
    >
      {/* Colocando a camada dos estados */}
      <Source type="geojson" data={geojson}>
        <Layer {...layerStyle} />
        <Layer {...layerStyle} filter={filter} /> 
      </Source>

      {/* paint={!!hoverInfo && ({"fill-color": 0 ? "#000000" : "#ffffff",})} */}

      {/* div de informações */}
      {/* {!!hoverInfo.countyName && (
        <div className="tooltip absolute z-10 p-2 bg-slate-800 text-slate-50 m-2 pointer-events-none top-0 right-0 w-56 text-right">
          <div>Estado: {hoverInfo.countyName}</div>
        </div>
      )}  */}
    </Map>
  </div>
);
}


export default MapBody;
