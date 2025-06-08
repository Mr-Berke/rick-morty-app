/**
 * Metnin ilk harfini büyük yapar
 * @param {string} str - Dönüştürülecek metin
 * @returns {string} İlk harfi büyük yapılmış metin
 * @example
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); 