import Map, { Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";
import { useCallback, useState } from "react";
// import getStates from "./getState"; //hardcode :(

import geojson from "./geojson.json";

// Definindo os limites que o usuário pode navegar pelo mapa:
const GEOFENCE = turf.circle([-52.4, -16.3], 5400, { units: "kilometers" });

const layerStyle = {
  id: "data",
  type: "fill",
  // line: "#000000",
  paint: {
    "fill-color": "#fee08b",
    "fill-opacity": 0.9,
    "fill-outline-color": "blue", // Cor do contorno
  },
};

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

  // Retornando o componente MapBody:
  return (
    <Map
      {...viewState}
      onMove={onMove}
      mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbTFiczBubzBlZWEzanBla29sMHFhNngifQ.n91ThdPn4IujuqZy8V4mOg"
      maxZoom={5.6}
      minZoom={3.9}
      interactiveLayerIds={["data"]}
      doubleClickZoom={false}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
      onMouseMove={onHover}
      onClick={() => {
        console.log(hoverInfo);
      }}
    >
      <Source type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      {!!hoverInfo && (
        <div
          className="tooltip"
          style={{
            background: "rgba(173, 216, 230, 0.8)",
            position: "absolute",
            left: hoverInfo.x,
            top: hoverInfo.y - 100,
            padding: "10px",
            pointerEvents: "none",
          }}
        >
          <div>Estado: {hoverInfo.feature.properties.estado}</div>
          <div>Sigla: {hoverInfo.feature.properties.sigla}</div>
          <div>Code Area: {hoverInfo.feature.properties.codarea}</div>
        </div>
      )}
    </Map>
  );
}

export default MapBody;
