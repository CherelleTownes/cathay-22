import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  position: fixed;
  z-index: 2;
`;

const Nav = styled.nav`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 3;
`;

const Button = styled.button`
  /* Ask UX team for styles */
`;

const Text = styled.p`
  position: absolute;
  bottom: 5px;
  left: 5px;
  z-index: 3;
`;

export default function Pdf({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const isMobile = useMediaQuery({ query: '(max-width: 414px)' });

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);
  const goToPrevPage = () => setPageNumber((prevState) => prevState - 1);
  const goToNextPage = () => setPageNumber((prevState) => prevState + 1);

  return (
    <Container>
      <Nav>
        {pageNumber > 1 && <Button onClick={goToPrevPage}>Prev</Button>}
        {pageNumber < numPages && <Button onClick={goToNextPage}>Next</Button>}
      </Nav>

      <div style={{ width: isMobile ? 300 : 600 }}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          renderMode={'svg'}
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        >
          <Page
            pageNumber={pageNumber}
            loading={'Loading'}
            width={isMobile ? 300 : 600}
          />
        </Document>
      </div>

      <Text>
        Page {pageNumber} of {numPages}
      </Text>
    </Container>
  );
}
