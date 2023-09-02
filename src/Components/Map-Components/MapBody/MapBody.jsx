import Map from "react-map-gl";
import "./MapBody.css";
import * as turf from "@turf/turf";
import { useCallback, useState } from "react";

const GEOFENCE = turf.circle([-52.4, -16.3], 5400, { units: "kilometers" });

function MapBody() {
  const [viewState, setViewState] = useState({
    longitude: -52.4,
    latitude: -16.3,
    zoom: 3.8,
  });

  const onMove = useCallback(({ viewState }) => {
    const newCenter = [viewState.longitude, viewState.latitude, viewState.zoom];

    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {
      setViewState({
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        zoom: viewState.zoom,
      });
    }
    console.log(viewState, "currentView");
  }, []);

  return (
    <Map
      {...viewState}
      onMove={onMove}
      mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbTFiczBubzBlZWEzanBla29sMHFhNngifQ.n91ThdPn4IujuqZy8V4mOg"
      maxZoom={5.6}
      minZoom={3.9}
      doubleClickZoom={false}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
    />
  );
}

export default MapBody;
