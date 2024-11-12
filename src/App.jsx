import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Question3 from "./Questions/Question3";
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import Question6 from "./Questions/Question6";
import Question7 from "./Questions/Question7";
import Question8 from "./Questions/Question8";
import Question9 from "./Questions/Question9";
import Question10 from "./Questions/Question10";
import FinalQuestion from "./Questions/FinalQuestion";
import QRCode from "./Questions/QRCode";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <Router basename="/heopeo.birthday">
      <div className="App">
        <header className="App-header">
          <h1>🎉 Bday Treasure Hunt 🎉</h1>
          <p>Follow instructions and pay attention to all the details!</p>
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
          <Route path="/Question4" 
          element={<Question4 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/Question5" 
          element={<Question5 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/Question6" 
          element={<Question6 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/Question7" 
          element={<Question7 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/Question8" 
          element={<Question8 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/Question9" 
          element={<Question9 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/Question10" 
          element={<Question10 onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          <Route path="/FinalQuestion" 
          element={<FinalQuestion onQuizCompleted={() => setQuizCompleted(true)} />} 
          />
          {quizCompleted && (
            <Route
              path="/QR-Code"
              element={<QRCode />
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
