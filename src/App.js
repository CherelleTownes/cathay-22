import React from 'react';
import GlobalStyle from './components/styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Cathay from './components/Cathay';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Popular />
      <Cathay />
      <Location />
      <Footer />
    </>
  );
}

export default App;
