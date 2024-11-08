import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import examplemp4 from './assets/examplemp4.mp4';
import Question3 from "./Questions/Question3";
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import DigitalScrapbook from "./Questions/DigitalScrapbook";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <Router basename="/heopeo.birthday">
      <div className="App">
        <header className="App-header">
          <h1>🎉 Happy Birthday Quiz 🎉</h1>
          <p>Answer all questions correctly to unlock a surprise video!</p>
        </header>
        <Routes>
          <Route path="/" element={<Question1 />} />
          <Route
            path="/question2"
            element={<Question2 onQuizCompleted={() => setQuizCompleted(true)} />}
          />
          <Route
            path="/Question3"
            element={<Question3 onPuzzleCompleted={() => setQuizCompleted(true)} />}
          />
          {quizCompleted && (
            <Route
              path="/Digital-Scrapbook"
              element={
                <div className="video-container">
                  <h2>Here's your surprise video!</h2>
                  <video width="320" height="240" controls>
                    <source src={examplemp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
