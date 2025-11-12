import React, { useState } from "react";
import "./CreateTriviaQuestion.css";
import { useNavigate } from "react-router-dom";

function CreateTriviaQuestion() {
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  // Clear form
  const handleClear = () => {
    setQuestion("");
    setDifficulty("");
  };

  // Submit (placeholder)
  const handleSubmit = () => {
  if (!question || !difficulty) {
    alert("Please enter a question and select difficulty.");
    return;
  }

  navigate("/ai-response", {
    state: {
      question,
      difficulty,
    },
  });
};


  return (
    //////////////////// header
    <div className="ctq-wrapper">
      {/* Top Header */}
      <div className="ctq-header">
        <button className="ctq-back" onClick={() => navigate("/")}>
          &lt;
        </button>
        <h2>Create Trivia Questions</h2>
      </div>

      {/* Question Input */}
      <div className="ctq-section">
        <label className="ctq-label">Type your trivia question here...</label>
        <textarea
          className="ctq-textarea"
          placeholder="What is the capital of France?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <p className="ctq-tip">
          Tip: Keep questions short and clear. Example: Who wrote Hamlet?
        </p>
      </div>

      {/* Preset Questions */}
      <div className="ctq-pane dark">
        <label className="ctq-pane-label">Select a preset question</label>
        <div className="ctq-button-row">
          <button onClick={() => setQuestion("What is the capital of France?")}>
            Preset Question 1
          </button>
          <button onClick={() => setQuestion("Who wrote Hamlet?")}>
            Preset Question 2
          </button>
          <button onClick={() => setQuestion("What is 2 + 2?")}>
            Preset Question 3
          </button>
        </div>
      </div>

      {/* Topics */}
      <div className="ctq-pane orange">
        <label className="ctq-pane-label">Question Topic</label>
        <div className="ctq-button-row">
          <button>History</button>
          <button>Science</button>
          <button>Literature</button>
          <button>Math</button>
          <button>Pop Culture</button>
        </div>
      </div>

      {/* Difficulty */}
      <div className="ctq-pane dark">
        <label className="ctq-pane-label">Difficulty</label>
        <p className="ctq-subtext">Select Difficulty Level</p>
        <div className="ctq-difficulty-row">
          <div className="circle-wrapper">
            <button
              className={`circle easy ${difficulty === "easy" ? "selected" : ""}`}
              onClick={() => setDifficulty("easy")}
            />
          </div>
          <div className="circle-wrapper">
            <button
              className={`circle medium ${difficulty === "medium" ? "selected" : ""}`}
              onClick={() => setDifficulty("medium")}
            />
          </div>
          <div className="circle-wrapper">
            <button
              className={`circle hard ${difficulty === "hard" ? "selected" : ""}`}
              onClick={() => setDifficulty("hard")}
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="ctq-section">
        <label className="ctq-label black">Preview</label>
        <div className="ctq-preview-box">
          <p>{question || "Your question will appear here..."}</p>
          {difficulty && <p>Difficulty: {difficulty}</p>}
        </div>
        <p className="ctq-tip">
          Preview of how your question will appear to classmates.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="ctq-actions">
        <button className="action draft" onClick={() => console.log("Draft saved:", { question, difficulty })}>
          Save as Draft
        </button>
        <button className="action clear" onClick={handleClear}>
          Clear
        </button>
        <button className="action submit" onClick={handleSubmit}>
          Submit to AI
        </button>
      </div>

      {/* Dashboard */}
      <div className="ctq-dashboard">
        <div className="ctq-separator" />
        <button className="dashboard-icon" onClick={() => navigate("/")}>🏠</button>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

export default CreateTriviaQuestion;
