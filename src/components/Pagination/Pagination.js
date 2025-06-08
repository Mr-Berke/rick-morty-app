import React from 'react';
import './Pagination.css';

/**
 * Sayfalama kontrollerini içeren bileşen
 * @param {Object} props
 * @param {number} props.currentPage - Mevcut sayfa numarası
 * @param {Function} props.onPageChange - Sayfa değiştiğinde çağrılacak fonksiyon
 * @param {boolean} props.hasPrev - Önceki sayfa var mı?
 * @param {boolean} props.hasNext - Sonraki sayfa var mı?
 */
const Pagination = ({ currentPage, onPageChange, hasPrev, hasNext }) => {
  return (
    <div className="pagination">
      {}
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={!hasPrev}
      >
        Önceki
      </button>

      {}
      <span style={{ margin: '0 10px' }}>Sayfa: {currentPage}</span>

      {}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={!hasNext}
      >
        Sonraki
      </button>
    </div>
  );
};

export default Pagination; 