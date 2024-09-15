// src/pages/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'What is your return policy?', answer: 'Our return policy lasts 30 days.' },
    { id: 2, question: 'Do you ship internationally?', answer: 'Yes, we ship worldwide.' },
  ]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);

  // Handle input changes for creating a new FAQ
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  // Add a new FAQ
  const handleAddFaq = (e) => {
    e.preventDefault();
    if (newFaq.question && newFaq.answer) {
      setFaqs([...faqs, { id: Date.now(), ...newFaq }]);
      setNewFaq({ question: '', answer: '' });
    }
  };

  // Edit an existing FAQ
  const handleEditFaq = (id) => {
    const faqToEdit = faqs.find((faq) => faq.id === id);
    setEditingFaq(faqToEdit);
  };

  // Save the edited FAQ
  const handleSaveEdit = () => {
    setFaqs(faqs.map((faq) => (faq.id === editingFaq.id ? editingFaq : faq)));
    setEditingFaq(null);
  };

  // Handle input changes for editing an FAQ
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingFaq({ ...editingFaq, [name]: value });
  };

  // Delete an FAQ
  const handleDeleteFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions (FAQ)</h1>

      <form className="faq-form" onSubmit={handleAddFaq}>
        <input
          type="text"
          name="question"
          placeholder="Enter question"
          value={newFaq.question}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="answer"
          placeholder="Enter answer"
          value={newFaq.answer}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" className="add-faq-btn">Add FAQ</button>
      </form>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            {editingFaq && editingFaq.id === faq.id ? (
              <>
                <input
                  type="text"
                  name="question"
                  value={editingFaq.question}
                  onChange={handleEditInputChange}
                />
                <textarea
                  name="answer"
                  value={editingFaq.answer}
                  onChange={handleEditInputChange}
                ></textarea>
                <button onClick={handleSaveEdit} className="save-btn">Save</button>
              </>
            ) : (
              <>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
                <button onClick={() => handleEditFaq(faq.id)} className="edit-btn">Edit</button>
                <button onClick={() => handleDeleteFaq(faq.id)} className="delete-btn">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
