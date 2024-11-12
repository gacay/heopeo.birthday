import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question8({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question8.value.toLowerCase() === "28 mai van ngoc") {
        alert("Canh cua than ky cua doraemon to our exciting traumatic journey 🚪. It is 28 mAi van ngoc!");
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/Question9"); // Redirect to the surprise video page
      } else {
        alert("Your spelling is wrong or something because there is no way you get this wrong 👿");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Question 8: What is the address of the first place we rent in Saigon 🏡? Example format: 40 hung vuong</label>
          <input type="text" name="question8" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question8;
