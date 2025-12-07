import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./AIResponsePage.css";

function AIResponsePage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Replace with LM Studio/OpenAI call later
    setResponse(`AI says: ${input}`);
  };
  const location = useLocation();
  const { question, difficulty } = location.state || {};


  return (
    
      
    <div className="ai-wrapper">
        {/* Top Header */}
      <div className="ctq-header">
        <button className="ctq-back" onClick={() => navigate("/")}>
          &lt;
        </button>
        <h2>Create Trivia Questions</h2>
      </div>

      {/* Prompt */}
      <div className="ai-prompt-header">
        <h2>{question || "No question received."}</h2>
        {difficulty && <p className="ai-difficulty">Difficulty: {difficulty}</p>}
      </div>


      {/* Response Box */}
      <div className="ai-response-box">
        <p>{response || "AI Response Appears Here"}</p>
      </div>

      {/* Stats Section */}
      <div className="ai-stats">
        <p><strong>Word Count:</strong> 152</p>
        <p><strong>Character Count:</strong> 760</p>
        <p><strong>Characters Excl. Spaces:</strong> 609</p>
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
        <button>Rephrase</button>
        <button>Save to Draft</button>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => setInput("")}>Cancel</button>
      </div>

      {/* Dashboard Tab */}
      <div className="ai-dashboard-tab">
        <button onClick={() => navigate("/")}>Dashboard</button>
      </div>
    </div>
  );
}

export default AIResponsePage;
