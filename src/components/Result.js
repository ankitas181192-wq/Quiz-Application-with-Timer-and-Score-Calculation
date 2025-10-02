import React from "react";

function Result({ score, onRestart }) {
  const percentage = (score.correct / score.total) * 100;
  let message = "";
  if (percentage >= 80) message = "Great job!";
  else if (percentage >= 60) message = "Well done!";
  else message = "Keep practicing!";

  return (
    <div className="result">
      <h2>{percentage >= 80 ? "🎉 CONGRATULATION" : "🙂 Keep Practicing!"}</h2>
      <p>Your Score: {percentage.toFixed(0)}%</p>
      <p>{message}</p>

      <p>
        Out of {score.total} questions <br />✅ {score.correct} Correct <br />❌{" "}
        {score.incorrect} Incorrect <br />⏳ {score.unanswered} Unanswered
      </p>

      <button onClick={onRestart}>Retake Quiz</button>
    </div>
  );
}

export default Result;
