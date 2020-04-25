import React from 'react';
import Header from './components/Header';
import GlobalStyle from './components/styles/GlobalStyle';
import PDF from './components/PDF';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <h1>hello</h1>
      <a href="tel:+1-347-276-0169">Test</a>
      <PDF />
    </div>
  );
}

export default App;
