import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Question from "./Question";

function Quiz({ category, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [time, setTime] = useState(category.selected.questions[0].timeLimit);

  const currentQuestion = category.selected.questions[currentIndex];

  useEffect(() => {
    if (time === 0) {
      nextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const handleAnswer = (answerData) => {
    nextQuestion(answerData);
  };
  const getAnswerData = (ans) => {
    if (ans === 0) {
      return "A";
    } else if (ans === 1) {
      return "B";
    } else if (ans === 2) {
      return "C";
    } else if (ans === 4) {
      return "D";
    }
  };
  const nextQuestion = (answerData) => {
    if (currentIndex + 1 < category.selected.questions.length) {
      setCurrentIndex(currentIndex + 1);
      setTime(category.selected.questions[currentIndex + 1].timeLimit);
    } else {
      calculateScore(answerData);
    }
  };

  const calculateScore = (answerData) => {
    let correct = 0,
      incorrect = 0,
      unanswered = 0;

    category.selected.questions.forEach((q) => {
      const ans = answerData[q.id];

      if (!ans) {
        unanswered++;
      } else if (getAnswerData(ans) === q.correctAnswer) {
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
