import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Question5() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextClick = () => {
    if (selectedAnswer === "rock") {
      alert("Should've put rock into it lowkey but you got it right! It is roCk 🪨!");
      navigate("/question6");
    } else {
      alert("People don't remember what they did that hurt others smh 🤦‍♀️. Try again.");
    }
  };

  return (
    <div >
      <div className="Questionbox">
      <h2>Question 5: What did you NOT put into Khanh Vy's shoes 😈?</h2>
        <label>
          <input
            type="radio"
            name="question5"
            value="soap"
            onChange={handleAnswerChange}
          />{" "}
          soap
        </label>
        <label>
          <input
            type="radio"
            name="question5"
            value="glue"
            onChange={handleAnswerChange}
          />{" "}
          glue
        </label>
        <label>
          <input
            type="radio"
            name="question5"
            value="leaves"
            onChange={handleAnswerChange}
          />{" "}
          leaves
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="rock"
            onChange={handleAnswerChange}
          />{" "}
          rock
        </label>
      </div>
      <button type = "submit" onClick={handleNextClick}>Submit Answer</button>
    </div>
  );
}

export default Question5;