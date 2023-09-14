import * as turf from "@turf/turf";
import Map, { Source, Layer } from "react-map-gl";
import { useCallback, useRef, useState } from "react";
import geojson from "./geojson.json";
import CountyModal from "../CountyModal/CountyModal";

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
      "fill-outline-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty],
        "#0f172a",
        "#2F3F58",
      ],
      "fill-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        "#0f172a",
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
  const GEOFENCE = turf.circle([-52.4, -16.3], 3000, { units: "kilometers" });

  const onSelectCity = useCallback(({ longitude, latitude }, duration) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: duration,
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  //HARCODE
  const [clickedCounty, setClickedCounty] = useState(false);
  const [clickedCodeArea, setClickedCodeArea] = useState(false);


  return (
    <div className="overflow-hidden w-full h-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
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
          if(!!hoverInfo.county!=''){  
            onSelectCity({longitude: hoverInfo.longitude, latitude: hoverInfo.latitude}, 1000);
            setClickedCodeArea(hoverInfo.codearea);
            setClickedCounty(hoverInfo.county);
            setModalOpen(true);
            
          } else {
            if (!turf.booleanPointInPolygon([hoverInfo.longitude, hoverInfo.latitude, hoverInfo.zoom], GEOFENCE)) {
              onSelectCity({longitude: -47, latitude: -15}, 1000);
            }
          }
          console.log(hoverInfo);
        }}
      >
        <Source type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
      <CountyModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        countyName={clickedCounty}
        codeArea={clickedCodeArea}
      />
    </div>
  );
}

export default MapBody;
