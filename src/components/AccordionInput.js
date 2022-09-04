import React from 'react';
import { useState } from 'react';

const AccordionInput = ({ addItem }) => {
  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title: questionInput, content: answerInput });
  };

  return (
    <div className="ui styled segment" style={{ maxWidth: '600px' }}>
      <form className="ui form">
        <h4 className="ui header">Add a question to the Accordion here:</h4>
        <div className="two fields" style={{ flexDirection: 'column' }}>
          <div className="field" style={{ width: '100%' }}>
            <label htmlFor="question-input">Question:</label>
            <input
              type="text"
              id="question-input"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
            />
          </div>
          <div className="field" style={{ width: '100%' }}>
            <label htmlFor="answer-input">Answer:</label>
            <textarea
              id="answer-input"
              rows="4"
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
            />
          </div>
        </div>
        <div className="ui button" tabIndex={0} onClick={handleSubmit}>
          Submit Question
        </div>
      </form>
    </div>
  );
};

export default AccordionInput;
