import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Добавляем собственные стили
import styles from './MapComponent.module.css';

// Удаление стандартных иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;

// Переопределение путей к иконкам маркеров
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker.svg',
  iconUrl: '/marker.svg',
  shadowUrl: '/marker.svg'
});

const MapComponent = ({ populationType, businessCategory }) => {
  const center = [45.0355448, 38.9778854];
  const zoom = 13;

  const [dataForObesennayaAuditoria, setDataForObesennayaAuditoria] = useState(null);
  const [dataForObesennayaAuditoriaIFitnesKluby, setDataForObesennayaAuditoriaIFitnesKluby] = useState(null);
  const [dataForHealthcareHospital, setDataForHealthcareHospital] = useState(null);
  const [dataForSemiiSMalenkimiDetmi, setDataForSemiiSMalenkimiDetmi] = useState(null);
  const [dataForStudenty, setDataForStudenty] = useState(null);
  const [dataForBusiness, setDataForBusiness] = useState(null);
  const [selectedPoints, setSelectedPoints] = useState([]);

  const markerRefs = useRef({});  
  const handleAddToCompare = (point) => {
    setSelectedPoints(prevPoints => [...prevPoints, point]);
  };
  useEffect(() => {
    const fetchData = async (category, setData) => {
      const apiUrl = getApiUrlForCategory(category);
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    const getApiUrlForCategory = (category) => {
      let url = "";
      switch (category) {
        case "obesennaya_auditoria":
          url = "https://api.geoapify.com/v2/places?categories=commercial.shopping_mall&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c00207&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        case "obesennaya_auditoria_i_fitnes_kluby":
          url = "https://api.geoapify.com/v2/places?categories=office&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c00207&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        case "healthcare.hospital":
          url = "https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c00207&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        case "semii_s_malenkimi_detmi":
          url = "https://api.geoapify.com/v2/places?categories=education.school&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c00207&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        case "studenty":
          url = "https://api.geoapify.com/v2/places?categories=education.university&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c00207&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        case "catering":
          url = "https://api.geoapify.com/v2/places?categories=catering&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c002079203094b7261736e6f646172&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        case "accommodation":
          url = "https://api.geoapify.com/v2/places?categories=accommodation&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c002079203094b7261736e6f646172&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
          break;
        default:
          url = "https://api.geoapify.com/v2/places?categories=commercial&filter=place:51952ded2f167d434059c52c6ae67f844640f00101f9010281700000000000c002079203094b7261736e6f646172&lang=ru&limit=500&apiKey=bd2138b036de498dadbdcfd39a811ed5";
      }
      return url;
    };

    if (populationType) {
      fetchData(populationType, setDataForObesennayaAuditoria);
      fetchData(populationType, setDataForObesennayaAuditoriaIFitnesKluby);
      fetchData(populationType, setDataForHealthcareHospital);
      fetchData(populationType, setDataForSemiiSMalenkimiDetmi);
      fetchData(populationType, setDataForStudenty);
    }

    if (businessCategory) {
      fetchData(businessCategory, setDataForBusiness);
    }
  }, [populationType, businessCategory]);

 
  const createMarkerRef = (place_id) => {
    const markerRef = useRef(null);
    useEffect(() => {
      markerRefs.current.set(place_id, markerRef.current);
    }, [place_id]);
    return markerRef;
  };
  // Рендеринг кругов в зависимости от populationType
  const renderCircles = (data, color) => {
    // Если populationType равен "none" или данные отсутствуют, не рендерим круги
    if (populationType === "none" || !data || !data.features) return null;

    // Иначе рендерим круги на основе данных
    return data.features.map((feature) => (
      <Circle
        key={feature.properties.place_id}
        center={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
        radius={500}
        color={color}
        fillOpacity={0.5}
      />
    ));
  };


  const handleOpenPopup = (place_id) => {
    const markerRef = markerRefs.current[place_id];
    if (markerRef) {
      markerRef.openPopup();
    }
  };

  const createMarkersForBusiness = () => {
    if (!dataForBusiness || !dataForBusiness.features) {
      return null;
    }

    return dataForBusiness.features.map((feature) => {
      const placeId = feature.properties.place_id;
      const { properties } = feature;
      const { name, 'address_line2': addressLine2, 'contact:phone': phone, 'opening_hours': openingHours, 'contact:website': website } = properties;
  
      return (
        <Marker
          key={placeId}
          position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
          ref={(ref) => {
            markerRefs.current[placeId] = ref;
          }}
        >         
         <Popup>           
             <div>
              <strong>{name}</strong>
              {addressLine2 && <div><strong>Адрес:</strong> {addressLine2}</div>}
              {phone && <div><strong>Телефон:</strong> {phone}</div>}
              {openingHours && <div><strong>Часы работы:</strong> {openingHours}</div>}
              {website && <div><strong>Вебсайт:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></div>}
              <button onClick={() => handleAddToCompare(feature)}>Сравнить</button>
            </div>
          </Popup>
        </Marker>
      );
    });
  };

  return (
    <div>  
      <MapContainer center={center} zoom={zoom} className={styles.mapContainer}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {renderCircles(dataForObesennayaAuditoria, "blue")}
      {createMarkersForBusiness()}
      </MapContainer>
      <div className={styles.compareContainer}>
      {selectedPoints.map(feature => (
        <div key={feature.properties.place_id} className={styles.compareItem}>            
        <h4>{feature.properties.name}</h4>
            <p>Адрес: {feature.properties.address_line2}</p>
            <p>Телефон: {feature.properties['contact:phone']}</p>
            <p>Часы работы: {feature.properties['opening_hours']}</p>
            <p>Вебсайт: <a href={feature.properties['contact:website']} target="_blank" rel="noopener noreferrer">{feature.properties['contact:website']}</a></p>
            <button onClick={() => handleOpenPopup(feature.properties.place_id)}>Посмотреть метку</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;