'use client'

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDocument } from 'pdf-lib';
import { Eye, EyeOff, Eraser, PenTool, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import './PdfEditor.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
import { pdfjs as pdfjs2 } from 'react-pdf';
pdfjs2.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const PDFEditor = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [mode, setMode] = useState('view');
  const [annotations, setAnnotations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);
        const response = await fetch(pdfUrl);
        if (!response.ok) throw new Error('Failed to fetch PDF');
        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (pdfUrl) {
      loadPdf();
    }
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handlePageChange = (offset) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return Math.max(1, Math.min(newPageNumber, numPages));
    });
  };

  const handleClick = (event) => {
    if (mode === 'view') return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newAnnotation = {
      type: mode,
      x,
      y,
      text: mode === 'text' ? prompt('Enter text:') : null
    };

    if (mode === 'text' && !newAnnotation.text) return;
    setAnnotations([...annotations, newAnnotation]);
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(pdfUrl);
      const arrayBuffer = await response.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();
      const page = pages[pageNumber - 1];

      // Apply annotations
      annotations.forEach(annotation => {
        switch (annotation.type) {
          case 'blur':
            page.drawRectangle({
              x: annotation.x,
              y: page.getHeight() - annotation.y,
              width: 100,
              height: 20,
              color: { r: 1, g: 1, b: 1 },
              opacity: 0.8,
            });
            break;
          case 'erase':
            page.drawRectangle({
              x: annotation.x,
              y: page.getHeight() - annotation.y,
              width: 50,
              height: 20,
              color: { r: 1, g: 1, b: 1 },
            });
            break;
          case 'text':
            page.drawText(annotation.text, {
              x: annotation.x,
              y: page.getHeight() - annotation.y,
              size: 12,
            });
            break;
        }
      });

      const modifiedPdfBytes = await pdfDoc.save();
      const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (err) {
      console.error('Error saving PDF:', err);
      alert('Failed to save changes. Please try again.');
    }
  };

  if (loading) {
    return <div className="pdf-loading">Loading PDF...</div>;
  }

  if (error) {
    return <div className="pdf-error">Error: {error}</div>;
  }

  return (
    <div className="pdf-editor">
      <div className="pdf-toolbar">
        <button
          className={`toolbar-button ${mode === 'view' ? 'active' : ''}`}
          onClick={() => setMode('view')}
        >
          <Eye className="w-5 h-5" />
          <span>View</span>
        </button>
        <button
          className={`toolbar-button ${mode === 'blur' ? 'active' : ''}`}
          onClick={() => setMode('blur')}
        >
          <EyeOff className="w-5 h-5" />
          <span>Blur</span>
        </button>
        <button
          className={`toolbar-button ${mode === 'erase' ? 'active' : ''}`}
          onClick={() => setMode('erase')}
        >
          <Eraser className="w-5 h-5" />
          <span>Erase</span>
        </button>
        <button
          className={`toolbar-button ${mode === 'text' ? 'active' : ''}`}
          onClick={() => setMode('text')}
        >
          <PenTool className="w-5 h-5" />
          <span>Add Text</span>
        </button>
        <button className="toolbar-button" onClick={saveChanges}>
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="pdf-container" onClick={handleClick}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => setError(error.message)}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <div className="pdf-controls">
        <button
          onClick={() => handlePageChange(-1)}
          disabled={pageNumber <= 1}
          className="control-button"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>
        <span className="page-info">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => handlePageChange(1)}
          disabled={pageNumber >= numPages}
          className="control-button"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PDFEditor;

