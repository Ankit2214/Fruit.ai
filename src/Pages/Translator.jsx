// src/pages/Translator.jsx
import React, { useState } from 'react';
import './Translator.css'; // Importing CSS for styling

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('hindi'); // Default language is set to Hindi

  // Mock translation function to simulate the behavior
  const handleTranslate = () => {
    if (inputText.trim() === '') {
      setTranslatedText('Please enter some text to translate');
      return;
    }
    // Simulating translation for demo purposes
    const translations = {
      hindi: 'यह हिंदी में अनुवादित है',
      french: 'Ceci est traduit en français',
      spanish: 'Esto está traducido al español',
      german: 'Dies ist ins Deutsche übersetzt',
    };
    setTranslatedText(translations[language] || 'Translation unavailable');
  };

  return (
    <div className="translator-container">
      <h1>Text Translator</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
        className="input-box"
      ></textarea>
      
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select">
        <option value="hindi">Hindi</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
        <option value="german">German</option>
      </select>
      
      <button onClick={handleTranslate} className="translate-button">
        Translate
      </button>

      {translatedText && <p className="translated-text">{translatedText}</p>}
    </div>
  );
};

export default Translator;
