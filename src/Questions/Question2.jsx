import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question2({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question2.value.toLowerCase() === "popeyes") {
        alert("Thank god you get it right. It is poPeYes 😋!");
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/Question3"); // Redirect to the surprise video page
      } else {
        alert("There's no way how can you get this wrong. Try again smh ");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Question 2: What is that one chicken place called that we always get 6 pieces on Wednesday 🍗?</label>
          <input type="text" name="question2" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question2;
