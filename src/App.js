import React, { useState } from "react";
import CategorySelection from "./components/CategorySelection";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Header from "./components/Header";
import questionsData from "./data/questions.json";
import "./styles/global.css";
import "./styles/quiz.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(null);
  return (
    <div className="app">
      <Header userName={selectedCategory?.userName} />
      {!selectedCategory && !score && (
        <CategorySelection
          categories={questionsData.categories}
          onSelect={setSelectedCategory}
        />
      )}

      {selectedCategory && !score && (
        <Quiz
          category={selectedCategory}
          onComplete={(finalScore) => setScore(finalScore)}
        />
      )}

      {score && (
        <Result
          score={score}
          onRestart={() => {
            setScore(null);
            setSelectedCategory(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
