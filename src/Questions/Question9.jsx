import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question9() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextClick = () => {
    if (selectedAnswer === "English") {
      alert("It was doctor Brock that gave out that damn assignment 💀. It was englIsh...");
      navigate("/question10");
    } else {
      alert("I mean it's been a while so maybe you don't really remember but try again.");
    }
  };

  return (
    <div >
      <div className="Questionbox">
      <h2>Question 9: What subject did you stay up to help me with that involved making butterflies to stick onto a white canvas 🦋?</h2>
        <label>
          <input
            type="radio"
            name="question9"
            value="World History"
            onChange={handleAnswerChange}
          />{" "}
          World History
        </label>
        <label>
          <input
            type="radio"
            name="question9"
            value="Economics"
            onChange={handleAnswerChange}
          />{" "}
          Economics
        </label>
        <label>
          <input
            type="radio"
            name="question9"
            value="Geography"
            onChange={handleAnswerChange}
          />{" "}
          Geography
        </label>
        <label>
          <input
            type="radio"
            name="question9"
            value="English"
            onChange={handleAnswerChange}
          />{" "}
          English
        </label>
      </div>
      <button type = "submit" onClick={handleNextClick}>Submit Answer</button>
    </div>
    
  );
}

export default Question9;