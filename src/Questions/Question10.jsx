import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question10({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question10.value.toLowerCase() === "kansai") {
        alert("Morning exercise makes that airport more memorable than ever. It is Kansai 🏃‍♀️💨!");
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/FinalQuestion"); // Redirect to the surprise video page
      } else {
        alert("Mam'am I want you to be for real with me right now. Contact Gau if you still can't get it.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Question 10: Which airport did Gau forget the totebag  ✈️?</label>
          <input type="text" name="question10" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question10;
