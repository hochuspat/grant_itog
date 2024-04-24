import React, { useState } from 'react';
import Image from 'next/image';
import { FaHome, FaBook } from 'react-icons/fa';
import { BsClipboard2 } from 'react-icons/bs';
import { useRouter } from 'next/router';

// Создаем компонент для боковой панели
const Sidebar = () => {
  const router = useRouter(); // Создаем экземпляр router

  const handleHomeIconClick = () => {
    router.push('/'); // Перенаправляем на страницу '/'
  };
  return (
    <div className="sidebar">
      <style jsx>{`
        .sidebar {
          width: 238px;
          height: 848px;
          flex-shrink: 0;
          border-radius: 30px;
          background: var(--f-6-f-7-f-8, #f6f7f8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .image {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }
        .text {
          color: var(--333333, #333);
          text-align: center;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Arial, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.15px;
        }
        .icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          fill: white;
        }
      `}</style>
      <div className="image">
        <Image src="/images/profilePic.jpg" alt="Profile Picture" width={100} height={100} layout="fill" objectFit="cover" />
      </div>
      <div className="text">Иванов Иван!</div>
      <div className="text">Премиум</div>

      <FaHome className="icon" size={50} onClick={handleHomeIconClick} />   
       </div>
  );
};

// Создаем компонент для блока с кнопкой
const Block = ({ buttonText, buttonLink }) => {
    return (
    <div className="block">
      <style jsx>{`
        .block {
          width: 264px;
          height: 206px;
          flex-shrink: 0;
          border-radius: 20px;
          background: #00306f;
          box-shadow: 0px 40px 100px -20px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .card {
          width: 150px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: 0.3s ease-in-out;
        }
        .icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          fill: white;
        }
        .button a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }
        .button {
          width: 184px;
          height: 47px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--f-6-f-7-f-8, #f6f7f8);
          box-shadow: 0px 15px 30px -10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button-text {
          color: #00306F;
          font-family: Arial, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          letter-spacing: normal;
        }
      `}</style>
      <BsClipboard2 className="icon" size={50} color="white" />
      <div className="button">
        <a href={buttonLink}>
          <div className="button-text">{buttonText}</div>
        </a>
      </div>
      </div>
  );
};

// Создаем компонент для карточки анализа
const Card = ({ title, date }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="card" onClick={openModal}>
      <style jsx>{`
        .card {
          margin: 10px;
          width: 235px;
          height: 206px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--f-6-f-7-f-8, #f6f7f8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .title {
          color: var(--4-f-4-f-4-f, #4f4f4f);
          font-family: Arial, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 101.7%;
        }
        .date {
          color: var(--4-f-4-f-4-f, #4f4f4f);
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .card a {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
          padding: 10px;
        }
        .card a:hover {
          background-color: rgba(255, 255, 255, 0.1);
          text-decoration: none;
        }
      `}</style>
      <a href="#">
        <div className="card-content">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
      </a>
      {isModalOpen && (
        <AnalysisModal title={title} date={date} closeModal={closeModal} />
      )}
    </div>
  );
};

const AnalysisModal = ({ title, date, closeModal }) => {
    const handleCloseModal = () => {
      closeModal();
    };
  
    return (
      <div className="modal" onClick={handleCloseModal}>
         <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
          text-align: center;
          position: relative;
        }
        .modal-title {
          font-size: 24px;
          font-weight: bold;
        }
        .modal-date {
          margin-top: 10px;
          color: #4f4f4f;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
      `}</style>
 <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>
          ×
        </span>
        <div className="modal-title">{title}</div>
      <div className="modal-date">{date}</div>
      </div>
    </div>
  );
};

// Создаем компонент для блока с карточками
const BlockWithCards = ({ cards, headerText }) => {
  return (
    <div className="block-with-cards">
      <style jsx>{`
        .block-with-cards {
          position: relative; 
          width: 553px;
          height: 460px;
          flex-shrink: 0;
          border-radius: 20px;
          background: var(--ffffff, #fff);
          box-shadow: 0px 40px 100px -20px rgba(0, 0, 0, 0.1);
          align-items: center;
          gap: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          transition: box-shadow 0.3s ease-in-out; 
        }
        .block-with-cards:hover {
          box-shadow: 0px 60px 120px -30px rgba(0, 0, 0, 0.2); 
        }
        .text {
          position: absolute;
          top: 48px;
          left: 240px;
          color: var(--4-f-4-f-4-f, #4f4f4f);
          font-family: Arial, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 101.7%;
        }
        .cards {
          margin: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
      <div className="text">{headerText}</div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.title} title={card.title}  />
        ))}
      </div>
    </div>
  );
};

const MainContent = ({ cards1, cards2 }) => {
    return (
    <div className="main-content">
      <style jsx>{`
        .main-content {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .row {
          display: flex;
          justify-content: center;
          gap: 20px;
          width: 100%;
        }
      `}</style>

<div className="row">
        <Block buttonText="Анализ помещений" buttonLink="/map" />
      </div>

      <div className="row">
        <BlockWithCards cards={cards1} headerText="Заказ от 10.11.2023" />
        <BlockWithCards cards={cards2} headerText="Заказ от 12.11.2023" />
      </div>
    </div>
  );
};

const Home = () => {
  // Разделенные данные для блоков
  const cards1 = [
    { title: 'Анализ по магазину Мандарин', date: '01.10.2023' },
    { title: 'Анализ по магазину Апельсин', date: '02.10.2023' },
  ];

  const cards2 = [
    { title: 'Анализ по магазину Банан', date: '03.10.2023' },
    { title: 'Анализ по магазину Фон', date: '04.10.2023' },
  ];

  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; 
          width: 100%; 
        }
        .home {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 20px;
        }
        .row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-evenly;
          gap: 20px;
          width: 100%;
        }
      `}</style>
      <div className="home">
        <Sidebar />
        <MainContent cards1={cards1} cards2={cards2} />
      </div>
    </div>
  );
};

export default Home;
