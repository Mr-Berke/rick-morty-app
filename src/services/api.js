/**
 * Tüm karakterleri çeken fonksiyon
 * @param {number} page - Sayfa numarası
 * @returns {Promise<Object>} API yanıtı
 * @throws {Error} API isteği başarısız olursa
 */
export const fetchCharacters = async (page = 1) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error || 'API isteği başarısız!');
  }
  return response.json();
}; 