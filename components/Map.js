// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';  // импортируем L из 'leaflet'

// Удаляем стандартную функцию, которая пытается получить URL изображения маркера
delete L.Icon.Default.prototype._getIconUrl;

// Переопределяем пути к изображениям
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker.svg',
  iconUrl: '/marker.svg',
  shadowUrl: '/marker.svg'
});
const MapComponent = ({ data }) => {
  const center = [45.0355448, 38.9778854];
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "600px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {/* Перебрать все объекты в данных GeoJSON и создать маркеры для них */}
      {data.features.map((feature) => (
        <Marker
          key={feature.properties.place_id}
          position={[
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
          ]}
        >
          <Popup>
            {/* Показать некоторые свойства объекта во всплывающем окне */}
            <p>
              <strong>Страна:</strong> {feature.properties.country}
            </p>
            <p>
              <strong>Город:</strong> {feature.properties.city}
            </p>
            <p>
              <strong>Улица:</strong> {feature.properties.street}
            </p>
            <p>
              <strong>Категории:</strong>{" "}
              {feature.properties.categories.join(", ")}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
