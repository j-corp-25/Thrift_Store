import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import myIcon from '../assets/marker-icon.png'
import './StoreMap.css'


const customIcon = new L.Icon({
    iconUrl: myIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

const StoreMap = () => {
  return (
    <>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${40.69147},${-73.86496}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="map-button">Get directions</button>
      </a>

      <MapContainer
        center={[40.69147, -73.86496]}
        zoom={20}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.69147, -73.86496]} icon={customIcon}>
          <Popup>Elizabeth's Store</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default StoreMap;
