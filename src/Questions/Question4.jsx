import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question4({ onQuizCompleted }) {
    const navigate = useNavigate(); // Use navigate hook
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.question4.value.toLowerCase() === "ngoc tin") {
        alert("Damn you still remember him!? It is indeed ngoc tIn 🤡!");
        onQuizCompleted(); // Call this function when quiz is completed correctly
        navigate("/Question5"); // Redirect to the surprise video page
      } else {
        alert("You don't remember??????? It's that one guy that now sell tuna's eye bruh 🙄");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="Questionbox">
          <label>Question 4: Who was that one guy that made you tiramisu in 9th grade 🍰 ?</label>
          <input type="text" name="question4" required />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }

export default Question4;
