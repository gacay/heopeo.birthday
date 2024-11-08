import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Question3.css";
import piece1 from "../assets/1.png";
import piece2 from "../assets/2.png";
import piece3 from "../assets/3.png";
import piece4 from "../assets/4.png";

function Question3() {
  const navigate = useNavigate();

  // Initial pieces and positions (Empty grid cells)
  const initialPieces = [
    { id: 1, image: piece1, position: null },
    { id: 2, image: piece2, position: null },
    { id: 3, image: piece3, position: null },
    { id: 4, image: piece4, position: null },
  ];

  const [pieces, setPieces] = useState(initialPieces);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [isPuzzleCorrect, setIsPuzzleCorrect] = useState(null); // To track if the puzzle is correct

  // Handle drag start (for both grid and right panel)
  const handleDragStart = (e, piece) => {
    setDraggedPiece(piece);
    e.dataTransfer.setData("text/plain", piece.id); // Store the piece id in dataTransfer
    e.dataTransfer.effectAllowed = "move";
  };

  // Handle drop event on empty grid cell
  const handleDrop = (e, position) => {
    e.preventDefault();
    if (draggedPiece.position === null) {
      const newPieces = [...pieces];
      const pieceIndex = newPieces.findIndex(piece => piece.id === draggedPiece.id);

      // Update the piece position in the array
      newPieces[pieceIndex].position = position;
      setPieces(newPieces);
      setDraggedPiece(null);
    }
  };

  // Allow piece to be dropped in grid
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle removal of a piece from the grid (drag it back to the right panel)
  const handleGridPieceDrop = (e) => {
    e.preventDefault();
    if (draggedPiece) {
      const newPieces = [...pieces];
      const pieceIndex = newPieces.findIndex(piece => piece.id === draggedPiece.id);

      // Reset the piece's position to null and move it back to the right panel
      newPieces[pieceIndex].position = null;
      setPieces(newPieces);
      setDraggedPiece(null);
    }
  };

  // Function to check if the puzzle is correct
  const checkPuzzle = () => {
    const correctOrder = [4, 3, 2, 1]; // The correct order based on piece IDs
    const currentOrder = pieces
      .filter(piece => piece.position !== null)
      .sort((a, b) => a.position - b.position)
      .map(piece => piece.id);

    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      setIsPuzzleCorrect(true);
      navigate("/Digital-Scrapbook"); // Navigate to surprise video if the puzzle is complete in correct order
    } else {
      setIsPuzzleCorrect(false);
    }
  };

  return (
    <div className="puzzle-container">
      <div><h2>Arrange the pieces to complete the puzzle!</h2></div>
      <div className="puzzle-wrapper">
        <div className="puzzle-grid">
          {/* Empty grid cells */}
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="puzzle-cell"
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
              >
                {/* Show the piece in the correct position if it's placed */}
                {pieces.find(piece => piece.position === index) && (
                  <img
                    src={pieces.find(piece => piece.position === index).image}
                    alt={`Puzzle piece ${index}`}
                    className="puzzle-piece"
                    draggable
                    onDragStart={(e) => handleDragStart(e, pieces.find(piece => piece.position === index))}
                  />
                )}
              </div>
            ))}
        </div>

        <p>Drag pieces back here to remove them from the grid!</p>
        {/* Right panel with draggable pieces (Back container) */}
        <div
          className="back-container"
          onDrop={handleGridPieceDrop}
          onDragOver={handleDragOver}
        >
          {/* Display unselected pieces in the back container */}
          {pieces.map(piece => (
            piece.position === null && (
              <div
                key={piece.id}
                className="back-piece"
                draggable
                onDragStart={(e) => handleDragStart(e, piece)}
              >
                <img src={piece.image} alt={`Piece ${piece.id}`} />
              </div>
            )
          ))}
        </div>
      </div>
      <button onClick={checkPuzzle}>Submit</button>

      {/* Display message if the puzzle is correct or not */}
      {isPuzzleCorrect !== null && (
        <div>
          {isPuzzleCorrect ? (
            <p>You got the puzzle right! 🎉</p>
          ) : (
            <p>Oops, the puzzle is not correct. Try again!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Question3;
