import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./PdfViewer.css";

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js', 
  import.meta.url
).toString();

const MyPdfViewer = ({ myFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [speakingSentenceIndex, setSpeakingSentenceIndex] = useState(null);
  const [pausedAtSentenceIndex, setPausedAtSentenceIndex] = useState(null);
  const [language, setLanguage] = useState("en");

  const translateToGujarati = async (text) => {
    // Placeholder translation function
    return text;
  };

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const loadingTask = pdfjs.getDocument(myFile);
        const pdf = await loadingTask.promise;

        setNumPages(pdf.numPages);

        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();
        const rawText = content.items.map((item) => item.str).join(" ");

        const normalizedText = normalizeText(rawText);

        setText(normalizedText);

        if (language === "gu") {
          const gujaratiTranslation = await translateToGujarati(normalizedText);
          setTranslatedText(gujaratiTranslation);
        } else {
          setTranslatedText(normalizedText);
        }
      } catch (error) {
        console.error("PDF loading error:", error);
      }
    };

    loadPdf();
  }, [myFile, pageNumber, language]);

  const speakText = () => {
    const sentences = getTextSentences(translatedText);
    let i = pausedAtSentenceIndex !== null ? pausedAtSentenceIndex : 0;

    const speakSentence = () => {
      if (i < sentences.length) {
        setSpeakingSentenceIndex(i);
        const utterance = new SpeechSynthesisUtterance(sentences[i]);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        const voices = window.speechSynthesis.getVoices();
        const languageCode = language === "gu" ? "gu-IN" : "en-US";
        const selectedVoice = voices.find(voice => voice.lang === languageCode);

        if (selectedVoice) {
          utterance.voice = selectedVoice;
        } else {
          console.warn(`Voice for ${languageCode} not available, using default voice.`);
        }

        utterance.onend = () => {
          i++;
          speakSentence();
        };
        window.speechSynthesis.speak(utterance);
      }
    };

    speakSentence();
  };

  const stopSpeech = () => {
    setPausedAtSentenceIndex(speakingSentenceIndex);
    window.speechSynthesis.cancel();
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div style={{ height: "100%" }} className="pdf-viewer-container">
      <nav className="pdf-viewer-nav">
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Prev</button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
        <button onClick={speakText}>Speak</button>
        <button onClick={stopSpeech}>Stop</button>

        <select 
          onChange={(e) => setLanguage(e.target.value)} 
          value={language}
        >
          <option value="en">English</option>
          <option value="gu">Gujarati</option>
        </select>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>

      <div className="pdf-viewer-content">
        <Document 
          file={myFile} 
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
};

function getTextSentences(text) {
  return text.split(".").filter((sentence) => sentence.trim() !== "");
}

function normalizeText(text) {
  const normalizedText = text.replace(/\s+/g, " ");
  const correctedText = normalizedText.replace(/(\w)(\s+)/g, "$1$2");
  return correctedText;
}

export default MyPdfViewer;