import React, { useState, useEffect } from 'react';
import './FaqPage.css';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    fetchFaqs();
  }, []);

  async function fetchFaqs() {
    try {
      const response = await fetch('/api/faqs'); // Update URL if needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) {
        await updateFaq(editId, question, answer);
      } else {
        await createFaq(question, answer);
      }
      fetchFaqs();
      setQuestion('');
      setAnswer('');
      setEditId(null);
    } catch (error) {
      console.error('Error submitting FAQ:', error);
    }
  }

  async function createFaq(question, answer) {
    try {
      const response = await fetch('/api/faqs', { // Update URL if needed
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer, category: 'General' })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error creating FAQ:', error);
    }
  }

  async function updateFaq(id, question, answer) {
    try {
      const response = await fetch(`/api/faqs/${id}`, { // Update URL if needed
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer, category: 'General' })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  }

  async function deleteFaq(id) {
    try {
      const response = await fetch(`/api/faqs/${id}`, { // Update URL if needed
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchFaqs();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  }

  function editFaq(id) {
    const faq = faqs.find(f => f.id === id);
    setEditId(faq.id);
    setQuestion(faq.question);
    setAnswer(faq.answer);
  }

  return (
    <div className="faq-container">
      <h1>Fruit FAQs</h1>
      <form onSubmit={handleSubmit} className="faq-form">
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Enter question about a fruit"
          required
        />
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          placeholder="Enter answer"
          required
        ></textarea>
        <button type="submit">{editId ? 'Update FAQ' : 'Add FAQ'}</button>
      </form>

      <ul className="faq-list">
        {faqs.map(faq => (
          <li key={faq.id} className="faq-item">
            <div className="faq-content">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
            <div className="faq-buttons">
              <button className="edit-button" onClick={() => editFaq(faq.id)}>Edit</button>
              <button className="delete-button" onClick={() => deleteFaq(faq.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
