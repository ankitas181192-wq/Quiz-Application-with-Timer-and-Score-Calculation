import React, { useState } from "react";

function Question({ question, onAnswer, onSkip }) {
  const [selected, setSelected] = useState(null);

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
                value={idx}
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button disabled={selected === null} onClick={() => onAnswer(selected)}>
          Next
        </button>
        <button onClick={onSkip}>Skip this question</button>
      </div>
    </div>
  );
}

export default Question;
