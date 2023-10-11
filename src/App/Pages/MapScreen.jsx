// important imports:
import * as turf from "@turf/turf";
import React, { useState, useRef, useCallback } from "react";

// Files:
import { getNames } from "../../utils/getNames.js";

// json:
import geojson from "../../json/geojson.json";

// Components:
import Map, { Source, Layer } from "react-map-gl";
import Modal from "../../Components/Modal/Modal.jsx";
import Drawerbar from "../../Components/Drawerbar/Drawerbar.jsx";

// Icons:
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function MapScreen() {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [haveInfo, setHaveInfo] = useState(false);

  const onHover = useCallback((event) => {
    const county = event.features[0] ? event.features[0].properties.estado : "";
    const codearea = event.features[0]
      ? event.features[0].properties.codarea
      : "";
    const acronym = event.features[0] ? event.features[0].properties.sigla : "";

    if (!!county != "") {
      setHaveInfo(true);
    } else {
      setHaveInfo(false);
    }

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
        "#64748b",
        "#334155",
      ],
      "fill-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        "#475569",
        "#334155",
      ],
    },
  };

  const mapRef = useRef();
  const GEOFENCE = turf.circle([-52.4, -16.3], 3000, { units: "kilometers" });

  //impedindo que o brasil saia da tela e mantendo uma boa proporção/margem conforme o zoom:
  const bounds = [
    [-80, 15], // Southwest coordinates
    [-30, -15], // Northeast coordinates
  ];

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
  const [ranking, setRanking] = useState(null);

  return (
    <>
      <Drawerbar />
      <div className="w-full h-screen bg-slate-300 overflow-hidden">
        <Map
          // Estilos:
          mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
          mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbGtyeHkwNzIzYXYzcW8xYTk4dXplOTkifQ.AeclKAsX4UhZf6xCfZgwPg"
          style={{ width: "100%", height: "100vh" }}
          // Dados:
          {...viewState}
          interactiveLayerIds={["data"]}
          ref={mapRef}
          // Definições:
          zoom={3}
          doubleClickZoom={false}
          maxPitch={45}
          minPitch={0}
          scrollZoom={false}
          cursor={haveInfo ? "pointer" : "default"}
          maxBounds={bounds}
          // Eventos:
          onMouseMove={onHover}
          onMove={onMove}
          onClick={() => {
            if (!!hoverInfo.county != "") {
              onSelectCity(
                {
                  longitude: hoverInfo.longitude,
                  latitude: hoverInfo.latitude,
                },
                1000
              );
              getNames(hoverInfo.codearea).then((res) => {
                setClickedCounty(selectedCounty);
                setClickedCodeArea(hoverInfo.codearea);
                setRanking(res[0].res);
                setModalOpen(true);
              });
            } else {
              if (
                !turf.booleanPointInPolygon(
                  [hoverInfo.longitude, hoverInfo.latitude, hoverInfo.zoom],
                  GEOFENCE
                )
              ) {
                onSelectCity({ longitude: -47, latitude: -15 }, 1000);
              }
            }
          }}>
          <Source type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
        </Map>
        <Modal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          countyName={clickedCounty}
          codeArea={clickedCodeArea}
          ranking={ranking}
        />
      </div>
    </>
  );
}

export default MapScreen;
