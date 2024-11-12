import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question1() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextClick = () => {
    // Only navigate if the selected answer is "25/12"
    if (selectedAnswer === "25/12") {
      alert("Good start! It is deceMber 25th!");
      navigate("/question2");
    } else {
      alert("Ehhhhhhhh wrong 😡! please be serious and lock in rn bruh");
    }
  };

  return (
    <div>
      <div className="Questionbox">
      <h2>Question 1: When did we go to Korea last year 🇰🇷?</h2>
        <label>
          <input
            type="radio"
            name="question1"
            value="26/12"
            onChange={handleAnswerChange}
          />{" "}
          26/12
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="27/12"
            onChange={handleAnswerChange}
          />{" "}
          27/12
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="28/12"
            onChange={handleAnswerChange}
          />{" "}
          28/12
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="25/12"
            onChange={handleAnswerChange}
          />{" "}
          25/12
        </label>
      </div>
      <button type = "submit" onClick={handleNextClick}>Submit Answer</button>
    </div>
  );
}

export default Question1;