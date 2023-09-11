import Map, { Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";
import { useCallback, useState } from "react";
// import getStates from "./getState"; //hardcode :(
import geojson from "./geojson.json"; 

function MapBody() {
  const [hoverInfo, setHoverInfo] = useState(null);
  
  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];
    
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y });
  }, []);
  
  const [viewState, setViewState] = useState({
    longitude: -47,
    latitude: -15,
    zoom: 3.8,
  });
  
  // Definindo os limites que o usuário pode navegar pelo mapa:
  const GEOFENCE = turf.circle([-52.4, -16.3], 5400, { units: "kilometers" });
  
  // Definindo a função que limita o usuário a navegar apenas dentro do GEOFENCE:
  const onMove = useCallback(({ viewState }) => {
    const newCenter = [viewState.longitude, viewState.latitude, viewState.zoom];
    
    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {
      setViewState({
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        zoom: viewState.zoom,
      });
    }
  }, []);
  
  const layerStyle = {
    id: "data",
    type: "fill",
    paint: {
      "fill-color": "#1E293B",
      "fill-outline-color": "#2F3F58", // Cor do contorno
    },
  };

  // Retornando o componente MapBody:
  return (
    /* OBS: Eu sei que era melhor só retornar o componente map... mas assim a gente consegue tirar o scrollBar */
    <div className="overflow-hidden w-full h-full">
       <Map
      {...viewState}
      onMove={onMove}
      mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbTFiczBubzBlZWEzanBla29sMHFhNngifQ.n91ThdPn4IujuqZy8V4mOg"
      maxZoom={5.6}
      minZoom={3.0}
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
        <Layer {...layerStyle}  />
      </Source>

      {/* paint={!!hoverInfo && ({"fill-color": 0 ? "#000000" : "#ffffff",})} */}

      {/* div de informações */}
      {!!hoverInfo && (
        <div className="tooltip absolute z-10 p-2 bg-blue-200 pointer-events-none top-0 right-0 w-56 text-right">
          <div>Estado: {hoverInfo.feature.properties.estado}</div>
          <div>Sigla: {hoverInfo.feature.properties.sigla}</div>
          <div>Code Area: {hoverInfo.feature.properties.codarea}</div>
        </div>
      )}
    </Map>
    </div>
  );
}

export default MapBody;
