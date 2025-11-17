import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTriviaQuestion.css";

const presetQuestions = [
  "What is the capital of France?",
  "Who wrote Hamlet?",
  "What is 2 + 2?",
];

function CreateTriviaQuestion() {
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleClear = () => {
    setQuestion("");
    setDifficulty("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !difficulty) {
      alert("Please enter a question and select difficulty.");
      return;
    }
    navigate("/ai-response", {
      state: { question, difficulty },
    });
  };

  return (
    <div className="ctq-wrapper">
      {/* Header */}
      <header className="ctq-header">
        <button className="ctq-back" onClick={() => navigate("/")}>
          &lt;
        </button>
        <h2>Create Trivia Question</h2>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Question Input */}
        <div className="ctq-section">
          <label className="ctq-label black">Type your trivia question here...</label>
          <textarea
            placeholder="What is the capital of France?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="ctq-textarea"
          />
          <p className="ctq-tip">
            Tip: Keep questions short and clear. Example: Who wrote Hamlet?
          </p>
        </div>

        {/* Preset Questions */}
        <div className="ctq-pane dark">
          <span className="ctq-pane-label">Select a preset question</span>
          <div className="ctq-button-row">
            {presetQuestions.map((q, i) => (
              <button key={i} type="button" onClick={() => setQuestion(q)}>
                Preset {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="ctq-pane orange">
          <span className="ctq-pane-label">Question Topic</span>
          <div className="ctq-button-row">
            {["History", "Science", "Literature", "Math", "Pop Culture"].map(
              (topic) => (
                <button key={topic} type="button">
                  {topic}
                </button>
              )
            )}
          </div>
        </div>

        {/* Difficulty */}
        <div className="ctq-pane dark">
          <span className="ctq-pane-label">Difficulty</span>
          <p className="ctq-subtext">Select Difficulty Level</p>
          <div className="ctq-difficulty-row">
            {["easy", "medium", "hard"].map((level) => (
              <div
                key={level}
                className={`circle-wrapper ${
                  difficulty === level ? "selected" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setDifficulty(level)}
                  className={`circle ${level}`}
                ></button>
              </div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="ctq-section">
          <span className="ctq-label black">Preview</span>
          <div className="ctq-preview-box">
            <p>{question || "Your question will appear here..."}</p>
            {difficulty && <p>Difficulty: {difficulty}</p>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ctq-actions">
          <button
            type="button"
            onClick={() => console.log("Draft saved:", { question, difficulty })}
            className="action draft"
          >
            Save as Draft
          </button>
          <button type="button" onClick={handleClear} className="action clear">
            Clear
          </button>
          <button type="submit" onClick={() => navigate("/AIResponsePage")} className="action submit">
            Submit to AI
          </button>
        </div>

        {/* Dashboard */}
        <div className="ctq-dashboard">
          <div className="ctq-separator"></div>
          <button type="button" onClick={() => navigate("/")} className="dashboard-icon">
            🏠
          </button>
          <p>Dashboard</p>
        </div>
      </form>
    </div>
  );
}

export default CreateTriviaQuestion;
