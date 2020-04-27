import React from 'react';
import GlobalStyle from './components/styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Cathay from './components/Cathay';
import Menus from './components/Menus';
import Special from './components/Special';
import Reviews from './components/Reviews';
import About from './components/About';
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
      <Menus />
      <Special />
      <Reviews />
      <About />
      <Location />
      <Footer />
    </>
  );
}

export default App;
