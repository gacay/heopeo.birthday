import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Question2({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question2.value.toLowerCase() === "red") {
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/Question3"); // Redirect to the surprise video page
      } else {
        alert("Try again! Some answers are incorrect.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question 2: What is Selena's favorite food?</label>
          <input type="text" name="question2" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question2;
