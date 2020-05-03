import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class PDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Document
          file="../../assets/menus/Luncheon_Menu.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
  export default PDF;
