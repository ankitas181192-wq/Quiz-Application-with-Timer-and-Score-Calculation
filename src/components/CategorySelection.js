import React, { useState } from "react";

function CategorySelection({ categories, onSelect }) {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(null);
  console.log(selected);
  console.log(name);

  return (
    <div className="category-selection">
      <h1 className="fontSize64">
        Welcome to <span className="brand">QuizMania</span>
      </h1>
      <div className="category-selection-inner-container">
        <div className="mar28 infoContainer">
          <p className="noPad">
            Please read all the rules about this quiz before you start.
          </p>
          <a className="brand notBold customPointer">Quiz Rules</a>
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
    </div>
  );
}

export default CategorySelection;
