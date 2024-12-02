import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";
import "./PdfViewer.css";

// Use a local copy of the worker
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

const MyPdfViewer = ({ myFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    if (myFile) {
      if (myFile.startsWith("http")) {
        axios.get(myFile, { responseType: "blob" })
          .then(response => {
            const fileURL = URL.createObjectURL(response.data);
            myFile = fileURL;
          })
          .catch(error => {
            console.error("Error fetching PDF:", error);
            setUseIframe(true);
          });
      }
    }
  }, [myFile]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
    setUseIframe(true);
  };

  const onPreviousPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  }

  const onNextPage = () => {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
  }

  if (useIframe) {
    return (
      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(myFile)}&embedded=true`}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="PDF Viewer"
      ></iframe>
    );
  }

  return (
    <div className="pdf-viewer">
      <Document
        file={myFile}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="pdf-controls">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div>
          <button onClick={onPreviousPage} disabled={pageNumber <= 1}>Previous</button>
          <button onClick={onNextPage} disabled={pageNumber >= numPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MyPdfViewer;

