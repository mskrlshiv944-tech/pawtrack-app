import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';
import { markersData } from '../data/locations.js';

const MapPage = () => {
  const location = useLocation();
  const filterType = location.state?.filter || 'all';

  const filteredMarkers = markersData.filter(marker => {
    if (filterType === 'all') {
      return true;
    }
    return marker.type === filterType;
  });

  const initialPosition = [28.6139, 77.2090];

  return (
    <MapContainer 
      center={initialPosition} 
      zoom={12} 
      style={{ height: 'calc(100vh - 80px)', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredMarkers.map(marker => (
        <Marker 
          key={marker.id} 
          position={marker.position}
        >
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPage;