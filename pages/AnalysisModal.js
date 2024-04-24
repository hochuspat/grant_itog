import React from 'react';

const AnalysisModal = ({ isOpen, onClose, title, date }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          align-items: center;
          justify-content: center;
        }
        .modal.open {
          display: flex;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 400px;
          text-align: center;
        }
        .modal-close {
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <p>{date}</p>
        {/* Добавьте здесь дополнительную информацию по анализу */}
      </div>
    </div>
  );
};

export default AnalysisModal;
