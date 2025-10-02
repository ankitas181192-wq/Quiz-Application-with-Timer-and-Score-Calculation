import React from "react";
import "../styles/quizRule.css";

export default function QuizRules({ setShowRules }) {
  return (
    <div className="rules-page">
      <header className="rules-topbar">
        <div className="brand-mark">
          <span className="brand-quiz">QUIZ</span>
          <span className="brand-mania">Mania</span>
        </div>
      </header>

      <div className="rules-backdrop" />

      <main className="rules-modal" role="dialog" aria-labelledby="rules-title">
        <button
          className="rules-close"
          aria-label="Close rules"
          onClick={() => setShowRules(false)}
          type="button"
        >
          ×
        </button>

        <h1 id="rules-title" className="rules-title">
          Quiz rules
        </h1>

        <section className="rules-section">
          <div className="section-ribbon">10-Second Timer</div>
          <ul className="rules-list">
            <li>Each question comes with a 10-second timer.</li>
            <li>
              If you don’t answer within the time limit, the app will
              automatically move to the next question.
            </li>
          </ul>
        </section>

        <section className="rules-section">
          <div className="section-ribbon">Manual Navigation</div>
          <ul className="rules-list">
            <li>
              You can navigate to the next question manually before the timer
              expires.
            </li>
            <li>
              Use the <b>“Next”</b> button to move ahead if you’re ready before
              the timer runs out.
            </li>
          </ul>
        </section>

        <section className="rules-section">
          <div className="section-ribbon">
            Final Score and Performance Message
          </div>
          <ul className="rules-list">
            <li>
              After all questions are answered, your final score will be
              displayed.
            </li>
            <li>
              Based on your performance, you will receive a personalized
              message:
              <ul className="rules-list nested">
                <li>
                  Great job!: If you score <b>above 80%</b>.
                </li>
                <li>
                  Well done!: If you score <b>between 60% and 80%</b>.
                </li>
                <li>
                  Keep practicing!: If you score <b>below 60%</b>.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
