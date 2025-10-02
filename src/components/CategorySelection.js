import React, { useState } from "react";
import QuizRules from "./QuizRule";

function CategorySelection({ categories, onSelect }) {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(null);
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="category-selection">
      {showRules ? (
        <QuizRules setShowRules={setShowRules} />
      ) : (
        <>
          <h1 className="fontSize64">
            Welcome to <span className="brand notbold">Quiz</span>
            <span className="brand">Mania</span>
          </h1>
          <div className="category-selection-inner-container">
            <div className="mar28 infoContainer">
              <p className="noPad">
                Please read all the rules about this quiz before you start.
              </p>
              <p
                className="brand notBold customPointer noPad"
                onClick={() => setShowRules(true)}
              >
                Quiz Rules
              </p>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Please select topic to continue</p>
            <div className="categories">
              {categories.map((cat) => (
                <div className="categoryOptionContainer">
                  <label class="topic-card">
                    <input
                      type="radio"
                      name="topic"
                      value={cat.id}
                      onChange={() => setSelected(cat.id)}
                    />
                    <span class="radio"></span>
                    <span class="topic-text">{cat.name}</span>
                  </label>
                </div>
              ))}
            </div>

            <button
              disabled={!name || !selected}
              onClick={() =>
                onSelect({
                  selected: categories.find((cat) => cat.id === selected),
                  username: name,
                })
              }
            >
              Start Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CategorySelection;
