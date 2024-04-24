import React, { useState, useEffect } from 'react';
import styles from './CostAnalysisCalculator.module.css';

const CostAnalysisCalculator = ({ isVisible }) => {
  const [radius, setRadius] = useState('500m');
  const [competitorAnalysis, setCompetitorAnalysis] = useState(false);
  const [transportStreams, setTransportStreams] = useState(false);
  const [publicTransportStops, setPublicTransportStops] = useState(false);
  const [parkingSpaces, setParkingSpaces] = useState(false);
  const [attractionPlaces, setAttractionPlaces] = useState([]);
  const [pedestrianTraffic, setPedestrianTraffic] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let cost = 0;
    cost += radius === '500m' ? 100 : 200;
    if (competitorAnalysis) cost += 50;
    if (transportStreams) cost += 50;
    if (publicTransportStops) cost += 30;
    if (parkingSpaces) cost += 30;
    if (pedestrianTraffic) cost += 40;
    cost += attractionPlaces.length * 20;

    setTotalCost(cost);
  }, [radius, competitorAnalysis, transportStreams, publicTransportStops, parkingSpaces, attractionPlaces, pedestrianTraffic]);

  const handleAttractionPlacesChange = (e) => {
    const value = e.target.value;
    setAttractionPlaces(
      attractionPlaces.includes(value)
        ? attractionPlaces.filter((item) => item !== value)
        : [...attractionPlaces, value]
    );
  };
  const handleSubmit = () => {
    setIsSubmitting(true);

    // Здесь вы можете выполнить логику отправки данных на сервер
    // Например, использовать fetch или axios для отправки данных
    // После успешной отправки, вы можете сбросить isSubmitting в false
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Данные успешно отправлены!');
    }, 1000); // Временная задержка для имитации отправки данных
  };
  if (!isVisible) return null;

  return (
    <div className={styles.calculator}>
      <h2 className={styles.heading}>Калькулятор стоимости услуг для анализа</h2>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Выбор радиуса анализа:
          <select className={styles.select} value={radius} onChange={(e) => setRadius(e.target.value)}>
            <option value="500m">500 метров</option>
            <option value="1km">1 километр</option>
          </select>
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Анализ конкурентов:
          <input className={styles.checkbox} type="checkbox" checked={competitorAnalysis} onChange={() => setCompetitorAnalysis(!competitorAnalysis)} />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Транспортные потоки:
          <input className={styles.checkbox} type="checkbox" checked={transportStreams} onChange={() => setTransportStreams(!transportStreams)} />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Остановки общественного транспорта:
          <input className={styles.checkbox} type="checkbox" checked={publicTransportStops} onChange={() => setPublicTransportStops(!publicTransportStops)} />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Парковки:
          <input className={styles.checkbox} type="checkbox" checked={parkingSpaces} onChange={() => setParkingSpaces(!parkingSpaces)} />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Места притяжения:
          <div>
            <label>
              Торговые центры
              <input
                className={styles.checkbox}
                type="checkbox"
                value="Торговые центры"
                checked={attractionPlaces.includes('Торговые центры')}
                onChange={handleAttractionPlacesChange}
              />
            </label>
            <label>
              Больницы
              <input
                className={styles.checkbox}
                type="checkbox"
                value="Больницы"
                checked={attractionPlaces.includes('Больницы')}
                onChange={handleAttractionPlacesChange}
              />
            </label>
            <label>
              Школы
              <input
                className={styles.checkbox}
                type="checkbox"
                value="Школы"
                checked={attractionPlaces.includes('Школы')}
                onChange={handleAttractionPlacesChange}
              />
            </label>
            <label>
              Университеты
              <input
                className={styles.checkbox}
                type="checkbox"
                value="Университеты"
                checked={attractionPlaces.includes('Университеты')}
                onChange={handleAttractionPlacesChange}
              />
            </label>
            <label>
              Парки
              <input
                className={styles.checkbox}
                type="checkbox"
                value="Парки"
                checked={attractionPlaces.includes('Парки')}
                onChange={handleAttractionPlacesChange}
              />
            </label>
          </div>
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Пешеходный трафик:
          <input className={styles.checkbox} type="checkbox" checked={pedestrianTraffic} onChange={() => setPedestrianTraffic(!pedestrianTraffic)} />
        </label>
      </div>

      <div className={styles.totalCost}>
        Общая стоимость анализа: <strong className={styles.totalAmount}>{totalCost} рублей</strong>
      </div>
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </button>
    </div>
  );
};

export default CostAnalysisCalculator;
