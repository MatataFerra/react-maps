import { FC, memo, useContext, useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LeafletControlGeocoder } from ".";

// const icon = L.icon({
//   iconSize: [35, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
//   iconUrl: `https://res.cloudinary.com/docq8rbdu/image/upload/v1655356024/gaaensta9guiqtf3q6s2.png`,
//   shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
// });

// const searchIcon = L.icon({
//   iconSize: [35, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
//   iconUrl: `https://res.cloudinary.com/docq8rbdu/image/upload/v1655356087/i0kmu4d6ervnvwfdgeg3.png`,
//   shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
// });

const MapLeafletContainer = () => {
  return (
    <>
      <MapContainer center={[Number("45"), Number("25")]} zoom={8} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker position={[Number("45"), Number("25")]}>
          <Popup>TEST</Popup>
        </Marker>

        <LeafletControlGeocoder />
      </MapContainer>
    </>
  );
};

export default MapLeafletContainer;
