import React, { useState } from 'react';
import './TranslatorPage.css';
import translations from './translations.json'; // Adjust path if needed

const TranslatorPage = () => {
  const [language, setLanguage] = useState('en'); // Default to English
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleTranslate = () => {
    const translated = translations[language][text] || 'Translation not found use these word "hello", "goodbye" ,"welcome","thank you","sorry","please","yes","no","good morning","good night"';
    setTranslatedText(translated);
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <select onChange={handleLanguageChange} value={language}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="jp">Japanese</option>
      </select>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
      />
      <button onClick={handleTranslate}>Translate</button>
      <div className="translation-output">
        <h2>Translation:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslatorPage;
