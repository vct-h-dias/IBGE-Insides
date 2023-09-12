import Map, { Source, Layer } from "react-map-gl";
import { useCallback, useRef, useState } from "react";
import geojson from "./geojson.json";

function MapBody() {
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const county = event.features[0] ? event.features[0].properties.estado : "";
    const codearea = event.features[0]
      ? event.features[0].properties.codarea
      : "";
    const acronym = event.features[0] ? event.features[0].properties.sigla : "";

    setHoverInfo({
      county: county,
      codearea: codearea,
      acronym: acronym,
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const [viewState, setViewState] = useState({
    longitude: -47,
    latitude: -15,
    zoom: 3.8,
  });

  const onMove = useCallback(({ viewState }) => {
    setViewState({
      longitude: viewState.longitude,
      latitude: viewState.latitude,
      zoom: viewState.zoom,
    });
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.county) || "";

  const layerStyle = {
    id: "data",
    type: "fill",
    paint: {
      "fill-outline-color": "#2F3F58",
      "fill-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        "#5DA7CF",
        "#1E293B",
      ],
      "fill-opacity": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        0.8,
        0.7,
      ],
    },
  };

  const mapRef = useRef();

  const onSelectCity = useCallback(({longitude, latitude}) => {
    mapRef.current?.flyTo({center: [longitude, latitude], duration: 5000});
  }, []);
  return (
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
        ref={mapRef}
        onClick={() => {
          const audio = new Audio("/public/audio/audio.mp3");
          audio.play();
          onSelectCity({longitude: 75, latitude: 9})
        }}
      >
        <Source type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
}

export default MapBody;
