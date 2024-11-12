import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question6({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question6.value.toLowerCase() === "busan") {
        alert("I'm glad you still remember lmao we never post it tho. It was in Busan!");
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/Question7"); // Redirect to the surprise video page
      } else {
        alert("Bruh we took so long under that windy ass weather just for you to forget??????");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Question 6: Where did we film the douyin video with Vy? Specify the city.</label>
          <input type="text" name="question6" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question6;
