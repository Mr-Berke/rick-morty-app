import React from 'react';
import './CharacterTable.css';

/**
 * Karakter listesini tablo formatında gösteren bileşen
 * @param {Object} props
 * @param {Array} props.characters - Gösterilecek karakterler
 * @param {Function} props.onCharacterSelect - Karakter seçildiğinde çağrılacak fonksiyon
 * @param {string} props.sortField - Sıralama yapılan alan
 * @param {boolean} props.sortAsc - Artan sıralama mı?
 * @param {Function} props.onSort - Sıralama değiştiğinde çağrılacak fonksiyon
 */
const CharacterTable = ({ characters, onCharacterSelect, sortField, sortAsc, onSort }) => {
  // Karakter listesi boşsa mesaj göster
  if (!characters || characters.length === 0) {
    return (
      <div className="no-data-container">
        <p>Hiç karakter bulunamadı. Lütfen farklı filtreler deneyin.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="character-table">
        <thead>
          <tr>
            <th>Resim</th>
            {/* Sıralanabilir başlıklar */}
            <th style={{ cursor: 'pointer' }} onClick={() => onSort('name')}>
              İsim {sortField === 'name' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => onSort('species')}>
              Tür {sortField === 'species' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => onSort('status')}>
              Durum {sortField === 'status' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => onSort('gender')}>
              Cinsiyet {sortField === 'gender' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Karakter listesi */}
          {characters.map(c => (
            <tr key={c.id} onClick={() => onCharacterSelect(c)} style={{ cursor: 'pointer' }}>
              <td><img src={c.image} alt={c.name} width="50" /></td>
              <td>{c.name}</td>
              <td>{c.species}</td>
              <td>{c.status}</td>
              <td>{c.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable; 