import React, { useState } from "react";
import dynamic from 'next/dynamic';
import styles from './Home.module.css';
import CostAnalysisCalculator from './CostAnalysisCalculator';

const DynamicMapComponent = dynamic(
  () => import('./MapComponent'), 
  { 
    loading: () => <p>Loading...</p>,
    ssr: false
  }
);

export default function Home() {
  const [category, setCategory] = useState("commercial");
  const [populationType, setPopulationType] = useState("none");
  const [isCalculatorVisible, setCalculatorVisible] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Карта с данными</h1>

      <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select}>
        <option value="commercial">Торговля</option>
        <option value="catering">Еда</option>
        <option value="accommodation">Отели</option>
      </select>

      <div className={styles.buttonContainer}>
        <button onClick={() => setPopulationType("obesennaya_auditoria")} className={styles.button}>Показать Обеспеченную аудиторию</button>
        <button onClick={() => setPopulationType("obesennaya_auditoria_i_fitnes_kluby")} className={styles.button}>Показать Обеспеченную аудиторию и фитнес-клубы</button>
        <button onClick={() => setPopulationType("healthcare.hospital")} className={styles.button}>Показать Семьи и густонаселенную жилую зону</button>
        <button onClick={() => setPopulationType("semii_s_malenkimi_detmi")} className={styles.button}>Показать Семьи с маленькими детьми</button>
        <button onClick={() => setPopulationType("studenty")} className={styles.button}>Показать Студентов</button>
        <button onClick={() => setPopulationType("none")} className={styles.button}>Скрыть метки</button>
      </div>

      <DynamicMapComponent populationType={populationType} businessCategory={category} />

      <button className={styles.button} onClick={() => setCalculatorVisible(!isCalculatorVisible)} >
        {isCalculatorVisible ? 'Скрыть' : 'Показать'} калькулятор анализа стоимости
      </button>

      <CostAnalysisCalculator isVisible={isCalculatorVisible} />
    </div>
  );
}
