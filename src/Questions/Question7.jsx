import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question7({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question7.value.toLowerCase() === "nha trang") {
        alert("Trauma unlocked 😜! It is nha Trang!");
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/Question8"); // Redirect to the surprise video page
      } else {
        alert("If you for real don't remember call dad for help because it is just disappointing atp.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Question 7: Where were we when TIS called dad to tell him about your entrance exam scores 🤙? Specify the city</label>
          <input type="text" name="question7" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question7;
