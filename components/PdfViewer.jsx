import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const MyPdfViewer = ({ myFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [speakingSentenceIndex, setSpeakingSentenceIndex] = useState(null);
  const [pausedAtSentenceIndex, setPausedAtSentenceIndex] = useState(null);
  const [language, setLanguage] = useState("en"); // State for language selection

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(myFile);
      const pdf = await loadingTask.promise;

      setNumPages(pdf.numPages);

      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const rawText = content.items.map((item) => item.str).join(" ");

      const normalizedText = normalizeText(rawText);

      setText(normalizedText);

      if (language === "gu") {
        // Translate the extracted text to Gujarati
        const gujaratiTranslation = await translateToGujarati(normalizedText);
        setTranslatedText(gujaratiTranslation);
      } else {
        setTranslatedText(normalizedText); // Set the text directly for English
      }
    };

    loadPdf();
  }, [myFile, pageNumber, language]);

  const speakText = () => {
    const sentences = getTextSentences(translatedText); // Use translated or original text
    let i = pausedAtSentenceIndex !== null ? pausedAtSentenceIndex : 0;

    const speakSentence = () => {
      if (i < sentences.length) {
        setSpeakingSentenceIndex(i);
        const utterance = new SpeechSynthesisUtterance(sentences[i]);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        const voices = window.speechSynthesis.getVoices();
        const languageCode = language === "gu" ? "gu-IN" : "en-US"; // Set language code
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
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
        <button onClick={speakText}>Speak</button>
        <button onClick={stopSpeech}>Stop</button>

        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          
        </select>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>

      <div className="pdf-viewer-content">
        <Document file={myFile} onLoadSuccess={onDocumentLoadSuccess}>
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