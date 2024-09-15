import React from 'react';
import './ChatbotPage.css';

const fruits = [
  { id: 1, name: 'Apple', benefits: 'Rich in fiber and Vitamin C. Great for digestion.' },
  { id: 2, name: 'Banana', benefits: 'High in potassium and energy. A quick snack!' },
  { id: 3, name: 'Orange', benefits: 'Rich in Vitamin C. Helps boost your immunity.' },
];

const Chatbot = () => {
  return (
    <div className="container">
      <h1>Explore Fruits</h1>
      {fruits.map(fruit => (
        <div key={fruit.id} className="card" onClick={() => alert(fruit.benefits)}>
          <h3>{fruit.name}</h3>
          <p>Click to see benefits</p>
        </div>
      ))}
    </div>
  );
};

export default Chatbot;
