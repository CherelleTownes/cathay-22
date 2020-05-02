import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';

const Container = styled.div`
  position: fixed;
`;

const Nav = styled.nav`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 2;
`;

const Button = styled.button``;

const Text = styled.p`
  position: absolute;
  bottom: 5px;
  left: 5px;
  z-index: 2;
`;

export default function Pdf({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => setPageNumber((prevState) => prevState - 1);

  const goToNextPage = () => setPageNumber((prevState) => prevState + 1);

  return (
    <Container>
      <Nav>
        <Button onClick={goToPrevPage}>Prev</Button>
        <Button onClick={goToNextPage}>Next</Button>
      </Nav>

      <div style={{ width: 600 }}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        >
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>

      <Text>
        Page {pageNumber} of {numPages}
      </Text>
    </Container>
  );
}
