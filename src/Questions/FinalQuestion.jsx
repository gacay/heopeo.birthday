import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function FinalQuestion({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.FinalQuestion.value.toLowerCase() === "kimbap city") {
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/QR-Code"); // Redirect to the surprise video page
      } else {
        alert("Try again! Some answers are incorrect.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Final Question: What is that one place we always order from in Vietnam ☁️ 🌳? 
            <br /> Hint: have you been paying attention to all the pop up window when you get it right 🤔 Time to do a little rewind and get the letters rearranged! Have fun hehe 😈</label>
          <input type="text" name="FinalQuestion" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default FinalQuestion;
