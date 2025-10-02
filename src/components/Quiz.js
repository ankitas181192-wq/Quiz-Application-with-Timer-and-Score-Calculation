import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Question from "./Question";

function Quiz({ category, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(category.selected.questions[0].timeLimit);

  const currentQuestion = category.selected.questions[currentIndex];

  useEffect(() => {
    if (time === 0) {
      nextQuestion();
    }
  }, [time]);

  const handleAnswer = (answerIndex) => {
    setAnswers([...answers, { qid: currentQuestion.id, answer: answerIndex }]);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < category.selected.questions.length) {
      setCurrentIndex(currentIndex + 1);
      setTime(category.selected.questions[currentIndex + 1].timeLimit);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correct = 0,
      incorrect = 0,
      unanswered = 0;

    category.selected.questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (!ans) {
        unanswered++;
      } else if (ans.answer === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    onComplete({
      correct,
      incorrect,
      unanswered,
      total: category.selected.questions.length,
    });
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <span>
          {currentIndex + 1}/{category.selected.questions.length}
        </span>
        <Timer time={time} setTime={setTime} />
      </div>

      <Question
        question={currentQuestion}
        onAnswer={handleAnswer}
        onSkip={nextQuestion}
      />
    </div>
  );
}

export default Quiz;
