import React, { useEffect, useState } from 'react';
import './App.css';
import FilterPanel from './components/FilterPanel/FilterPanel';
import CharacterTable from './components/CharacterTable/CharacterTable';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Pagination from './components/Pagination/Pagination';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

/**
 * Rick and Morty karakterlerini listeler, filtreler ve sıralar
 */
function App() {
  
  const [allCharacters, setAllCharacters] = useState([]);
  // Filtrelenmiş ve sıralanmış karakterler
  const [filtered, setFiltered] = useState([]);
  // Aktif filtreler
  const [filters, setFilters] = useState({
    name: '',    
    species: '', 
    status: '',  
    gender: ''   
  });
  // Sıralama ayarları
  const [sortField, setSortField] = useState('name'); 
  const [sortAsc, setSortAsc] = useState(true);       
  const [page, setPage] = useState(1);                
  const [selected, setSelected] = useState(null);     
  const [error, setError] = useState('');            
  const [pageSize, setPageSize] = useState(20);       
  const [loading, setLoading] = useState(true);       

  /**
   * API'den tüm karakterleri çeken fonksiyon
   * Tüm sayfaları dolaşarak bütün karakterleri toplar
   */
  const fetchAllCharacters = async () => {
    setError('');
    setLoading(true);
    try {
      // İlk sayfayı çek
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      const totalPages = data.info.pages;
      
      let allChars = [...data.results];
      
      // Diğer sayfaları da çek
      for (let i = 2; i <= totalPages; i++) {
        const pageResponse = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);
        const pageData = await pageResponse.json();
        allChars = [...allChars, ...pageData.results];
      }
      
      setAllCharacters(allChars);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Uygulama başladığında tüm karakterleri çek
  useEffect(() => {
    fetchAllCharacters();
  }, []);

  /**
   * Filtreleme ve sıralama işlemlerini yapan effect
   * Filtreler veya sıralama değiştiğinde çalışır
   */
  useEffect(() => {
    let data = allCharacters;
    
    // Filtreleme işlemleri
    if (filters.name) {
      data = data.filter(c => c.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    if (filters.species) {
      data = data.filter(c => c.species.toLowerCase().includes(filters.species.toLowerCase()));
    }
    if (filters.status) {
      data = data.filter(c => c.status.toLowerCase().includes(filters.status.toLowerCase()));
    }
    if (filters.gender) {
      data = data.filter(c => c.gender.toLowerCase().includes(filters.gender.toLowerCase()));
    }

    // Sıralama işlemi
    data = [...data].sort((a, b) => {
      if (sortField === 'name' || sortField === 'species' || sortField === 'status' || sortField === 'gender') {
        return sortAsc
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField]);
      }
      return 0;
    });

    setFiltered(data);
  }, [allCharacters, filters, sortField, sortAsc]);

  /**
   * Sıralama alanını değiştiren fonksiyon
   * @param {string} field - Sıralanacak alan adı
   */
  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  /**
   * Filtreleri güncelleyen fonksiyon
   * @param {Object} newFilters - Yeni filtre değerleri
   */
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1); // Filtre değiştiğinde ilk sayfaya dön
  };

  // Sayfalama için veriyi böl
  const startIndex = (page - 1) * pageSize;
  const paginatedData = filtered.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Rick & Morty Karakterleri</h1>
      {/* Filtre paneli */}
      <FilterPanel
        filters={filters}
        onFilterChange={handleFilterChange}
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
      />
      {}
      {error && <ErrorMessage message={error} />}
      {}
      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        <>
          {}
          <CharacterTable
            characters={paginatedData}
            onCharacterSelect={setSelected}
            sortField={sortField}
            sortAsc={sortAsc}
            onSort={handleSort}
          />
          {}
          <Pagination
            currentPage={page}
            onPageChange={setPage}
            hasPrev={page > 1}
            hasNext={page < totalPages}
          />
        </>
      )}
      {/* Karakter detay modalı */}
      {selected && <CharacterDetail character={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;
