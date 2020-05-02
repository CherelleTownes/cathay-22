import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { pdfjs } from 'react-pdf';

ReactDOM.render(<App />, document.getElementById('root'));

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
