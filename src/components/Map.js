import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customIconUrl = `${process.env.PUBLIC_URL}/map-marker.webp`;

const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [50, 50],
});

const MyMap = () => {
  const markers = [
    { coords: [13.98493, -89.67701], text: 'Marker 1', icon: customIcon },
  ];

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.coords} icon={marker.icon}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MyMap;
