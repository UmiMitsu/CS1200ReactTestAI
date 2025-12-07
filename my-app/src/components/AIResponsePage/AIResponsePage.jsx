import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AIResponsePage.css";

function AIResponsePage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Replace with LM Studio/OpenAI call later
    setResponse(`AI says: ${input}`);
  };

  const location = useLocation();
  const { question, difficulty } = location.state || {};

  return (
    <>
      {/* Full-width header */}
      <div className="ai-header">
        <button className="ai-back" onClick={() => navigate("/")}>
          &lt;
        </button>
        <h2>AI Response Review</h2>
      </div>

      {/* Body wrapper */}
      <div className="ai-wrapper">
        {/* Prompt */}
        <div className="ai-prompt-header">
          <h2>{question || "No question received."}</h2>
          {difficulty && <p className="ai-difficulty">Difficulty: {difficulty}</p>}
        </div>

        {/* Textarea for user input */}
        <textarea
          className="ai-textarea"
          placeholder="Type your response here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        

        {/* Stats Section */}
        <div className="ai-stats">
          <p><strong>Word Count:</strong> {response.length ? response.split(" ").length : 0}</p>
          <p><strong>Character Count:</strong> {response.length}</p>
          <p><strong>Characters Excl. Spaces:</strong> {response.replace(/\s+/g, "").length}</p>
          <p><strong>Tone:</strong> Informative, Relaxed</p>
        </div>

        {/* Emoji Feedback */}
        <div className="ai-emoji-row">
          <button>😀</button>
          <button>😐</button>
          <button>😠</button>
          <button>👍</button>
          <button>👎</button>
        </div>

        {/* Action Buttons */}
        <div className="ai-action-buttons">
          <button className="orange">Rephrase</button>
          <button className="orange">Save to Draft</button>
          <button className="dark" onClick={handleSubmit}>Submit</button>
          <button className="dark" onClick={() => setInput("")}>Cancel</button>
        </div>

        {/* Response Box */}
        <div className="ai-response-box">
          <p>{response || "AI Response Appears Here"}</p>
        </div>

        {/* Dashboard Tab */}
        <div className="ai-dashboard-tab">
          <button onClick={() => navigate("/")}>Dashboard</button>
        </div>
      </div>
    </>
  );
}

export default AIResponsePage;