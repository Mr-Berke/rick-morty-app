import React from 'react';
import './CharacterDetail.css';

/**
 * Seçili karakterin detaylarını gösteren modal bileşeni
 * @param {Object} props
 * @param {Object} props.character - Gösterilecek karakter bilgileri
 * @param {Function} props.onClose - Modal kapatıldığında çağrılacak fonksiyon
 */
const CharacterDetail = ({ character, onClose }) => {
  // Karakter seçili değilse hiçbir şey gösterme
  if (!character) return null;

  return (
    <div className="character-detail">
      {}
      <button onClick={onClose} style={{ float: 'right', marginBottom: 10 }}>Kapat</button>
      
      <h2>Detaylar</h2>
      
      {}
      <img src={character.image} alt={character.name} width="100" />
      
      {}
      <p><b>İsim:</b> {character.name}</p>
      <p><b>Tür:</b> {character.species}</p>
      <p><b>Durum:</b> {character.status}</p>
      <p><b>Cinsiyet:</b> {character.gender}</p>
      <p><b>Orijin:</b> {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetail; 