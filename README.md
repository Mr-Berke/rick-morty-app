# Rick & Morty Karakterleri Uygulaması

Bu proje, Rick and Morty API'sini kullanarak karakterleri listeleyen, filtreleyen ve sıralayan bir React web uygulamasıdır.

## Özellikler

- Tüm karakterleri listeleme
- İsme, türe, duruma ve cinsiyete göre filtreleme
- Alfabetik sıralama (artan/azalan)
- Sayfalama
- Detaylı karakter bilgisi
- Modern ve modüler dosya yapısı

## Kurulum

### 1. Depoyu Klonlayın

```sh
git clone https://github.com/kullanici-adi/rick-morty-app.git
cd rick-morty-app
```

### 2. Bağımlılıkları Yükleyin

```sh
npm install
```

### 3. Uygulamayı Başlatın

```sh
npm start
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## Proje Yapısı

```
src/
├── components/
│   ├── CharacterTable/
│   ├── CharacterDetail/
│   ├── FilterPanel/
│   ├── Pagination/
│   └── ErrorMessage/
├── services/
├── utils/
├── App.js
├── App.css
├── index.js
└── index.css
```

## API

- [https://rickandmortyapi.com/](https://rickandmortyapi.com/)

## Lisans

MIT
