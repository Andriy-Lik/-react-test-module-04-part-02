import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppStickers } from 'components/AppStickers';
import { DogApp } from './components/Dog/DogApp';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStickers />
    <DogApp />
    <GlobalStyle />
  </React.StrictMode>
);
