import Map, { Source, Layer } from "react-map-gl";
import "./MapBody.css";
import * as turf from "@turf/turf";
import { useCallback, useState } from "react";
import getStates from "./getState";

// Definindo os limites que o usuário pode navegar pelo mapa:
const GEOFENCE = turf.polygon([
  [
    [-77, -143],
    [-77, 8],
    [-30, 8],
    [-30, -143],
    [-77, -143],
  ],
]);

// Definindo o componente MapBody:
function MapBody() {
  // carregando geojson dos estados:
  const [geojson, setGeojson] = useState(false);
  const [loading, setLoading] = useState(true);

  if (loading) {
    const getGeojson = async () => {
      const res = await getStates();
      setGeojson(res);
      setLoading(false);
    };
    getGeojson();
  }

  // Definindo o estado inicial do mapa:
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
    } else {
      setViewState({
        longitude: -47,
        latitude: -15,
        zoom: viewState.zoom,
      });
    }
  }, []);

  // Retornando o componente MapBody:
  return (
    <>
      <div className="bg-slate-200">
        <Map
          {...viewState}
          onMove={onMove}
          maxZoom={5}
          minZoom={3}
          doubleClickZoom={false}
          style={{ width: "100vw", height: "100vh" }}
          mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
          mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbGtyeHkwNzIzYXYzcW8xYTk4dXplOTkifQ.AeclKAsX4UhZf6xCfZgwPg"
        >
          <Source type="geojson" data={GEOFENCE}>
            <Layer
              id="geofence-layer"
              type="fill"
              paint={{
                "fill-color": "rgba(255, 255, 255, 0.3)",
              }}
            />
          </Source>

          {geojson &&
            geojson.map((geo) => {
              const layerStyle = {
                id: geo.sigla,
                type: "fill",
                paint: {
                  "fill-color": geo.color,
                },
              };

              return (
                <Source
                  key={geo.sigla}
                  id={geo.sigla}
                  type="geojson"
                  data={geo}
                >
                  <Layer {...layerStyle} />
                </Source>
              );
            })}
        </Map>
      </div>
    </>
  );
}

export default MapBody;
