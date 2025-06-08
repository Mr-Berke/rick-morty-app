import React from 'react';

/**
 * Hata mesajlarını gösteren bileşen
 * @param {Object} props
 * @param {string} props.message - Gösterilecek hata mesajı
 */
const ErrorMessage = ({ message }) => {
  return (
    <div style={{ 
      color: 'red', 
      padding: '10px', 
      margin: '10px 0', 
      border: '1px solid red',
      borderRadius: '4px',
      backgroundColor: '#fff0f0'
    }}>
      {/* Hata mesajı */}
      {message}
    </div>
  );
};

export default ErrorMessage; 