import React from 'react';
import './FilterPanel.css';

/**
 * Filtreleme ve sayfa boyutu ayarlarını içeren panel bileşeni
 * @param {Object} props
 * @param {Object} props.filters - Aktif filtreler
 * @param {Function} props.onFilterChange - Filtre değiştiğinde çağrılacak fonksiyon
 * @param {number} props.pageSize - Sayfa başına gösterilecek öğe sayısı
 * @param {Function} props.onPageSizeChange - Sayfa boyutu değiştiğinde çağrılacak fonksiyon
 */
const FilterPanel = ({ filters, onFilterChange, pageSize, onPageSizeChange }) => {
  /**
   * Filtre değerini güncelleyen yardımcı fonksiyon
   * @param {string} field - Güncellenecek filtre alanı
   * @param {string} value - Yeni değer
   */
  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className="filter-panel">
      {}
      <input
        type="text"
        placeholder="İsme göre filtrele..."
        value={filters.name}
        onChange={e => handleChange('name', e.target.value)}
      />
      {}
      <input
        type="text"
        placeholder="Türe göre filtrele..."
        value={filters.species}
        onChange={e => handleChange('species', e.target.value)}
      />
      {}
      <input
        type="text"
        placeholder="Duruma göre filtrele..."
        value={filters.status}
        onChange={e => handleChange('status', e.target.value)}
      />
      {}
      <input
        type="text"
        placeholder="Cinsiyete göre filtrele..."
        value={filters.gender}
        onChange={e => handleChange('gender', e.target.value)}
      />
      {}
      <select value={pageSize} onChange={e => onPageSizeChange(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <span style={{ fontSize: 14 }}>Sayfa Boyutu</span>
    </div>
  );
};

export default FilterPanel; 