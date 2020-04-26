import React from 'react';
import GlobalStyle from './components/styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Cathay from './components/Cathay';
import Special from './components/Special';
import About from './components/About';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Popular />
      <Cathay />
      <Special />
      <About />
    </>
  );
}

export default App;
