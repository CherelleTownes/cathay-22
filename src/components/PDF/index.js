import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file="../../assets/menus/Luncheon_Menu.pdf"
        onLoadSuccess={() => onDocumentLoadSuccess()}
      >
        <Page pageNumber={pageNum} />
      </Document>
      <p>
        Page {pageNum} of {numPages}
      </p>
    </div>
  );
}
