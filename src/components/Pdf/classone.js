import React, { Component } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button``;

export default class Pdf extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Container>
        <nav>
          <Button onClick={this.goToPrevPage}>Prev</Button>
          <Button onClick={this.goToNextPage}>Next</Button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={this.props.pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={{
              cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
              cMapPacked: true,
            }}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Container>
    );
  }
}
