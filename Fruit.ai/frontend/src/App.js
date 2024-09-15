import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import Chatbot from './pages/ChatbotPage';
import Translator from './pages/TranslatorPage';
import Faq from './pages/FaqPage';
import About from './pages/AboutPage';
import './styles/global.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
