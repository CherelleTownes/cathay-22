import React from 'react';
import GlobalStyle from './components/styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Cathay from './components/Cathay';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Popular />
      <Cathay />
    </>
  );
}

export default App;
