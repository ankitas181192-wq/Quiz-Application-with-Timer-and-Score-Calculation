import React, { useState } from "react";

function Question({ question, onAnswer, onSkip }) {
  const [selected, setSelected] = useState(null);
  const selectOptionHandlar = (questionId, option) => {
    setSelected((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((opt, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name={question.id}
                value={selected?.[question.id] ?? ""}
                checked={selected?.[question.id] === idx}
                onChange={() => selectOptionHandlar(question.id, idx)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button
          disabled={!(selected?.[question.id] >= 0)}
          onClick={() => onAnswer(selected)}
        >
          Next
        </button>
        <button onClick={onSkip}>Skip this question</button>
      </div>
    </div>
  );
}

export default Question;
